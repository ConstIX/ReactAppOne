import React from 'react'

import icon1 from '../assets/icons/01.png'
import icon2 from '../assets/icons/02.png'
import icon3 from '../assets/icons/03.png'

const ExerciseDetails: React.FC = () => {
   return (
      <section className='details'>
         <div className="container">
            <div className="details__body">

               <div className="details__column">
                  <div className="details__item"><img src="" alt="..." /></div>
               </div>

               <div className="details__column">
                  <div className="details__item">
                     <div className="details__header-block header-block">
                        <h2 className="header-block__title"></h2>
                        <p className="header-block__text"></p>
                     </div>
                     <div className="details__tag">
                        <span><img src={icon1} alt="..." /></span>
                        <p></p>
                     </div>
                     <div className="details__tag">
                        <span><img src={icon2} alt="..." /></span>
                        <p></p>
                     </div>
                     <div className="details__tag">
                        <span><img src={icon3} alt="..." /></span>
                        <p></p>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>
   )
}

export default ExerciseDetails