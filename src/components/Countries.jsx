import React, { useEffect, useState } from 'react';
import User from './User';

const Countries = () => {
  const [users, setUsers] = useState();
  const [count, setCount]=useState(0);

  const [userName, setUserName]=useState([])


  const countVisit=(name)=>{
    setCount((prev)=> prev + 1)
    setUserName([...userName, name])


  }




  useEffect(() => {
   
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h3>Users List</h3>
      <h1>{count}</h1>
      <div>
        {userName.map((ite,index)=>{
          return(
            <ul  key={index}>
              <li>{ite}</li>
            </ul>
          )
        })}
      </div>
      {users?.map((user)=> <User key={user.id} user={user} countVisit={countVisit}  />)}
    </div>
  );
};

export default Countries;