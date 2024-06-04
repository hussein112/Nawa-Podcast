import React, {useState, useEffect} from 'react'
import "./Podcasts.css"
import Podcast from '../Podcast/Podcast'
import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css";

const Podcasts = ({query, togglePlaying}) => {
  const [loading, setLoading] = useState(true);
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    if(query === "single"){ // Single podcast from each category
      fetch("")
    }else if(query === "kayana"){
      async function fetchData(){
        const response = await fetch("https://nawa.media/wp-json/wp/v2/cpt_newsroompost?categories=17&author=102&_embed");
        const podcasts = await response.json();
        setPodcasts(podcasts);
        setLoading(false);
      }
      fetchData();
    }else if(query === "kayan"){
      async function fetchData(){
        const response = await fetch("https://nawa.media/wp-json/wp/v2/cpt_newsroompost?categories=17&author=102&_embed");
        const podcasts = await response.json();
        setPodcasts(podcasts);
        setLoading(false);
      }
      fetchData();
    }else if(query === "ozone"){
      async function fetchData(){
        const response = await fetch("https://nawa.media/wp-json/wp/v2/cpt_newsroompost?categories=17&author=103&_embed");
        const podcasts = await response.json();
        setPodcasts(podcasts);
        setLoading(false);
      }
      fetchData();
    }else if(query === "anbar"){
      async function fetchData(){
        const response = await fetch("https://nawa.media/wp-json/wp/v2/cpt_newsroompost?categories=17&_embed&author=2,8");
        const podcasts = await response.json();
        setPodcasts(podcasts);
        setLoading(false);
      }
      fetchData();
    }
  })

  const renderPodcastPairs = () => {
    const podcastPairs = [];
    for (let i = 0; i < podcasts.length; i += 2) {
      podcastPairs.push(
        <React.Fragment key={i}>
          <Podcast podcast={podcasts[i]} togglePlaying={togglePlaying} id={i % 4 === 0 ? 'even' : 'odd'} wpId={2}  media="video" />
          {i + 1 < podcasts.length && <Podcast podcast={podcasts[i+1]} togglePlaying={togglePlaying} id={i % 4 === 0 ? 'odd' : 'even'} wpId={3} media="audio" />}
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
