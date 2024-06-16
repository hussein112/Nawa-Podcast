import React, { useEffect, useRef, useState } from 'react';
import { useWavesurfer } from '@wavesurfer/react';

const Audio = ({  togglePlaying, url, container, color, subtitlesFile, subtitlesOpacity, isSingle }) => {
  const containerRef = useRef();
  const [subtitles, setSubtitles] = useState([]);
  const [currentSubtitle, setCurrentSubtitle] = useState('');

  const { wavesurfer, isPlaying } = useWavesurfer({
    container: containerRef,
    url: url,
    waveColor: color,
    height: 80,
  });

  useEffect(() => {
    const fetchSubtitles = async () => {
      const response = await fetch(subtitlesFile);
      const data = await response.text();
      parseSubtitles(data);
    };
    
    fetchSubtitles();
  }, [subtitlesFile]);

  useEffect(() => {
    if (wavesurfer) {
      const onTimeUpdate = () => {
        const time = wavesurfer.getCurrentTime();
        const subtitle = getSubtitleAtTime(time);
        if (subtitle) {
          setCurrentSubtitle(subtitle.text);
        } else {
          setCurrentSubtitle('');
        }
      };
      
      wavesurfer.on('audioprocess', onTimeUpdate);
      return () => {
        wavesurfer.un('audioprocess', onTimeUpdate);
      };
    }
  }, [wavesurfer, subtitles]);

  const parseSubtitles = (data) => {
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const result = [];
    let i = 0;
    while (i < lines.length) {
      if (lines[i].includes('-->')) {
        const timeRange = lines[i].split('-->');
        const startTime = parseTime(timeRange[0]);
        const endTime = parseTime(timeRange[1]);
        const text = lines[i + 1];
        result.push({ startTime, endTime, text });
        i += 2;
      } else {
        i++;
      }
    }
    setSubtitles(result);
  };

  const parseTime = (timeString) => {
    const parts = timeString.trim().split(':');
    const seconds = parseFloat(parts.pop());
    const minutes = parseInt(parts.pop(), 10) * 60;
    const hours = parts.length ? parseInt(parts.pop(), 10) * 3600 : 0;
    return hours + minutes + seconds;
  };

  const getSubtitleAtTime = (time) => {
    return subtitles.find(subtitle => time >= subtitle.startTime && time <= subtitle.endTime);
  };

  const onPlayPause = () => {
    if(!isPlaying){
      togglePlaying();
    }
    if (wavesurfer) {
      wavesurfer.playPause();
      container();
    }
  };

  return (
    <div>
      <div ref={containerRef} className='audio-player'>
        {isPlaying ?
          <svg onClick={onPlayPause} width="39" height="49" viewBox="0 0 37 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 47H0V0H15V47Z" fill="#D77E78" />
            <path d="M37 47H22V0H37V47Z" fill="#D77E78" />
          </svg>
          :
          <svg onClick={onPlayPause} width="39" height="49" viewBox="0 0 39 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.947266 0.69873V48.1853L38.2581 24.442L0.947266 0.69873Z" fill="#D77E78" />
          </svg>
        }
      </div>
      <div className='subtitles-container' style={{opacity: subtitlesOpacity == 0 ? 1 : 0, top: !isSingle ? '40%' : '30%'}}>
        <p className='subtitles' style={{opacity: currentSubtitle ? 1 : 0}}>{currentSubtitle}</p>
      </div>
    </div>
  );
};

export default Audio;
