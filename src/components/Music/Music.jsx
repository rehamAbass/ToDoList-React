import './music.css'
import React, { useEffect, useState } from 'react';
import Song from './Song/Song';
import tracksArray from './mySongs/tracksArray'

//----------------------------------------------------------------------------------------
const Music = () => {

    const [flags, setFlags] = useState([]);

    //----------------------------------------------------------------------------------------
    useEffect(() => {
        setFlags([false, false, false, false,
            false, false, false, false,
            false, false, false, false, false])
    }, [])
    //----------------------------------------------------------------------------------------
    const updateFlag = (id, flag) => {
        setFlags(flags.map((s, index) => (index === id) ? flag : false))
    }
    //----------------------------------------------------------------------------------------
    const stopOthers = (id) => {
        tracksArray.map(s => (s.id !== id) ? s.audio.pause() : '');
        setFlags(flags.map((s, index) => (index !== id) ? false : true))
    }
    //----------------------------------------------------------------------------------------
    const getFlag = (id) => { return flags[id]; }
    //----------------------------------------------------------------------------------------
    return (
        <div className='allSongsDiv'>
            {tracksArray.map(s => (
                <Song
                    key={s.id}
                    flag={getFlag(s.id)}
                    song={s}
                    stopOthers={stopOthers}
                    updateFlag={updateFlag}
                />
            ))
            }
        </div>
    );
}

export default Music;
