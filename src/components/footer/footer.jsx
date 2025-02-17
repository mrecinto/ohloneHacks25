import React, { useState, useEffect } from 'react';

// Footer Component
const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll behavior to change the opacity of the footer
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`footer-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="footer-logo-container">
        <div className="footer-logo-left">
          <img
            alt="OhloneHacks logo"
            loading="lazy"
            width="92.5"
            height="92.7"
            className="footer-logo"
            src="src/assets/logo-one.png"
          />
        </div>
        <div className="footer-logo-right">
          <img
            alt="ASOC logo"
            loading="lazy"
            width="92.5"
            height="92.7"
            className="footer-logo"
            src="src/assets/Student-Legasdf.png"
          />
        </div>
      </div>

      {/* Social Media Links */}
      <div className="footer-socials">
        <a href="https://www.instagram.com/ohlonehacks25/" target="_blank" rel="noopener noreferrer">
          <img
            className="footer-social-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
          />
        </a>
        <a href="https://www.linkedin.com/in/asoc-research-and-development-695191209/" target="_blank" rel="noopener noreferrer">
          <img
            className="footer-social-icon"
            src="public/Images/LinkedIn_logo_initials.png"
            alt="LinkedIn"
          />
        </a>
        <a href="mailto:Ohlonehacks24@gmail.com" target="_blank" rel="noopener noreferrer">
          <img
            className="footer-social-icon"
            src="public/Images/Gmail_icon_(2020).png"
            alt="Gmail"
          />
        </a>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        &copy; 2025 OhloneHacks
      </div>

      {/* Watermark */}
      <div className="footer-watermark">
        <small>Art by Lilly</small>
      </div>
    </footer>
  );
};

export default Footer;

// Styling for the footer component (Inline CSS)
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
