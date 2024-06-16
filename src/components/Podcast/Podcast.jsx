import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Audio from '../Audio/Audio';
import Video from '../Video/Video';
import { PopupContext } from '../../context/PopUpContext';

const Podcast = ({ podcast, id, togglePlaying }) => {
    const { setShowPopUp } = useContext(PopupContext);
    const [opacity, setOpacity] = useState(1);
    const [media, setMedia] = useState('');
    const [subtitles, setSubtitles] = useState();

    const toggleContainer = () => {
        setOpacity(opacity === 0 ? 1 : 0);
    }
    useEffect(() => {
        let url = '';
        if(podcast.media[0].acf_fc_layout === 'podcast'){
          url = podcast.media[0].media_file.url;
        }
        const audioExtensions = ['mp3', 'wav', 'ogg', 'm4a', 'aac'];
        const videoExtensions = ['mp4', 'webm', 'ogv', 'mov', 'avi', 'mkv'];
        const extension = url.split('.').pop().split(/\#|\?/)[0].toLowerCase();
        if (audioExtensions.includes(extension)) {
          setMedia('audio');
        } else if (videoExtensions.includes(extension)) {
          setMedia('video');
        } else {
          setMedia('unknown');
        }

        setMedia("video");

        if(podcast.media[0].acf_fc_layout === 'podcast'){
            setSubtitles(podcast.media[0].transcript.url);
        }
    })
  return (
    <div className={"post post-single " + id + (media === "video" ? " border" : "")}>
        {media === "audio" ? <img src={podcast.media} alt="a Post" className='bg' /> :
            <div className='bg bg-pattern'></div>
        }
        <div className="container" style={{opacity: opacity}}>
            <svg width="23" height="30" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.4252 16.2155C22.4252 15.9535 22.3211 15.7022 22.1359 15.5169C21.9506 15.3316 21.6993 15.2275 21.4373 15.2275C21.1753 15.2275 20.924 15.3316 20.7387 15.5169C20.5534 15.7022 20.4493 15.9535 20.4493 16.2155C20.4493 18.651 19.4818 20.9867 17.7597 22.7089C16.0375 24.431 13.7018 25.3985 11.2663 25.3985C8.83084 25.3985 6.49511 24.431 4.77296 22.7089C3.05082 20.9867 2.08332 18.651 2.08332 16.2155C2.08332 15.9535 1.97924 15.7022 1.79396 15.5169C1.60868 15.3316 1.35739 15.2275 1.09537 15.2275C0.833352 15.2275 0.582063 15.3316 0.396786 15.5169C0.211509 15.7022 0.107422 15.9535 0.107422 16.2155C0.113315 19.0017 1.1595 21.6853 3.04095 23.7404C4.9224 25.7955 7.50348 27.0738 10.2784 27.325V28.9304C10.2784 29.1924 10.3825 29.4437 10.5677 29.629C10.753 29.8143 11.0043 29.9184 11.2663 29.9184C11.5283 29.9184 11.7796 29.8143 11.9649 29.629C12.1502 29.4437 12.2543 29.1924 12.2543 28.9304V27.325C15.0292 27.0738 17.6103 25.7955 19.4917 23.7404C21.3732 21.6853 22.4193 19.0017 22.4252 16.2155Z"/>
                <path d="M11.2667 23.4222C13.1773 23.4196 15.0089 22.6594 16.36 21.3084C17.711 19.9574 18.4712 18.1257 18.4738 16.2151V7.36305C18.0786 -2.19537 4.45475 -2.20031 4.05957 7.36305V16.2151C4.06218 18.1257 4.82234 19.9574 6.17337 21.3084C7.5244 22.6594 9.35603 23.4196 11.2667 23.4222ZM6.03547 7.36305C6.32198 0.447398 16.2114 0.447398 16.4979 7.36305V16.2151C16.4979 17.6025 15.9467 18.9331 14.9657 19.9141C13.9846 20.8951 12.6541 21.4463 11.2667 21.4463C9.87927 21.4463 8.5487 20.8951 7.56765 19.9141C6.58661 18.9331 6.03547 17.6025 6.03547 16.2151V7.36305Z"/>
            </svg>
            <h2>بودكاست</h2>
            <a 
                style={{cursor: 'pointer'}} 
                onClick={() => setShowPopUp(podcast)} 
                dangerouslySetInnerHTML={{__html: podcast.title}}></a>
            <span className='date'>{podcast.date}</span>
        </div>
        {media === "audio" ? 
            <Audio subtitlesFile={subtitles} togglePlaying={togglePlaying} url={podcast.audio} container={toggleContainer} color={id === 'even' ? '#016677' : '#D78079'} subtitlesOpacity={opacity} isSingle={false} />
        :
        <>
            <Video togglePlaying={togglePlaying} toggleContainer={toggleContainer} />
        </>
        }
    </div>
  )
}

export default Podcast
