import React, { useState, useEffect } from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post';
import db from './firebase';

function Feed() {
  const [posts,setPosts]= useState([]);

  useEffect(()=>{
      db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot)=>
      setPosts(snapshot.docs.map((doc)=>({id:doc.id,data:doc.data()})))
      );
  },[])
    return (
        <div className='feed'>
          <StoryReel/>
          
          <MessageSender/>

         {posts.map((post)=>(
             <Post
             key={post.id}
             profilePic={post.data.profilePic}
             message={post.data.message}
             timestamp={post.data.timestamp}
             username={post.data.username}
             image={post.data.image}

             />

           ))


         }
           
         
          {/* <Post
          profilePic='https://avatars2.githubusercontent.com/u/6072862?s=460&u=e8f911bb1947620d254e36ba8a9f6002390e9a7c&v=4'
          message='This is another post without image'
          timestamp='This is a timestamp'
          username='Hamidul Islam'
          /> */}
          
        </div>
    )
}

export default Feed
