import React from 'react'

import Category from '../components/Category'
import Search from '../components/Search'
import Cart from '../components/Cart';

import { useAppDispatch, useAppSelector } from '../redux/store';
import { setPage } from '../redux/slices/filterSlice';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const category = ["all", "back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"]
const cart = [1, 2, 3, 4, 5]

const Exercises: React.FC = () => {

   const dispatch = useAppDispatch()
   const { page } = useAppSelector(state => state.filterReducer)

   return (
      <section className='exercises'>
         <div className="container">

            <Search />

            <div className="exercises__slider">
               <Swiper
                  modules={[Navigation, Pagination, Mousewheel]}
                  spaceBetween={50}
                  slidesPerView={4}
                  navigation
                  pagination={true}
                  mousewheel={{ invert: true }}
                  breakpoints={{
                     280: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                     },
                     480: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                     },
                     767: {
                        slidesPerView: 3,
                        spaceBetween: 35,
                     },
                     992: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                     },
                     1412: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                     },
                  }}
                  className="exercises__swiper"
               >
                  {category.map((i) => <SwiperSlide key={i}><Category title={i} /></SwiperSlide>)}
               </Swiper>
            </div>

            <div className="exercises__cart cart">
               <div className="cart__header-block header-block">
                  <h2 className="header-block__title header-block__title_s">Showing Results</h2>
               </div>
               <div className="cart__body">
                  {cart.map(obj => <Cart key={obj} />)}
               </div>
            </div>

            <ul className="exercises__pagination">
               {[...Array(3)].map((_, index) => <li onClick={() => dispatch(setPage(index + 1))} className={page === index + 1 ? 'active' : ''} key={index}>{index + 1}</li>)}
            </ul>

         </div>
      </section>
   )
}

export default Exercises