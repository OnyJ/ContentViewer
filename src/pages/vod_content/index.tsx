import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getVODContent } from '../../api/MaculosaAPI';
import { ContentCard } from '../../containers/vod_content';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { saveVODContent } from '../../redux/vod_content';
import '../../styles/index.css';

export default function VODContent(): JSX.Element {
    const category = 'Action/Aventure';
    const programs = useAppSelector((state) => state.VODContent.data);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    useEffect(() => {
        const fetchProgram = async () => {
            dispatch(saveVODContent(await getVODContent(category)));
        };
        fetchProgram();
    }, []);

    return (
        <div className={'content-page'}>
            <h2>{t('vod_content')}</h2>
            <div className={'flex'}>
                {programs.contents !== undefined ? (
                    Array.isArray(programs.contents) &&
                    programs.contents.map((content, key) => <ContentCard content={content} key={key} t={t} />)
                ) : (
                    <p>{t('no_content')}</p>
                )}
            </div>
        </div>
    );
}

VODContent.propTypes = {
    channelId: PropTypes.number,
};
