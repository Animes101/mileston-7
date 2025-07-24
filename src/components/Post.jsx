import React from 'react'

const Post = ({pos}) => {
    const {title,body,id}=pos
  return (
    <div style={{color:'white', background:'gray', padding:'10px', boxSizing:'border-box',margin:'5px'}}>
        <h1>Post</h1>
        <h2>{title}</h2>
        <p>{body}</p>
        <h5>{id}</h5>
    </div>
  )
}

export default Post