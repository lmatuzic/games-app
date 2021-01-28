import React from 'react'

const Game = ({name, released, image, id}) => {
  return (
    <div className='game' id={id}>
      <img src={image} alt={name} className='game__img'/>

      <div className='game__body'>
        <h4 className='game__title'>{name}</h4>
        <div className='game__release'>
          <span>Release date:</span> 
          {released}
        </div>
      </div>
    </div>
  )
}

export default Game