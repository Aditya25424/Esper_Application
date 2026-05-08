import React, { useEffect, useState } from 'react'
import { Cards } from './Cards'
import { useNavigate } from "react-router-dom";

const Posts = () => {

  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

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
    <div
  onClick={() => navigate(`/post/${post.id}`)}
  style={{ cursor: "pointer" }}>

  <Cards
    key={post.id}
    title={post.title}
    likes={post.upvote}
    comments={post.comments?.length}
    description={post.content}
    image={`http://localhost:8080/uploads/${post.image}`}
  /> </div>

   ))}
    </div>
  )

}

export default Posts