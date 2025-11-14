import React from 'react'
import { Cards } from './Cards'

const Posts = () => {
  const userposts = [
  {
    title: 'The Future of AI Ethics',
    author: 'Mia Rones',
    likes: '12.5k',
    comments: 589,
    description:
      'Covers bunch & cool details & new ideas that everyone wants to know insane secret.',
    image: 'https://cdn.mos.cms.futurecdn.net/DVffQnnibMWmNpx2Wfb5Se.jpg',
  },
  {
    title: 'Blockchain Beyond Cryptocurrency',
    author: 'Liam Brooks',
    likes: '9.8k',
    comments: 412,
    description:
      'Exploring how blockchain transforms industries beyond just financial systems.',
    image: 'https://www.tdk.com/en/tech-mag/sites/default/files/2024-03/Blockchain-Cryptocurrency.jpg',
  },
  {
    title: 'Mental Health in the Digital Age',
    author: 'Ava Mitchell',
    likes: '14.2k',
    comments: 687,
    description:
      'Understanding how digital technology influences our mental well-being and emotions.',
    image: 'https://static.wixstatic.com/media/b23e20_3027761fc2ab4e9b980c98e0dcfcba88~mv2.jpg/v1/fill/w_2500,h_1406,al_c/b23e20_3027761fc2ab4e9b980c98e0dcfcba88~mv2.jpg',
  },
  {
    title: 'The Rise of Creative AI',
    author: 'Noah Park',
    likes: '10.9k',
    comments: 322,
    description:
      'How artificial intelligence is reshaping art, music, and storytelling.',
    image: 'https://miro.medium.com/1*yKnNdO1E2pzbnYxNykq9dQ.jpeg',
  },
  {
    title: 'Climate Tech: Innovation for the Planet',
    author: 'Sophia Green',
    likes: '8.3k',
    comments: 268,
    description:
      'Discovering sustainable technologies that are helping to combat climate change.',
    image: 'https://t-hub.co/wp-content/uploads/2024/06/t-hub.png',
  },
  {
    title: 'Web3: The Future of the Internet',
    author: 'Ethan Cole',
    likes: '11.6k',
    comments: 498,
    description:
      'Understanding decentralization and how it will redefine our online experience.',
    image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240513144701/web-3-copy-(1).webp',
  },
  {
    title: 'Cybersecurity in 2025',
    author: 'Olivia Chen',
    likes: '7.9k',
    comments: 302,
    description:
      'Emerging trends and technologies keeping the digital world safe and secure.',
    image: 'https://informationage-production.s3.amazonaws.com/uploads/2022/10/creating-rolling-out-effective-cyber-security-strategy.jpeg',
  },
  {
    title: 'The Psychology of Social Media',
    author: 'Aarav Patel',
    likes: '13.4k',
    comments: 611,
    description:
      'Delving into how social platforms shape our identity, behavior, and society.',
    image: 'https://blog.emb.global/wp-content/uploads/2024/04/The-Human-Brain-on-Social-Media-1024x574.webp',
  },
  {
    title: 'Design Systems for Scalable Apps',
    author: 'Lara Scott',
    likes: '6.2k',
    comments: 204,
    description:
      'Building design systems that ensure consistency and scalability across platforms.',
    image: 'https://www.triazinesoft.com/admin/assets/images/postsDesc/saleable-web-application-10-best-practices.png',
  },
  {
    title: 'Quantum Computing: The Next Leap',
    author: 'Daniel Rivera',
    likes: '15.1k',
    comments: 723,
    description:
      'An introduction to quantum mechanics and its role in future computational power.',
    image: 'https://www.isoeh.com/images/quantum-computing-the-next-leap-forward-in-computing-power.jpg',
  },
];
return (
    <div className='parent'>
        {userposts.map((post, index) => (
          <Cards
            key={index}
            title={post.title}
            author={post.author}
            likes={post.likes}
            comments={post.comments}
            description={post.description}
            image={post.image}
          />
        ))}
    </div>
  )

}

export default Posts