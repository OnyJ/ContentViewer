import PropTypes from 'prop-types';
import React from 'react';
import '../../styles/index.css';
import '../../styles/vod_content.scss';

export const ContentCard = ({ content, t }) => (
    <div className={'content-card vod-content-card'}>
        <img src={`${content.picture}`} alt={t('epg_img_alt') + content.title} />
        <div className={'card-info'}>
            <p>
                <span className="card-title">{content.title}</span>
                <br />
                <span>{` (${content.genre.replace(',', ', ')})`}</span>
                <span>{t('on') + content.content_provider}</span>
            </p>
            <p>
                <span>{content.directors != '' && t('by') + content.directors + ' '}</span>
            </p>
            {/* Display details
            <p>{'Cast: ' + content.cast}</p>
            <p>{content.short_summary}</p>
            <p>{content.summary}</p>
            */}
        </div>
    </div>
);

ContentCard.propTypes = {
    content: PropTypes.object,
    t: PropTypes.func,
};
