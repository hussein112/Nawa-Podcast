import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';

const Video = ({toggleContainer}) => {
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const playerRef = useRef(null);
  const progressBarRef = useRef(null);
  const [hovering, setIsHovering] = useState(false);
  const [playing, setPlaying] = useState(false);


  const playVideo = () => {
    setPlaying(!playing);
    toggleContainer();
  }


  const handleProgress = (state) => {
    if (!isDragging) {
      setProgress(state.played);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const newProgress = calculateProgress(e);
    setProgress(newProgress);
    if (playerRef.current) {
      playerRef.current.seekTo(newProgress);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newProgress = calculateProgress(e);
      setProgress(newProgress);
      if (playerRef.current) {
        playerRef.current.seekTo(newProgress);
      }
    }
  };

  const calculateProgress = (e) => {
    const rect = progressBarRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newProgress = offsetX / rect.width;
    return newProgress < 0 ? 0 : newProgress > 1 ? 1 : newProgress;
  };

  const handleEnded = () => {
    setPlaying(false);
    toggleContainer();
  };



  return (
    <div className='video-player'>
      <ReactPlayer
        ref={playerRef}
        url={require('../../assets/2.mp4')}
        stopOnUnmount={false}
        playing={playing}
        onProgress={handleProgress}
        onDuration={(dur) => setDuration(dur)}
        width='auto'
        height='auto'
        loop={false}
        onEnded={handleEnded}
        config={{ file: {
          tracks: [
            {kind: 'captions', src: require("../../assets/2.vtt"), srcLang: 'ar', default: true},
          ]
        }}}
      />
      <div className="controls">
        {playing ?
            <svg onClick={playVideo} className='play-pause' width="39" height="49" viewBox="0 0 37 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 47H0V0H15V47Z" fill="#D77E78"/>
                <path d="M37 47H22V0H37V47Z" fill="#D77E78"/>
            </svg>
          :
              <svg onClick={playVideo} className='play-pause' width="39" height="49" viewBox="0 0 39 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.947266 0.69873V48.1853L38.2581 24.442L0.947266 0.69873Z" fill="#D77E78"/>
              </svg>
        }
        <div
          ref={progressBarRef}
          style={{width: '100%', cursor: 'pointer', marginTop: '5px'}}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className='progress-bar'
        >
          <svg onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} width="100%" height="20" viewBox="0 0 903 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.745117" y="0.886719" width="100%" height="10" rx="4.55469" fill="white" fillOpacity="0.39" />
            <rect x="0" y="0" width={`${progress * 100}%`} height="10" rx="4.55469" fill="blue" />
          </svg>
        </div>
      </div>

    </div>
  );
};

export default Video;
