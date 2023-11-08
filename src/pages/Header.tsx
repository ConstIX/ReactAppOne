import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
   { link_name: "HOME", link_to: "/" },
   { link_name: "SHOP", link_to: "/shop" },
   { link_name: "ABOUT US", link_to: "/about" },
   { link_name: "BLOG", link_to: "/blog" },
   { link_name: "CONTACT US", link_to: "/contacts" }
]

const Header: React.FC = () => {

   const [menu, setMenu] = React.useState<boolean>(false)
   menu && window.innerWidth < 767.98 ? document.body.classList.add('lock') : document.body.classList.remove('lock')

   const { pathname } = useLocation()

   return (
      <header className="header">
         <div className="container">
            <div className="header__body">

               <div className="header__column">
                  <Link to="/" className="header__logo"><img src="" alt="" /></Link>
               </div>

               <div className="header__column">

                  <div onClick={() => setMenu(!menu)} className={`menu__icon icon-menu ${menu ? 'active' : ''}`}>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>

                  <nav className={`menu__body ${menu ? 'active' : ''}`}>
                     <ul className="menu__list">
                        {links.map(obj => <li onClick={() => setMenu(!menu)} key={obj.link_name}><Link to={obj.link_to} className={`menu__link ${pathname === obj.link_to ? 'active' : ''}`}><span>{obj.link_name}</span></Link></li>)}
                     </ul>
                  </nav>

               </div>

            </div>
         </div>
      </header>
   )
}

export default Header