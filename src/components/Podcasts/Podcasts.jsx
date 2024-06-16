import React, {useState, useEffect, useCallback} from 'react'
import "./Podcasts.css"
import Podcast from '../Podcast/Podcast'

const Podcasts = ({query, togglePlaying}) => {
  const [loading, setLoading] = useState(true);
  const [podcasts, setPodcasts] = useState([]);
  const [_query, setQuery] = useState([]);

  useEffect(() => {
    setLoading(true);
    if(query === "single"){ // Single podcast from each category
      async function fetchData(){
        const response = await fetch("https://nawa.media/wp-json/wp/v2/podcast-singles");
        const podcasts = await response.json();
        setPodcasts(podcasts);
        setLoading(false);
      }
      fetchData();
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
  }, [])

  function get_author(name){
    switch(name){
      case "kayan":
        return 102;
      case "kayana":
        return 102
      case "ozone":
        return 103
      case "anbar":
        return '2, 8'
      default:
        return 0;
    }
  }

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  async function search(query, setLoading, setPodcasts) {
    setLoading(true);
    let response;
    if (get_author(getSearchQuery()) !== 0) {
      response = await fetch(`https://nawa.media/wp-json/wp/v2/search?s=${query}&author=${get_author(getSearchQuery())}`);
    } else {
      response = await fetch(`https://nawa.media/wp-json/wp/v2/search?s=${query}`);
    }
    const podcasts = await response.json();
    setPodcasts(podcasts);
    setLoading(false);
  }
  

  function getSearchQuery(){
    return window.location.hash.substring(1)
  }


  const renderPodcastPairs = () => {
    let counter = 0;
    const podcastPairs = [];
    if(podcasts.code === 'no_posts'){
      return <p className='container no-results'>عذراً لا يوجد اية نتائج</p>
    }
    for (let i = 0; i < podcasts.length; i += 2) {
      podcastPairs.push(
        <React.Fragment key={i}>
          <Podcast podcast={podcasts[i]} togglePlaying={togglePlaying} id={i % 4 === 0 ? 'even' : 'odd'} />
          {i + 1 < podcasts.length && <Podcast podcast={podcasts[i+1]} togglePlaying={togglePlaying} id={i % 4 === 0 ? 'odd' : 'even'} />}
        </React.Fragment>
      );
    }
    return podcastPairs;
  };

  const debouncedSearch = useCallback(debounce((query) => {
    search(query, setLoading, setPodcasts);
  }, 300), []);

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    debouncedSearch(newQuery);
  };

  return (
    <div className={loading ? 'podcasts-loading' : ''} style={{marginTop: '25px'}}>
      <form id="live-search-form" role="search" tabindex="1">
        <input 
          onChange={handleChange}
          value={_query}
          type="text"
          placeholder="إبحث..." />
      </form>
      <div className="podcasts-container">
        {!loading ? renderPodcastPairs() : <div id="loading-icon"></div>}
      </div>
    </div>
  )
}

export default Podcasts
