import React from 'react'
import { ThumbsUp, MessageCircleDashed, Share2, Bookmark } from 'lucide-react';
export const Cards = (props) => {
  return (
    <div>
        <div className="card">
            <div className="top">
                <img src={props.image} alt="" />
                <h2>{props.title}</h2>
            </div>
            <div className="center">
                <p>{props.description}</p>
                <h4>Posted by: {props.author}</h4>
            </div>
            <div className="bottom">
                <button><ThumbsUp />{props.likes}</button>
                <button><MessageCircleDashed />{props.comments}</button>
                <button><Share2 />Share</button>
                <button><Bookmark />Save</button>
            </div>
        </div>
    </div>
  )
}
