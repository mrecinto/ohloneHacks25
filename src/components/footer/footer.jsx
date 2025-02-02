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

export default Footer;