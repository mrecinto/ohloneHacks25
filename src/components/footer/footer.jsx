import './footer.css';
import asocLogo from '../../assets/Student-Legasdf.png';
import OHLogo from '../../assets/logo-one.png'
function Footer() {
return(
    <footer className="footer_container">
        <div className="footer_item footer_asocLogo">
            <img
            alt="Footer logo"
            loading="lazy"
            width="92.5"
            height="92.7"
            decoding="async"
            data-nimg="1"
            className="Footer_Student-Legasdf"
            style={{ color: 'transparent' }}
            src={asocLogo}
            />
        </div>
        
        
        
        

        <div className="footer_item footer_ohloneHacksTitle">
            <div className="footer_OHLogo">
                <img
                alt="Footer logo"
                loading="lazy"
                width="92.5"
                height="92.7"
                decoding="async"
                data-nimg="1"
                className="Footer logo"
                style={{ color: 'transparent' }}
                src={OHLogo}
                />
            OhloneHacks 
            
        </div>
        </div>
        
        <div className="footer_item footer_socials">
            <div className="footer_socialsIcons">
                socials go here
            </div>
            <div className="footer_copyright">
                copyright go here
            </div>
        </div>
        
        
    </footer>
);
}

<<<<<<< Updated upstream
export default Footer;
=======
export default Footer;

const footerStyle = `
  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: rgba(23, 16, 49, 0.8); /* Semi-transparent background */
    color: #fff;
    width: 100%;
    border-top: none;
    transition: background-color 0.3s ease-in-out;
  }

  .footer-container.scrolled {
    background-color: rgba(23, 16, 49, 1); /* Full opacity when scrolled */
  }

  .footer-logo-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 20px;
  }

  .footer-logo-left, .footer-logo-right {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer-logo {
    width: 92.5px;
    height: 92.7px;
  }

  .footer-socials {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-bottom: 10px;  /* Reduced margin to push icons up */
    margin-top: -10px;  /* Adjusted top margin to push social media icons up */
  }

  .footer-social-icon {
    width: 48px;
    height: 48px;
    transition: transform 0.3s ease-in-out;
  }

  .footer-social-icon:hover {
    transform: scale(1.2);
  }

  .footer-copyright {
    text-align: center;
    margin-top: 10px;
    font-size: 14px;
    width: 100%;
  }

  .footer-watermark {
    text-align: center;
    margin-top: 15px;
    font-size: 14px;
  }
`;

// Inject styles into the document head to make sure the styles are included in the final build.
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = footerStyle;
document.head.appendChild(styleSheet);
>>>>>>> Stashed changes
