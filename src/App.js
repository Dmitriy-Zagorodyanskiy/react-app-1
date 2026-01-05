import React, { useState, useRef } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    {id:1, title: 'JS', body: 'Description'}
  ])

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setPosts([...posts, newPost])
    setTitle('')
    setBody('')
  }

  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder='Name post'
        />
        <MyInput
          value={body}
          onChange={e => setBody(e.target.value)}
          // ref={bodyInputRef}
          type="text"
          placeholder='Name post'
        />
      <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostList posts={posts} title="sdfsdfsdfs" />
    </div>
  );
}

export default App;
