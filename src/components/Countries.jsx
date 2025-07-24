import React, { useEffect, useState } from 'react'

const Countries = () => {
    const [countries, setCountries]=useState();

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then((res)=>res.json())
        .then((data)=> setCountries(data))
        .catch((err)=> console.log(err.message))

    },[])

    console.log(countries)
  return (
    <div>Countries</div>
  )
}

export default Countries