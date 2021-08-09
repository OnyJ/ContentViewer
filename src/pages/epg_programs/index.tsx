import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getEPGPrograms } from '../../api/MaculosaAPI';
import { ProgramCard } from '../../containers/epg_programs';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { saveEPGPrograms } from '../../redux/epg_programs';
import '../../styles/epg_programs.scss';
import '../../styles/index.css';

export default function EPGPrograms(): JSX.Element {
    const channelId = 444;
    const programs = useAppSelector((state) => state.EPGPrograms.data);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    useEffect(() => {
        const fetchProgram = async () => {
            dispatch(saveEPGPrograms(await getEPGPrograms(channelId)));
        };
        fetchProgram();
    }, []);

    return (
        <div id={'epg-programs-container'}>
            <h2>{t('epg_title')}</h2>
            <div className={'flex'}>
                {programs.contents !== undefined ? (
                    Array.isArray(programs.contents) &&
                    programs.contents.map((content, key) => <ProgramCard content={content} key={key} t={t} />)
                ) : (
                    <p>{t('no_content')}</p>
                )}
            </div>
        </div>
    );
}

EPGPrograms.propTypes = {
    channelId: PropTypes.number,
};
