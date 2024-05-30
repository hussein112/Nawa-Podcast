import React, {useState, useEffect} from 'react'
import "./Podcasts.css"
import Podcast from '../Podcast/Podcast'
import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";

const Podcasts = () => {
  const [loading, setLoading] = useState(true);
  const posts = [
    'post1',
    'post1',
    'post1',
    'post1',
    'post1',
    'post1',
  ]
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  })

  const renderPodcastPairs = () => {
    const podcastPairs = [];
    for (let i = 0; i < posts.length; i += 2) {
      podcastPairs.push(
        <React.Fragment key={i}>
          <Podcast id={i % 4 === 0 ? 'even' : 'odd'} wpId={2}  media="video" />
          {i + 1 < posts.length && <Podcast id={i % 4 === 0 ? 'odd' : 'even'} wpId={3} media="audio" />}
        </React.Fragment>
      );
    }
    return podcastPairs;
  };

  return (
    <div className={loading ? 'podcasts-loading' : 'podcasts'} style={{marginTop: '25px'}}>
      {!loading ? renderPodcastPairs() : <Skeleton containerClassName='loading' count={2} height={550} />}
    </div>
  )
}

export default Podcasts
