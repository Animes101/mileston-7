import React from 'react'

const KnowlageContainer = ({data,saveItemHandler,handleMarksRed}) => {

    const {cover,title,minute,bookName}=data

    const handleSaveItem=(saveItem)=>{


         saveItemHandler(saveItem)


    }

    const handleTime=(minute)=>{

      handleMarksRed(minute)

    }
  return (
    <article>
        <img src={cover} alt="" />
        <h1>{title}</h1>
        <h3>{bookName}</h3>
        <h4>{minute}</h4>
        <button onClick={()=> handleSaveItem({minut:minute, title:title})}>Save</button>
        <button onClick={()=>handleTime(minute)}>Mark Time</button>

    </article>
  )
}

export default KnowlageContainer