import React from 'react'
import { LucideBell } from 'lucide-react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className="profile text-white">
      <div className='m-2 flex justify-between items-center bg-gray-200 text-2xl font-bold h-12  text-black '>

        <div className="topleft">
          <Link to="/">ESPER</Link>
        </div>

        <div className="topright flex gap-4 items-center">
          <button className='rounded bg-blue-500 text-white hover:bg-blue-400 text-xl px-4 py-1'>
            Logout
          </button>
          <LucideBell />
        </div>

      </div>

      <div className='bottom flex'>
        <div className="bottomleft flex-1 bg-gray-800 h-screen"></div>
        <div className="bottomright flex-1 bg-gray-700 h-screen"></div>
      </div>

    </div>
  )
}

export default Profile
