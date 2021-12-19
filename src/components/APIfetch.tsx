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
      <ul>
        {
          posts.map(post => <li key={post.id}>{post.title}</li>)
        }
      </ul>
    </>
  )
}

export default APIfetch
