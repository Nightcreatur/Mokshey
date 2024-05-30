
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <h2 className='logo'>Mo<span>क्ष्य</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam dolorem ab at facere possimus officia voluptatibus id deleniti explicabo quisquam ut recusandae rerum iusto, deserunt assumenda rem beatae nam magni?</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook} onClick={() => window.location.href = 'https://www.facebook.com'} alt="" />

                        <img src={assets.instagram} onClick={() => window.location.href = 'https://www.instagram.com/mokshyacafeandthakali/'} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>
                        Company
                    </h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li></ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get in touch</h2>
                    <ul>
                        <li>+124257</li>
                        <li> demo@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>
                Copyright 2024 @ Hello_sandy -All Right Reserved.
            </p>
        </div>
    )
}

export default Footer