import React from 'react';
import { useTranslation } from 'react-i18next';
import { EPGPrograms } from '../../containers/epg_programs';

export default function Home(): JSX.Element {
    const { t } = useTranslation();
    return (
        <div style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center', display: 'flex' }}>
            <h1>{t('title')}</h1>
            <h2>{t('subtitle')}</h2>
            <EPGPrograms channelId={444} />
        </div>
    );
}
