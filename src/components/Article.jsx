import React from 'react'
import GaugeChart from './Gauge/GaugeChart'
const Article = () => {
  return (
    <div className='article-card'>
        <div className="article-header">
            <div className="text">
                <h2>مرزوق المرزوقي - وزير البيئة في اليمن </h2>
                <h3>منشور بتاريخ  09مايو  2024 ع انستغرام </h3>
            </div>
            <img src={require("../assets/1.jpeg")} />
        </div>
        <p className="article-excerpt">
        يتساءل المرء بعد مشاهدة الفيلم: كيف كتب يحيى حسن عما اختبره وعما رآه في حياته القصيرة؟ وكيف تبيّن للجميع في دول الشمال الباردة، شعراء ونقاداً وجمهوراً متحمساً، أنه كان يمتلك موهبةً خاصةً ونادرةً في الشّعر، أصبحت لعنتَه أيضاً؟
        </p>
        <div className="article-footer">
            <div className="accuracy">
                <GaugeChart
                    value={100}
                    min={0}
                    max={100}
                />
                <span>تم التحقق من قبل مرزوق المرزوقي .  7 مـايو 2024 </span>
            </div>
            <span className="country">الـعــــــراق</span>
        </div>
    </div>
  )
}

export default Article
