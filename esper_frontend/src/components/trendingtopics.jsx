import React from 'react'

const trendingtopics = () => {
 const trendingTopics = [
  '#ArtificialIntelligence',
  '#ClimateAction',
  '#Web3',
  '#MentalHealth',
  '#CreativeWriting'
];
    return (
    <div>
        {trendingTopics.map((topic, index) => (
            <div className='trending' key={index}>
                <button><h3>{topic}</h3></button>
            </div>
        ))}
    </div>
  )
}

export default trendingtopics