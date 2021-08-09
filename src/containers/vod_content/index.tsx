import PropTypes from 'prop-types';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setShowModal } from '../../redux/modal';
import '../../styles/index.css';
import '../../styles/vod_content.scss';

export const ContentCard = ({ content, t }) => {
    const modalState = useAppSelector((state) => state.Modal);
    const dispatch = useAppDispatch();

    function showModal() {
        if (modalState.show) {
            dispatch(
                setShowModal({
                    show: false,
                    content: {},
                }),
            );
        } else {
            dispatch(
                setShowModal({
                    show: true,
                    content: content,
                }),
            );
        }
    }

    return (
        <div className={'content-card vod-content-card'} onClick={() => showModal()}>
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
            </div>
        </div>
    );
};

ContentCard.propTypes = {
    content: PropTypes.object,
    t: PropTypes.func,
};
