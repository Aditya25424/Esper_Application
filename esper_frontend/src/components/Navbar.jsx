import React from 'react'
import { useNavigate } from "react-router-dom";
import { BellRing, ShieldUser } from 'lucide-react';

const Navbar = () => {
    const navigate = useNavigate();
    
      const handleCreatePost = () => {
    navigate("/create-post");
  };

  return (
    <div>
        <div className="navbar">
          <div className="front">
            <h2>Esper</h2>
          </div>
          <div className="mid">
            <input type="text" placeholder='Search posts, authors, topics...'  className='search'/>
          </div>
          <div className="end">
            <div className='crpost'>

              <button onClick={handleCreatePost}>Create Post</button>
            </div>
            <div className="noti"><BellRing /></div>
            <div className="profile"><ShieldUser /></div>
          </div>
           
        </div>
    </div>
  )
}

export default Navbar