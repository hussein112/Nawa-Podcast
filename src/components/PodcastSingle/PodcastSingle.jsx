import React, {useState, useRef, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Audio from '../Audio/Audio';
import Video from '../Video/Video';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const PodcastSingle = ({podcast, media, togglePlaying}) => {
    const [opacity, setOpacity] = useState(1);
    const [loading, setLoading] = useState(false);
    const podcastType = 'كيانــا';
    const episode = 'الحلقة الاولى ';


  const toggleContainer = () => {
    setOpacity(opacity === 0 ? 1 : 0);
  }

  function getPodcastType(author){
    switch(author){
      case "بودكاست كيانا":
        author = "كيانــا";
        break;
      case "بودكاست أوزون":
        author = "";
        break;
      case "أوزون":
        author = "";
        break;
      case "العنبر":
        author = "";
        break;
      default:
        
      return author;
    }
  }


  return (
    <>
        {loading ?
            <SkeletonLoader />
            : 
            <div className="podcast-single post-single post odd">
                {media === 'audio' && <img src={podcast.media} alt={podcast.title} className='bg' />}
                <div className="container" style={{opacity: opacity}}>
                    <h2>بودكاست {getPodcastType(podcast.author)}</h2>
                    <a dangerouslySetInnerHTML={{__html: podcast.title}}>{}</a>
                    <span className='date'>{episode}</span>
                </div>
                {media === 'audio' ? 
                    <Audio togglePlaying={togglePlaying} url="audio.mp3" container={toggleContainer} color="#D77E78" subtitlesOpacity={opacity} isSingle={true} />
                :
                    <Video togglePlaying={togglePlaying} toggleContainer={toggleContainer} />
                }
            </div>
        }
    </>
  )
}


const SkeletonLoader = () => {
    return (
      <div className="skeleton-container">
        <div className="skeleton-map">
          <Skeleton duration={2} enableAnimation={false} height='100%' />
        </div>
        <div className="skeleton-category">
          <Skeleton duration={2} width={30}  baseColor='white'/>
          <Skeleton duration={2} width={150} height={30}  baseColor='white'/>
        </div>
        <div className="skeleton-text">
          <Skeleton duration={2} count={3} width={500} height={30} baseColor='white'/>
        </div>
        <div className="skeleton-date">
          <Skeleton duration={2} width={100}  baseColor='white'/>
        </div>
        <div className="skeleton-audio">
          <Skeleton duration={2} height={50} baseColor='white' />
        </div>
      </div>
    );
  };

export default PodcastSingle
