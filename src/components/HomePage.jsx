import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';

// Replace the API URL with the dummy API URL
const dummyApiUrl = 'https://jsonplaceholder.typicode.com/posts';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(dummyApiUrl)
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 5)))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact Me</Link>
      </nav>
      <HeroSection />

      <div>
        <h2>Latest Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
