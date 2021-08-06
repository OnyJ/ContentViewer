import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getEPGPrograms } from '../../api/MaculosaAPI';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { saveEPGPrograms } from '../../redux/epg_programs';

const DisplayProgram = ({ content, t }) => (
    <div>
        <p>{content.title}</p>
        <p>{content.category}</p>
        <p>
            <span>
                {content.broadcast_datetime
                    .slice(0, 16)
                    .replace(/-/g, '/')
                    .replace('T', t('from'))
                    .replace(':', t('time_separation'))}
            </span>
            <span>
                {t('to')}
                {content.broadcast_end_datetime.slice(11, 16).replace(':', t('time_separation'))}
            </span>
        </p>
        <img src={`${content.picture}`} alt={t('epg_img_alt') + content.title} width="300" />
    </div>
);

export function EPGPrograms({ channelId }: { channelId: number }): JSX.Element {
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
        <div>
            <h2>{t('epg_title')}</h2>
            {programs.contents !== undefined ? (
                Array.isArray(programs.contents) &&
                programs.contents.map((content, key) => <DisplayProgram content={content} key={key} t={t} />)
            ) : (
                <p>{t('no_content')}</p>
            )}
        </div>
    );
}

EPGPrograms.propTypes = {
    channelId: PropTypes.number,
};

DisplayProgram.propTypes = {
    content: PropTypes.object,
    t: PropTypes.func,
};
