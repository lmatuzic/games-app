import React from 'react'
import { FaStar } from 'react-icons/fa';
import { useSelector } from 'react-redux'

const GameDetails = () => {
  const { game, screenshots, isLoading } = useSelector(state => state.details)

  return (
    <>
      {!isLoading && (
        <div className="game__details">
          <div className="parallax" style={{backgroundImage: `url(${(game.background_image)})`}}></div>

          <div className="container">
            <h1>{game.name}</h1>

            <div className="basics__info">
              <div className="rating"><FaStar />{game.rating}</div>
              <div className="basics__separator"></div>
              <div className="platforms">
                {game.platforms?.map(data => (
                  <span key={data.platform.id}>{data.platform.name}</span>
                ))}
              </div>
            </div>

            <div className="description">
              <h4>Description</h4>
              <p>{game.description_raw}</p>
            </div>
            
            <div className="gallery">
              {screenshots?.map(screenshot => (
                <img src={screenshot.image} alt="gameScreenshot" key={screenshot.id}/>
              ))}
            </div>
          </div>
        </div>
        )
      }
    </>
  )
}

export default GameDetails
