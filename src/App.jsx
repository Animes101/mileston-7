import { useEffect, useState } from 'react'
import './App.css'
import Post from './components/Post';
import Countries from './components/Countries';
import Bottols from './components/Bottols';

function App() {
  const [count, setCount]=useState(0);
  const [isShowAll, setIsShowAll]=useState(false);
  const [post, setPost]=useState([]);
  const [useDisable, setUseDisable]=useState(false);

  // console.log(post)


  if(count > 20){
    setUseDisable(true);
  }

  const handleClick=()=>{

    setCount(prev=> prev + 2);
  }


  useEffect(()=>{
    fetch('https://api.first.org/data/v1/countries')
      .then(response => response.json())
      .then(json => setPost(json))
  },[])


  return (
    <div>
      {/* <div>
      <h2>{count}</h2>
      <button disabled={useDisable} onClick={handleClick}>Click</button>
      {post.slice(0,isShowAll ? post.length: 30).map((item)=><Post key={item.id} pos={item} />)}
      <button onClick={()=>setIsShowAll(!isShowAll)}>{isShowAll ? 'Less': 'Show All'}</button>
    </div> */}
    {/* <Countries /> */}
    <Bottols />
    </div>
  )
}

export default App
