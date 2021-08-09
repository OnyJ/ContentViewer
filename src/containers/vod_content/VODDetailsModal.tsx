import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setShowModal } from '../../redux/modal';
import '../../styles/index.css';
import '../../styles/modal.scss';

export function VODDetailsModal(): JSX.Element {
    const dispatch = useAppDispatch();
    const modalState = useAppSelector((state) => state.Modal);
    const showHideClassName = modalState.show ? 'modal-d-block' : 'modal-d-none';
    const { t } = useTranslation();
    const isMobileScreen = window.innerWidth < 800;
    // return isMobileScreen ? (
    return (
        <div className={showHideClassName}>
            <div className="details-modal-container">
                <div className="details-modal">
                    <div className="modal-text">
                        <div className="mobile-main-infos">
                            <h2>{modalState.content.title}</h2>
                            {/* {isMobileScreen ? <p>small scren</p> : <p>large screen</p>} */}
                            <h3>{t('on') + modalState.content.content_provider}</h3>
                            <p>
                                <span>
                                    {modalState.content.directors != '' && t('by') + modalState.content.directors + ' '}
                                </span>
                            </p>
                            {isMobileScreen && <p className="cast">{'Cast: ' + modalState.content.cast}</p>}
                        </div>
                        {isMobileScreen ? (
                            <>
                                <img
                                    src={`${modalState.content.picture}`}
                                    alt={t('epg_img_alt') + modalState.content.title}
                                />
                            </>
                        ) : (
                            <>
                                <p>{'Cast: ' + modalState.content.cast}</p>
                                <button onClick={() => dispatch(setShowModal({ show: false, content: {} }))}>
                                    {t('close')}
                                </button>
                            </>
                        )}
                    </div>
                    {isMobileScreen ? (
                        <>
                            <p className="summary">{modalState.content.summary}</p>
                            <button onClick={() => dispatch(setShowModal({ show: false, content: {} }))}>
                                {t('close')}
                            </button>
                        </>
                    ) : (
                        <>
                            <img
                                src={`${modalState.content.picture}`}
                                alt={t('epg_img_alt') + modalState.content.title}
                            />
                            <p className="summary">{modalState.content.summary}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
//    ) : (
//        <div className={showHideClassName}>
//            <div className="details-modal-container">
//                <div className="details-modal">
//                    <div className="modal-text">
//                        <div className="mobile-main-infos">
//                            <h2>{modalState.content.title}</h2>
//                            <p>big scren</p>
//                            <h3>{t('on') + modalState.content.content_provider}</h3>
//                            <p>
//                                <span>
//                                    {modalState.content.directors != '' && t('by') + modalState.content.directors + ' '}
//                                </span>
//                            </p>
//                        </div>
//                        <p>{'Cast: ' + modalState.content.cast}</p>
//                        <button onClick={() => dispatch(setShowModal({ show: false, content: {} }))}>
//                            {t('close')}
//                        </button>
//                    </div>
//                    <img src={`${modalState.content.picture}`} alt=//{t('epg_img_alt') + modalState.content.title} />
//                    <p className="summary">{modalState.content.summary}</p>
//                </div>
//            </div>
//        </div>
//    );
//}
