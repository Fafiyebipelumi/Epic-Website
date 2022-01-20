import { FaPlayCircle } from 'react-icons/fa';
import '../App.css';
import './HeroSection.css'
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <>
            <div className="hero-container">
                {/* <img src='/images/1.jpg' /> */}
                <h1>ADVENTURE AWAITS</h1>
                <p>What are you waiting for?</p>
                <div className='hero-btns'>
                    <Link
                        className='btns'
                        to='/sign-up'
                    >
                        GET STARTED
                    </Link>
                    <button
                        className='btns'
                    >
                        WATCH TRAILER <FaPlayCircle />
                    </button>
                </div>
            </div>
        </>
    );
}

export default HeroSection;
