import '../App.css';
import {Link, NavLink} from 'react-router-dom'
import NavLogo from '../Images/headerlogo.png'
import BtnDroplet from '../Images/btndropletsvg.svg'

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <Link className='logo' to='/'>
          <img src={NavLogo} alt="Home" className="nav-logo" />
        </Link>
        <nav className='nav-menu'>
          <NavLink exact="true" to="/about">
            <div className="nav-link">About</div>
          </NavLink>
          <NavLink exact="true" to="/solutions">
            <div className="nav-link">Solutions</div>
          </NavLink>
          <NavLink exact="true" to="/casestudies">
            <div className="nav-link">Case Studies</div>
          </NavLink>
          <Link to="/consultation" className='consult-btn'>
                <img src={BtnDroplet}className="btn-droplet" />
                <h4>Free Consultation</h4>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;