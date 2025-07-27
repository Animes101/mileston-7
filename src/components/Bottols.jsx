import React, { useEffect, useState } from 'react'
import Bottol from './Bottol'

const Bottols = () => {
    const [bottols, setBottols]=useState([])
    const [perchen, setPerchen]=useState([])


    useEffect(()=>{
        fetch('Bottol.json')
        .then((res)=> res.json())
        .then((data)=> setBottols(data))
    },[])


    const purchesHandle = (purchesName) => {
  const isExist = perchen.find(item => item.name === purchesName.name);

  if (!isExist) {
    setPerchen([...perchen, purchesName]);
  } else {
    alert("Already Purchased!");
  }
};

    console.log(perchen)
  return (
    <div>
        <h1>Bottols</h1>
        <div>
            {perchen?.map((item,index)=>{
                return(
                    <div key={index}>
                        <table border={1}>
                           <tbody>
                             <tr>
                                <th>Name</th>
                                <th>Prices</th>
                            </tr>
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                            </tr>
                           </tbody>
                        </table>

                    </div>
                )
            })}
        </div>
        <div style={{
  backgroundColor: 'tomato',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap:'10px',
}}>
            {bottols.map((bottol)=><Bottol  key={bottol.id} bottol={bottol} purchesHandle={purchesHandle} />)}
        </div>
    </div>
  )
}

export default Bottols