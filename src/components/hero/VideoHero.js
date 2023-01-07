import react from 'react'
import './VideoHero.css'

function VideoHero (prop){
    return (
        <>
            <div className="overlay"></div>
            <video src={prop.vidSrc} autoPlay loop muted />
            <div className="hero-vid-container">
            <h1 className="hero-title">{prop.title}</h1>
         
          </div>
        </>
    )
}

export default VideoHero