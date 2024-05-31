import React, {useState, useRef, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Audio from '../Audio/Audio';
import Video from '../Video/Video';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const PodcastSingle = ({media}) => {
    const [opacity, setOpacity] = useState(1);
    const [loading, setLoading] = useState(true);
    const podcastType = 'كيانــا';
    const episode = 'الحلقة الاولى ';


    const toggleContainer = () => {
      setOpacity(opacity === 0 ? 1 : 0);
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

  return (
    <>
        {loading ?
            <SkeletonLoader />
            : 
            <div className="podcast-single post-single post odd">
                {media === 'audio' && <img src={require("../../assets/1.jpeg")} alt="" className='bg' />}
                <div className="container" style={{opacity: opacity}}>
                    <h2>بودكاست {podcastType}</h2>
                    <a>بودكاست "أوزون" الحلقة السادسة والأخيرة - من مزيل العرق للإنترنت استعمالات يومية بتأثر عالمناخ</a>
                    <span className='date'>{episode}</span>
                </div>
                {media === 'audio' ? 
                    <Audio url="audio.mp3" container={toggleContainer} color="#D77E78" subtitlesOpacity={opacity} isSingle={true} />
                :
                    <Video toggleContainer={toggleContainer} />
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
