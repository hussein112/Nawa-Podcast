import React, {useState, useEffect, useContext} from 'react'
import "./Home.css"
import Channels from '../Channels/Channels';
import Kayan from "../Kayan/Kayan"
import Anbar from "../Anbar"
import Ozone from "../Ozone"
import Kayana from "../Kayana"
import PodcastSingle from '../PodcastSingle/PodcastSingle'
import Podcasts from '../Podcasts/Podcasts';
import { PopupContext } from '../../context/PopUpContext';


const Home = () => {
  const [showKayan, setShowKayan] = useState(false);
  const [showAnbar, setShowAnbar] = useState(false);
  const [showOzone, setShowOzone] = useState(false);
  const [showKayana, setShowKayana] = useState(false);
  const { showPopUp, setShowPopUp } = useContext(PopupContext);
  const [showSingles, setShowSingles] = useState(true);
  useEffect(() => {
    function hideAll() {
      setShowSingles(false);
      setShowAnbar(false);
      setShowKayan(false);
      setShowKayana(false);
      setShowOzone(false);
    }
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash === 'kayan') {
        hideAll();
        setShowKayan(true);
        setTimeout(() => {
          const element = document.getElementById('kayan');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }else if(hash === 'anbar'){
        hideAll();
        setShowAnbar(true);
        setTimeout(() => {
          const element = document.getElementById('anbar');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }else if(hash === 'ozone'){
        hideAll();
        setShowOzone(true);
        setTimeout(() => {
          const element = document.getElementById('ozone');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else if(hash === 'kayana'){
        hideAll();
        setShowKayana(true);
        setTimeout(() => {
          const element = document.getElementById('kayana');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }else {
        hideAll();
        setShowSingles(true);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
   
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };

  }, []);



  function togglePlaying(){
    let x = document.querySelectorAll(".audio-player div")
    x.forEach(audio => {
      const audioRef =  audio.shadowRoot.querySelector("audio")
      audioRef.pause();
    })

    let y = document.querySelectorAll(".video-player video");
    y.forEach(video => {
      video.pause();
    })
  }


  return (
    <>
      <div className='podcast-home container'>
        <h1>برامــــــج بودكاست  نوى ميديا</h1>
        <div className="podcast-programs">
          <a href="#kayan" className="program">
              <img src={require("../../assets/kayan.png")} alt="" />
              <h2>بودكاست كيـان</h2>
              <p>من خلال بودكاست "كيان"  نناقش الهوية السورية  من وجهة النظر الشخصية ومما قرأه أو شاهده السوريين في المهجر و في داخل </p>
          </a>

          <a href="#anbar" className="program">
              <img src={require("../../assets/anbar.png")} alt="" />
              <h2>العنبــر</h2>
              <p>
              العنبر رقم 12  يروي قصص المتضررين من الانفجار الذي وقع يوم الرابع من آب 2020 عند الساعة 6:07 في مرفأ بيروت، والألم الذي عاشوه والخسائر المادية والجسدية والنفسية التي مُنيوا بها عقب المصيبة.
              </p>
          </a>

          <a href="#ozone" className="program">
              <img src={require("../../assets/ozon.png")} alt="" />
              <h2>بودكاســت أوزون</h2>
              <p>
              يطرح بودكاست أوزون  قضايا التغيّر المناخي في لبنان ويناقش الحلول انطلاقًا من المشاكل وانعكاسها على الحياة البشرية.
              </p>
          </a>

          <a href="#kayana" className="program">
              <img src={require("../../assets/kayana.png")} alt="" />
              <h2>بودكاست كيانــا</h2>
              <p>
              يناقش بودكاست كيانا  التأثيرات السلبية للتغير المناخي في مصر  و يستعراض التأثيرات البيئية والاقتصادية والاجتماعية لتغير المناخ وأهمية التصدي لهذا التحدي العالمي.
              </p>
          </a>
        </div>
        <h2>نوى على منصات البودكاست</h2>
        <Channels />
      </div>
      {showSingles && <Podcasts togglePlaying={togglePlaying} query="single" />}
      {showKayan && (
        <div id="kayan">
          <Kayan />
        </div>
      )}
      {showAnbar && (
        <div id="anbar">
          <Anbar />
        </div>
      )}
      {showOzone && (
        <div id="ozone">
          <Ozone />
        </div>
      )}
      {showKayana && (
        <div id="kayana">
          <Kayana />
        </div>
      )}
      {showPopUp && 
          <div className="podcast-single-container">
            <a className='close' onClick={() => setShowPopUp(false)}>
              <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L20 22" stroke="#D78079" stroke-width="3" stroke-linecap="round"/>
                <path d="M20 2L2 22" stroke="#D78079" stroke-width="3" stroke-linecap="round"/>
              </svg>
            </a>
            <PodcastSingle podcast={showPopUp[1]} togglePlaying={togglePlaying} media="audio" />
          </div>
        }
    </>
  )
}

export default Home
