import { FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">

        <a href="https://github.com/adarshvishwakarmaa" target="_blank" rel="noopener noreferrer"          className="footer-icon">
          <FaGithub size={30} />
        </a>

        <a href="https://www.instagram.com/adarshvishwakarma923" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaInstagram size={30} />
        </a>

        <a href="https://www.linkedin.com/in/adarsh-vishwakarma-a055a1317/" target="_blank" rel="noopener noreferrer"   className="footer-icon">
          <FaLinkedin size={30} />
        </a>
       
    
        <a href="https://www.facebook.com/YOUR_FACEBOOK" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaFacebook size={30} />
        </a>
      </div>
      <p className="footer-text">&copy; {new Date().getFullYear()} Adarsh. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
