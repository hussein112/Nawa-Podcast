import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Home.css"
import Channels from '../Channels/Channels';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='podcast-home container'>
      <h1>برامــــــج بودكاست  نوى ميديا</h1>
      <div className="podcast-programs">
        <div className="program" onClick={() => {
          navigate("/Kayan")
        }}>
            <img src={require("../../assets/kayan.png")} alt="" />
            <h2>بودكاست كيـان</h2>
            <p>من خلال بودكاست "كيان"  نناقش الهوية السورية  من وجهة النظر الشخصية ومما قرأه أو شاهده السوريين في المهجر و في داخل </p>
        </div>

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
  )
}

export default Home
