import React from 'react'

const Userhome = (props) => {
  return (
        <div className='pf'>
            <img src={props.image} alt="" />
            <h1> {props.name}</h1>
        </div>
  )
}

export default Userhome