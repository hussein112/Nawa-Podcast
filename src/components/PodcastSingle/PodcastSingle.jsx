import React, {useState, useRef, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Audio from '../Audio/Audio';
import Video from '../Video/Video';

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
            <div id='loading-icon'></div>
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


export default PodcastSingle
