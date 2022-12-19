
import './Hero.scss'

type HeroProp = {
    title: string;
}

const Hero = ({title}: HeroProp) => {
    return ( 
        <div className="home-container">
        <div className="hero-image-container">
            <div className="hero-image">
                <p className="hero-text">{title}</p>                
            </div>
        </div>
    </div>
    )

}


export default Hero