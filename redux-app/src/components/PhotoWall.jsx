/* eslint-disable jsx-a11y/alt-text */
import React from 'react'



const PhotoWall = ({posts}) => {

  return (
    <><div><h1>PhotoWall</h1></div>
   
        {posts.map(post => <div className='photoGrid'>
        <figure className='figure'> 
        <img className="photo" src={post.imageLink}/>
          <center><figcaption><h2>{post.description}</h2></figcaption></center>
          <div className='button-container'>
            <button className='button'>Remove</button></div></figure>
            </div>
            )}
            
        </>


  )
}

export default PhotoWall