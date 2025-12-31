import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([
    {id:1, title: 'JS', body: 'Description'}
  ])

  return (
    <div className="App">
      <PostList posts={posts} title="sdfsdfsdfs" />
    </div>
  );
}

export default App;
