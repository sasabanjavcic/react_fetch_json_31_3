import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])

  // 1. TEST PRIJE KLIKA NA BTN
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts`)
  //     .then((response) => response.json())
  //     .then((data) => setPosts(data))
  // }, [])

  // 2. PRIKAZ NA KLIK BTN
  // const getPostsHandler = () => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts`)
  //     .then((response) => response.json())
  //     .then((data) => setPosts(data))
  // }

  // 3. PRIKAZ i MICANJE NA KLIK ISTOG BTN
  const togglePostsHandler = () => {
    if (!posts.length) {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.json())
        .then((data) => setPosts(data))
    } else {
      setPosts([])
    }
  }

  return (
    // 2!!!
    // <div className='App'>
    //   <button onClick={getPostsHandler}>Get Posts</button>
    //   {posts.map(({ id, title }) => {
    //     return (
    //       <div key={id}>
    //         {/* {posts[0].title} */}
    //         {title}
    //       </div>
    //     )
    //   })}
    // </div>

    // 3!!!
    <div className='App'>
      <button onClick={togglePostsHandler}>
        {!posts.length ? 'Get' : 'Clean'} Posts
      </button>
      {posts.map(({ id, title }) => {
        return (
          <div key={id}>
            {/* {posts[0].title} */}
            {title}
          </div>
        )
      })}
    </div>
  )
}

export default App
