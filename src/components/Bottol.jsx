import React from 'react'

const Bottol = ({bottol,purchesHandle}) => {

    const {img, name, price, ratings, ratingsCount,seller,shipping,stock}=bottol;


  return (
    <div style={{background:'gray', padding:'10px'}}>
        <img style={{width:'300px' , display:'block', margin:'auto'}} src={img} alt={name} />
        <h1>{name}</h1>
        <h2>{price}</h2>
        <h4>{ratings}</h4>
        <h1>{ratingsCount}</h1>
        <h3>{seller}</h3>
        <h3>{shipping}</h3>
        <h2>{stock}</h2>
        <button onClick={()=>purchesHandle({name:name, price:price})}>Purchase</button>

    </div>
  )
}

export default Bottol