
import './navbar.css';
import logo from './logo-one.png'
function Navbar() {
    return (<nav>
               <div class="logo">
                    {/* ohlonehacks */}
                    <a href="/#landing">
                        <img src={logo} alt="Ohlone Hacks" style={{ width: '100px', height: '80px' }}/>
                    </a>
                </div>
               <div class="nav-items">
                   <div class="item">About</div>
                   
                   <div class="item">Tracks</div>
                   <div class="item">FAQ</div>
                   
               </div>
           </nav>);
}

export default Navbar;