import React, {useState, useEffect} from 'react'

const APIfetch: React.FC = (props) => {

  const clickHandler = () => {
    console.log('clicked')
  }

  return (
    <>
      <button onClick={clickHandler}>クリック</button>
    </>
  )
}

export default APIfetch
