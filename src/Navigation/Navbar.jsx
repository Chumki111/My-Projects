import './Navbar.css'

// icons
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShopping } from "react-icons/ai";
import { FaUsersCog } from "react-icons/fa";
const Navbar = () => {
    return (
        <nav>
            <div className='nav-container'>
                <input type="text" className='search-input' name="" id="" placeholder='Inter your search shoes' />

            </div>
            <div className="profile-container">
                <a href="">
                    <FaRegHeart className="nav-icons" />
                </a>
                <a href="">
                    <AiOutlineShopping className="nav-icons" />
                </a>
                <a href="">
                    <FaUsersCog className="nav-icons" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;