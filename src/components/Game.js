import React from 'react'

const Game = ({name, released, image}) => {
  return (
    <div className="game">
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name}/>
    </div>
  )
}

export default Game