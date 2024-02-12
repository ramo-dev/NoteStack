import './HeroStyles.css'
import { Link } from 'react-router-dom';
const Hero = (props) => {
    return ( 
        <>
           <div className={props.cName}>
                <img alt='Hero image' src={props.heroImg}></img>

                <div className="hero-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href={props.url} className={props.btnClass}>
                        {props.buttonText}
                    </a>
                    <div className="links">
                        <Link to="/create">
                            <button className="GetStarted">Get Started</button>
                        </Link>
                        <Link to="/about">
                            <button className="LearnMore">Learn More</button>
                        </Link>
                    </div>
                </div>
           </div>
        </>
     );
}
 
export default Hero;