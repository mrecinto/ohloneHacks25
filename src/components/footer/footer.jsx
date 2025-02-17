import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={`footer-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="footer-content">
        {/* OhloneHacks Logo - Left */}
        <div className="footer-logo-left">
          <img
            alt="OhloneHacks logo"
            className="footer-logo"
            src="src/assets/logo-one.png"
          />
        </div>

        {/* Social Media Icons - Center */}
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
              src="/Images/LinkedIn_logo_initials.png"
              alt="LinkedIn"
            />
          </a>
          <a href="mailto:Ohlonehacks24@gmail.com" target="_blank" rel="noopener noreferrer">
            <img
              className="footer-social-icon"
              src="/Images/Gmail_icon_(2020).png"
              alt="Gmail"
            />
          </a>
        </div>

        {/* ASOC Logo - Right */}
        <div className="footer-logo-right">
          <img
            alt="ASOC logo"
            className="footer-logo"
            src="src/assets/Student-Legasdf.png"
          />
        </div>
      </div>

      <div className="footer-copyright">
        &copy; 2025 OhloneHacks
      </div>
      <div className="footer-watermark">
        <small>Art by Lilly</small>
      </div>
    </footer>
  );
};

export default Footer;

// Responsive CSS Styling
const footerStyle = `
.footer-container {
  background-color: rgba(23, 16, 49, 0.9);
  color: #fff;
  padding: 16px 0;
  transition: background-color 0.3s ease-in-out;
}

.footer-container.scrolled {
  background-color: rgba(23, 16, 49, 1);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
  flex-wrap: wrap;
  gap: 12px;
}

.footer-logo-left,
.footer-logo-right {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-logo {
  height: 64px;
  width: auto;
  max-width: 120px;
}

.footer-socials {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer-social-icon {
  width: 32px;
  height: 32px;
  transition: transform 0.3s ease-in-out;
}

.footer-social-icon:hover {
  transform: scale(1.15);
}

.footer-copyright,
.footer-watermark {
  text-align: center;
  margin-top: 8px;
  font-size: 14px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }

  .footer-logo {
    height: 56px;
  }

  .footer-socials {
    justify-content: center;
  }
}
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = footerStyle;
document.head.appendChild(styleSheet);
