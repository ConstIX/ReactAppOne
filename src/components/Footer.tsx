import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import image from '../assets/images/Logo-1.png'

const Footer: React.FC = () => {

   const { pathname } = useLocation()

   return (
      <footer className={`footer ${pathname === '/' ? 'footer_n' : ''}`}>
         <div className="container">
            <div className="footer__body">
               <Link to='/' className='footer__logo'><img src={image} alt="..." /></Link>
               <p className="footer__text">Made with ❤️ by ConstIX</p>
            </div>
         </div>
      </footer>
   )
}

export default Footer



