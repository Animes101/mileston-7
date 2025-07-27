import React, { useState } from 'react'

const User = ({user,countVisit,mark}) => {
    const {name, address, email, phone, username}=user
    const [visited, setVisited]=useState(false);


    const handleVisit=()=>{
        setVisited(!visited);
    }

  return (
    <div style={{backgroundColor:'gray', color:'white', padding:'5px',margin:'5px',boxSizing:'border-box'}}>
        <h2>{name}</h2>
        <h2>{username}</h2>
        <h2>{phone}</h2>
        <a href="">{email}</a>
        <h2>{user?.website }</h2>
        <h4>Cyty: {address?.city}</h4>
        <h4>{address.city.geo?.lat}</h4>
        <button style={{background: visited ? 'green': 'red'}} onClick={handleVisit}>{visited ? 'visited': 'visit'}</button>
        <button disabled={mark} onClick={()=>countVisit(name)}>Mark</button>

    </div>
  )
}

export default User