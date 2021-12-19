import React, {useState, useEffect} from 'react'

const APIfetch: React.FC = () => {

  // オブジェクトの状態管理
  const [posts, setPosts] = useState<any[]>([])

  const path = 'http://localhost:8000/api/tweet/'

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'})
    fetch(path, {method: 'GET'})
    .then(res => res.json())
    .then(data => {
      setPosts(data)
    })
  }, [])

  return (
    <>
      {
        posts.map(post =>
          <div className='post-wrapper' key={post.id}>
            <span className='post-title'>タイトル</span>
            <div>{post.title}</div>
            <span className='post-title'>本文</span>
            <div>{post.content}</div>
          </div>
        )
      }
    </>
  )
}

export default APIfetch
