import '../App.css';
import {Link, NavLink} from 'react-router-dom'
import NavLogo from '../Images/headerlogo.png'
import BtnDroplet from '../Images/btndropletsvg.svg'
import FooterLogo from '../Images/footerlogo.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top-footer">
        <div className="left-column">
            <h1>Clarity Consumers Crave.</h1>
        </div>
        <div className="right-column">
            <img src={BtnDroplet} className="btn-droplet" />
            <h4>Let's Chat.</h4>
        </div>
      </div>
      <div className="middle-footer">
        <div className="left-column">
            <img src={FooterLogo} alt="" className="footer-logo" />
            <p className="footer-about body-sm">
                Clear Creations LLC is a branding and marketing agency dedicated
                to giving life to brands people crave.
            </p>
        </div>
        <div className="right-column">
            <div className="contact-column">
                <p className="body-reg">Contact</p>
                <p className="body-sm">findclarity@clearcreations.io</p>
                <p className="body-sm">313.971.6445</p>
            </div>
            <div className="services-column">
                <p className="body-reg">Services</p>
                <div className="footer-services">
                    <a href="/" className="body-sm">Branding</a>
                    <a href="/" className="body-sm">Digital Products</a>
                    <a href="/" className="body-sm">Digital Marketing</a>
                </div>
            </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="social-links">
            <a href="/" className="body-sm">LinkedIn</a>
            <a href="/" className="body-sm">Instagram</a>
            <a href="/" className="body-sm">Facebook</a>
            <a href="/" className="body-sm">Twitter</a>
        </div>
        <div className="legal">
            <p className="body-sm">2022 &copy; Clear Creations LLC All Rights Reserved</p>
            <a href="/" className="body-sm"> Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;