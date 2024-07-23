import React from 'react'
import './Footer.css'
import sc_logo from '../Assets/SC-collection/sc_logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  };

  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={sc_logo} alt="" />
        <p>SAKSHI <br/> COLLECTION</p>
      </div>
      <ul className="footer-links">
        <Link to={'/'} onClick={scrollToTop}><li>SHOP</li> </Link>
        <Link><li>Products</li> </Link>
        <Link> <li>Offices</li></Link>
        <Link><li>About</li> </Link>
        <Link><li>Contact</li> </Link>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <Link to={'https://www.instagram.com/new_sakshi_collection/'} target='_blank'>
            <img src={instagram_icon} alt="" />
          </Link>
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>© {year} | Sakshi Collection  </p>
      </div>
    </div>
  )
}

export default Footer
