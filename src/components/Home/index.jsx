import { Link } from 'react-router-dom';
import './style.css';

const Home = () => {
    return(
        <div className="home">
            <div className="title">
                <h1>
                    <p>Hi</p>
                    <p>I am Vanessa</p>
                    <p>Front End Developer</p>
                </h1>
                <Link to="Weather">
                    <button>Vädret</button>
                </Link>
            </div>    
            <div className="person">
                <img 
                src={`${process.env.PUBLIC_URL}/img/photo.png`} alt="picture" />
            </div>
        </div>

    );
    
};

export default Home; 
