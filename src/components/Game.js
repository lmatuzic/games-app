import React from 'react'

//redux
import { useDispatch } from 'react-redux'
import { loadDetails } from '../actions/detailsAction'

const Game = ({name, released, image, id}) => {
  // load details
  const dispatch = useDispatch();
  const loadDetailsHandler = () => {
    dispatch(loadDetails(id));
  };

  return (
    <div className='game' id={id} onClick={loadDetailsHandler}>
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