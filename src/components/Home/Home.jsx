import React, {useState, useEffect, useContext} from 'react'
import "./Home.css"
import Channels from '../Channels/Channels';
import Kayan from "../Kayan/Kayan"
import PodcastSingle from '../PodcastSingle/PodcastSingle'
import Podcasts from '../Podcasts/Podcasts';
import { PopupContext } from '../../context/PopUpContext';


const Home = () => {
  const [showPodcast, setShowPodcast] = useState(false);
  const { showPopUp, setShowPopUp } = useContext(PopupContext);
  const [showSingles, setShowSingles] = useState(true);
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash === 'kayan') {
        setShowPodcast(true);
        setShowSingles(false);
        setTimeout(() => {
          const element = document.getElementById('kayan');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 0);
      }else if(hash === 'podcast-2' || hash === 'podcast-3'){
      } else {
        setShowPodcast(false);
        setShowSingles(true);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

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

          <div className="program">
              <img src={require("../../assets/anbar.png")} alt="" />
              <h2>العنبر</h2>
              <p>العنبر رقم 12  يروي قصص المتضررين من الانفجار الذي وقع يوم الرابع من آب 2020 عند الساعة 6:07 في مرفأ بيروت، والألم الذي عاشوه والخسائر المادية والجسدية والنفسية التي مُنيوا بها عقب المصيبة.</p>
          </div>

          <div className="program">
              <img src={require("../../assets/ozon.png")} alt="" />
              <h2>بودكاســت أوزون</h2>
              <p>يطرحبودكاست أوزون  قضايا التغيّر المناخي في لبنان ويناقش الحلول انطلاقًا من المشاكل وانعكاسها على الحياة البشرية.</p>
          </div>

          <div className="program">
              <img src={require("../../assets/kayana.png")} alt="" />
              <h2>بودكاست كيانــا</h2>
              <p>يناقش بودكاست كيانا  التأثيرات السلبية للتغير المناخي في مصر  و يستعراض التأثيرات البيئية والاقتصادية والاجتماعية لتغير المناخ وأهمية التصدي لهذا التحدي العالمي.</p>
          </div>
        </div>
        <h2>نوى على منصات البودكاست</h2>
        <Channels />
      </div>
      {showSingles && <Podcasts query="single" />}
      {showPodcast && (
        <div id="kayan">
          <Kayan />
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
            <PodcastSingle media="audio" />
          </div>
        }
    </>
  )
}

export default Home
