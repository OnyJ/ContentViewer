import PropTypes from 'prop-types';
import React from 'react';
import '../../styles/epg_programs.scss';

export const ProgramCard = ({ content, t }) => (
    <div className={'program-card'}>
        <img src={`${content.picture}`} alt={t('epg_img_alt') + content.title} />
        <div className={'card-info'}>
            <p className="card-title">{content.title}</p>
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
        </div>
    </div>
);

ProgramCard.propTypes = {
    content: PropTypes.object,
    t: PropTypes.func,
};
