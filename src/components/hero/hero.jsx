import './hero.css';
import Timer from './timer/timer';
import '../App.css';

import cloud1 from './cloudLayer1.png';
import cloud2 from './cloudLayer2.jpg';
import ohloneBuilding from './ohloneBuilding.png';
import bee from './bee.png'; // Import the bee image

function Hero() {
    return (
        <div className="hero hero_container">
            <div className="hero form_container">
                <div className="hero form_items">
                    <div className="form_item form_title">
                        <h1>
                            <span className="ohlone">Ohlone</span>
                            <span className="hacks">Hacks 5.0</span> 
                        </h1>
                    </div>
                    <h2 className="form_item form_date">
                        Ohlone College, Fremont, CA
                    </h2>
                    <h2 className="form_item form_date">
                        February 22-23, 2025 
                    </h2>

                    {/* Flex container for bee + buttons */}
                    <div className="form_buttons_wrapper">
                        <img className="bee" src={bee} alt="Bee" />
                        <div className="form_buttons">
                            <a
                                className="form_button form_register"
                                target="_blank"
                                href="https://docs.google.com/forms/d/e/1FAIpQLSch8puXVeCb6MkMehUr1x7nvqOlClQV8n5NVczVIOoAbPnrog/viewform"
                            >
                                <p>Register</p>
                            </a>
                            <a
                                className="form_button form_mentor"
                                target="_blank"
                                href="https://forms.gle/rafHfMazTju8oM7z8"
                            >
                                <p>Mentor</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero clouds_wrapper">
                <div className="clouds_container">
                    <img className="cloudlayer1" src={cloud1} alt="Cloud Layer 1" />
                    <img className="cloudlayer2" src={cloud2} alt="Cloud Layer 2" />
                </div>
            </div>

            <div className="hero ohloneBuilding_wrapper">
                <div className="ohloneBuilding_container">
                    <img
                        className="ohloneBuilding"
                        fetchPriority="high"
                        src={ohloneBuilding}
                        alt="ohloneBuilding"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;
