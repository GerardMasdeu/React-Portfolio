import './index.scss';
import { Link, NavLink } from "react-router-dom";
import LogoS from "../../assets/images/logo-s.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faUser,faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo'/>
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="aboutlink" to="/about">
            
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/contact" className="contact-link">
            
            </NavLink>
        </nav>
    </div>
)
      

export default Sidebar;