import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import image from '../assets/images/Logo.png'

const links = [
   { link_name: "Home", link_to: "/" },
   { link_name: "Exercises", link_to: "/exercises" }
]

const Header: React.FC = () => {

   const { pathname } = useLocation()

   return (
      <header className="header">
         <div className="container">
            <div className={`header__body ${pathname === '/' ? 'header__body_h' : ''}`}>

               <div className="header__column">
                  <Link to="/" className="header__logo"><img src={image} alt="..." /></Link>
               </div>

               <div className="header__column">

                  <div className='menu__icon icon-menu'>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>

                  <nav className='menu__body'>
                     <ul className="menu__list">
                        {links.map(obj => <li key={obj.link_name}><Link to={obj.link_to} className={`menu__link ${pathname === obj.link_to ? 'active' : ''}`}><span>{obj.link_name}</span></Link></li>)}
                     </ul>
                  </nav>

               </div>

            </div>
         </div>
      </header>
   )
}

export default Header