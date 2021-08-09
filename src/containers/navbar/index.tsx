import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import '../../styles/navbar.scss';

export default function Navbar(): JSX.Element {
    const { t } = useTranslation();
    return (
        <div id="navbar">
            <ul>
                <li>
                    <Link className={'link'} to={ROUTES.home}>
                        {t('home')}
                    </Link>
                    <Link className={'link'} to={ROUTES.epg_programs}>
                        {t('epg_programs')}
                    </Link>
                    <Link className={'link'} to={ROUTES.vod_content}>
                        {t('vod_content')}
                    </Link>
                </li>
            </ul>
        </div>
    );
}
