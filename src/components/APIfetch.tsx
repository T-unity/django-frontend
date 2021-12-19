import React, {useState, useEffect} from 'react'

const APIfetch: React.FC = (props) => {

  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={ () => {setCount(prevCount=>prevCount+1); setCount(prevCount=>prevCount+1);} }>クリック</button>
      <p>{count}</p>
    </>
  )
}

export default APIfetch
