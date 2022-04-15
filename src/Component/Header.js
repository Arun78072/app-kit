import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiSearchAlt2 } from 'react-icons/bi';
import { IoMdArrowDropdown } from 'react-icons/io';



function Header(){
    return(
        <>
            <div className="container">
                <div className="top_nav">
                    <div className="lang">
                            <ul className="flex_ul">
                                <li>EN <IoMdArrowDropdown /></li>
                                <li>USD <IoMdArrowDropdown /></li>
                            </ul>
                    </div>
                    <div>
                        <ul className="flex_ul">
                            <li><AiOutlineUser />My Profile</li>
                            <li><AiOutlineShoppingCart /><span className="cart_num">2</span></li>
                            <li>Items</li>
                            <li>$00.00</li>
                            <li>< BiSearchAlt2 /></li>
                        </ul>
                    </div>
                </div>
                <div className='nav_bar top_nav'>
                    <div className='logo'>
                        <img src="./Images/Logo.png" />
                    </div>
                    <div className='menus'>
                        <ul className='flex_ul'>
                            <li className="active">Home</li>
                            <li>Bags</li>
                            <li>Sneakers</li>
                            <li>Belt</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;