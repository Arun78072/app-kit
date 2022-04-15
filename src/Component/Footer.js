import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="top_footer">
                    <div>
                        <h2><img src="./images/logo.png" /></h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.
                        </p>
                    </div>
                    <div>
                        <h2>Follow Us</h2>
                        <p>
                            Since the 1500s, when an unknown printer took a galley of type and scrambled.
                        </p>
                        <ul className="social_icon flex_ul">
                            <li><FaFacebookF /></li>
                            <li><BsTwitter /></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Contact Us</h2>
                        <p>
                            E-Comm , 4578<br /> Marmora Road,<br/> Glasgow D04 89GR
                        </p>
                    </div>
                </div>
                <div className="middel_Sec">
                    <div>
                        <h2>Infomation</h2>
                        <ul>
                            <li>About Us</li>
                            <li>Infomation</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Service</h2>
                        <ul>
                            <li>About Us</li>
                            <li>Infomation</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                    <div>
                        <h2>My Account</h2>
                        <ul>
                            <li>About Us</li>
                            <li>Infomation</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Our Offers</h2>
                        <ul>
                            <li>About Us</li>
                            <li>Infomation</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className='copyright_sec middel_Sec'>
                    <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
                    <ul className='flex_ul'>
                        <li><img src="./Images/Western.png" /></li>
                        <li><img src="./Images/master.png" /></li>
                        <li><img src="./Images/Paypal.png" /></li>
                        <li><img src="./Images/visa.png" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer;