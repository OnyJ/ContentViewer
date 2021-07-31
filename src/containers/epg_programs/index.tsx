import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { getEPGPrograms } from '../../api/MaculosaAPI';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { saveEPGPrograms } from '../../redux/epg_programs';

export function EPGPrograms({ channelId }): JSX.Element {
    const programs = useAppSelector((state) => state.EPGPrograms.data);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchProgram = async () => {
            dispatch(saveEPGPrograms(await getEPGPrograms(channelId)));
        };
        fetchProgram();
    }, []);

    // Future component display
    if (programs.contents !== undefined) console.log(programs.contents);
    else console.log('No content found');

    return (
        <div>
            <h2>Here are the programs</h2>
        </div>
    );
}

EPGPrograms.propTypes = {
    channelId: PropTypes.number,
};
