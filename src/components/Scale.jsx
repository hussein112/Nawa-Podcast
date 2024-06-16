import React, {useState} from 'react'
import Title from './Title/Title'
import Maps from './Maps'
import Statistics from './Statistics/Statistics'

const Scale = ({setPassData}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState();
  return (
    <>
        <div className='container'>
            <Title 
                title="مقياس التضليــل" 
                description="نعتمد على مراقبة وسائل الإعلام وفق معايير محددة لرصد الأخبار المتعلقة بالمناخ، وذلك باستخدام خاصية ذكاء اصطناعي لتجميع وتحليل الاتجاهات الأكثر انتشارًا بين القراء في كل بلد. هذا يمكننا من كشف التضليل المتعمّد للمعلومات ومقارنته بالحقائق. "
                words={1} />
        </div>
        <Maps setData={setData} setLoading={setLoading} setPassData={setPassData} />
        {data &&
            <Statistics data={data} loading={loading} />}
    </>
  )
}

export default Scale
