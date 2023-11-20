import React from 'react'

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import icon1 from '../assets/icons/01.png'
import icon2 from '../assets/icons/02.png'
import icon3 from '../assets/icons/03.png'
import Cart from '../components/Cart';

const cart = [1, 2, 3, 4, 5]

const ExerciseDetails: React.FC = () => {
   return (
      <section className='details'>
         <div className="container">

            <div className="details__body">

               <div className="details__column">
                  <div className="details__item details__item_img"><img src="https://v2.exercisedb.io/image/0kU03Ur4NwcVsD" alt="..." /></div>
               </div>

               <div className="details__column">
                  <div className="details__item">
                     <div className="details__header-block header-block">
                        <h2 className="header-block__title header-block__title_d">Barbell Alternate Biceps Curl</h2>
                        <p className="header-block__text header-block__text_d">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero suscipit officiis incidunt fuga natus recusandae, blanditiis laudantium architecto molestiae possimus?</p>
                     </div>
                     <div className="details__tag">
                        <span><img src={icon1} alt="..." /></span>
                        <p>Upper Arms</p>
                     </div>
                     <div className="details__tag">
                        <span><img src={icon3} alt="..." /></span>
                        <p>Biceps</p>
                     </div>
                     <div className="details__tag">
                        <span><img src={icon2} alt="..." /></span>
                        <p>Barbell</p>
                     </div>
                  </div>
               </div>

            </div>

            <div className="details__slider">
               <div className="details__header-block header-block">
                  <h2 className="header-block__title header-block__title_s">Similar <span>Target Muscle</span> exercises</h2>
               </div>
               <Swiper
                  modules={[Navigation, Pagination, Mousewheel]}
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation
                  pagination={true}
                  mousewheel={{ invert: true }}
                  breakpoints={{
                     280: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                     },
                     650: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                     },
                     992: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                     },
                  }}
                  className="details__swiper"
               >
                  {cart.map((i) => <SwiperSlide key={i}><Cart /></SwiperSlide>)}
               </Swiper>
            </div>

            <div className="details__slider details__slider_e">
               <div className="details__header-block header-block">
                  <h2 className="header-block__title header-block__title_s">Similar <span>Equipment</span> exercises</h2>
               </div>
               <Swiper
                  modules={[Navigation, Pagination, Mousewheel]}
                  spaceBetween={50}
                  slidesPerView={3}
                  navigation
                  pagination={true}
                  mousewheel={{ invert: true }}
                  breakpoints={{
                     280: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                     },
                     650: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                     },
                     992: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                     },
                  }}
                  className="details__swiper"
               >
                  {cart.map((i) => <SwiperSlide key={i}><Cart /></SwiperSlide>)}
               </Swiper>
            </div>

         </div>
      </section>
   )
}

export default ExerciseDetails