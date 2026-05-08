import React, { useEffect, useState } from 'react'
import { Cards } from './Cards'

const Posts = () => {

  const [posts, setPosts] = useState([]);

useEffect(() => {

  fetch("http://localhost:8080/posts")
    .then((res) => res.json())
    .then((data) => {
      setPosts(data);
    });

}, []);

  
return (
    <div className='parent'>
  {posts.map((post) => (

  <Cards
    key={post.id}
    title={post.title}
    likes={post.upvote}
    comments={post.comments?.length}
    description={post.content}
    image={`http://localhost:8080/uploads/${post.image}`}
  />

   ))}
    </div>
  )

}

export default Posts