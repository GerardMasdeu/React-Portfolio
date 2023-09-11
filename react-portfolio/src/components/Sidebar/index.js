import './index.scss';
import { Link, NavLink } from "react-router-dom";
import LogoS from "../../assets/images/logo-s.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faAddressCard,faMessage } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo'/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" to="/about" className="about-link" >
            <FontAwesomeIcon icon={faAddressCard} color='#4d4d4e'/>
            </NavLink>

            <NavLink exact="true" activeclassname="active" to="/contact" className="contact-link">
            <FontAwesomeIcon icon={faMessage}  color='#4d4d4e'/>
            </NavLink>

        </nav>
    </div>
)
      

export default Sidebar;