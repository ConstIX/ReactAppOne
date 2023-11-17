import React from 'react'
import { Link } from 'react-router-dom'

import image from '../assets/images/banner.png'

const Home: React.FC = () => {
   return (
      <section className="home">
         <div className="container">

            <div className="home__body">

               <div className="home__column">
                  <div className="home__item">
                     <div className="home__header-block header-block">
                        <h3 className="header-block__subtitle">Fitness Club</h3>
                        <h1 className="header-block__title header-block__title_h">Sweat, Smile <br /> And Repeat</h1>
                        <p className="header-block__text header-block__text_h">Check out the most effective exercises personalized to you</p>
                     </div>
                     <Link to="/exercises" className="home__btn btn"><span>Explore Exercises</span></Link>
                     <p className='home__text'>Exercise</p>
                  </div>
               </div>

               <div className="home__column">
                  <div className="home__item"><img src={image} alt="..." /></div>
               </div>

            </div>

         </div>
      </section>
   )
}

export default Home