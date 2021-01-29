import React from 'react'
import { useSelector } from 'react-redux'

const GameDetails = () => {
  const { game, screenshots, isLoading } = useSelector(state => state.details)

  return (
    <>
      {!isLoading && (
        <div className="game__details">
          <div>{game.name}</div>

          <div>
            Platform: 
            {game.platforms && game.platforms.map(data => (
              <span key={data.platform.id}>{data.platform.name}</span>
            ))}
          </div>

          <div>Rating: {game.rating}</div>

          <div className="description">
            <p>{game.description_raw}</p>
          </div>
          
          <div className="media">
            <img src={game.background_image} alt="gameBackground"/>
          </div>

          <div className="gallery">
            {screenshots && screenshots.map(screenshot => (
              <img src={screenshot.image} alt="gameScreenshot" key={screenshot.id}/>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default GameDetails
