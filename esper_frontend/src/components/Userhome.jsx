import React from 'react'
import { LogOut } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const Userhome = () => {
    const navigate = useNavigate()
    const handleLogout = () => navigate('/')
  return (
        <div className='pf'>
            <section className="card-profile">
              <div className="profile-card-inner">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80"
                  alt="John Smith"
                  className="profile-avatar"
                />
                <h1 className="profile-name">John Smith</h1>
                <p className="profile-bio">
                  Passionate about emerging technologies like AI and blockchain.
                  Sharing insights on future trends and innovation.
                </p>
                <button type="button" onClick={handleLogout} className="logout-btn">
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            </section>
        </div>
  )
}

export default Userhome