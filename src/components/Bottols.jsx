import React, { useEffect, useState } from 'react'
import Bottol from './Bottol'
import { addPurches, getPurches, removeFormLocalStorage } from './localStorage'

const Bottols = () => {
    const [bottols, setBottols]=useState([])
    const [perchen, setPerchen]=useState([])


    useEffect(()=>{
        fetch('Bottol.json')
        .then((res)=> res.json())
        .then((data)=> setBottols(data))
    },[])

    useEffect(()=>{

      

      if(bottols.length > 0){
        const localCard=getPurches();

        const saveCard=[]

        for(const name of localCard ){

          const localProduct=bottols.find(item=> item.name == name);

          saveCard.push(localProduct)


        }

        setPerchen(saveCard)
      }



    },[bottols])


    const purchesHandle = (purchesName) => {
  const isExist = perchen.find(item => item.name === purchesName.name);

  if (!isExist) {
    setPerchen([...perchen, purchesName]);
  } else {
    alert("Already Purchased!");
  }

  addPurches(purchesName.name)


};

const hanldeRemove=(name)=>{

  removeFormLocalStorage(name);
  const filter=perchen.filter((item)=> item.name !== name)

  setPerchen(filter);

}

  return (
    <div>
        <h1>Bottols</h1>
        <div>
            <table border={1}>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Prices</th>
                </tr>
                {perchen.map((item,index)=>{
                  return(
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td><button onClick={()=>hanldeRemove(item.name)}>remove</button></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
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