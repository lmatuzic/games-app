import React from 'react'

const Game = ({name, released, image}) => {
  return (
    <div className='game'>
      <img src={image} alt={name} className='game__img'/>

      <div className='game__body'>
        <h4 className='game__title'>{name}</h4>
        <div className='game__release'>Release date: {released}</div>
      </div>
    </div>
  )
}

export default Game