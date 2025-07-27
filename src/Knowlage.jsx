import React, { useEffect, useState } from 'react'
import KnowlageContainer from './components/KnowlageContainer'
import KnowlageSave from './components/KnowlageSave'




const Knowlage = () => {

    const [allData, setAllData]=useState([])
    const [saveItems, setSaveItems]=useState([]);
    const [saveBook, setSaveBook]=useState(0);
    const [time, setTime]=useState(0);


    const saveItemHandler=(save)=>{
        const isExist=saveItems.find((item)=> item.title  == save.title);
        
        if(!isExist){
            setSaveItems([...saveItems, save]);
            setSaveBook((prev)=> prev+1);
        }else{
            return alert('all rady')
        }



    }

    const handleMarksRed=(time)=>{

        setTime((prev)=> prev + time)
    }

    useEffect(()=>{
    
    fetch('Konwlage.json')
    .then((res)=> res.json())
    .then((data)=> setAllData(data))
    
},[])

  return (
    <div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '10px'
}}>
       <div>
         {allData.map((data)=> <KnowlageContainer key={data.id} data={data} saveItemHandler={saveItemHandler} handleMarksRed={handleMarksRed} />)}
       </div>
        <div>
            <h3>RedTime: {time} minutes</h3>
            <h1>{saveBook}</h1>
            {saveItems?.map((item,index)=> <KnowlageSave key={index} data={item} />)}
        </div>
    
    </div>
  )
}

export default Knowlage