import React from 'react'
import Articles from './Articles'
import { useLocation } from 'react-router-dom'
import Statistics from './Statistics/Statistics'
// AIzaSyC_OkIOWwDLcmMcedAWGd-o55QT_LGv5no
const ClimaFact = () => {
  const location = useLocation();
  const data = location.state.data;
  console.log(data);
  return (
    <>
      <div className="container paragraphs">
        <h2>مقيـاســــ  ClimaFact للتضليــل</h2>
        <p>نعمل على تطوير مؤشر  التضليل حول المناخ (ClimaFact) باستخـدام خاصية الذكاء الاصطنـــاعي؛ عبر جمع وتحليل البيانــــات من وسائل الإعلام والمصادر الحكومية. تعتمد عملية تقييم المصادر على معايير محددة ضمن إطار زمني معيّن، ويتم تحليـــــل المحتـــوى وإضافة التغذية الراجعة بناءً على النتائج المؤتمتة لعمليات الرصد، والاأخذ بعين الاعتبار التضليل المتعمّد للمعلومــات، ومقارنته بالحقائق من خلال إنتاج تحقيقات ميدانية حول الالتزامات الحكومية. يتم استخدام المنهج الاستقـــرائي والاستنتاجي في التحليــل لتوضيح الدوافع والمتّبعة</p>
      </div>
        {data &&
            <Statistics data={data}/>}
        <div style={{ paddingBottom: '50px', paddingTop: '50px' }} className="container">
          <div className="waves"></div>
        </div>
        <Articles />
        <div style={{ width: '300px', margin: '0 auto' }}>
    </div>
    </>
  )
}

export default ClimaFact