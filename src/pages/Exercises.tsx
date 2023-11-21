import React from 'react'
import PaginationUi from '@mui/material/Pagination';

import Category from '../components/Category'
import Search from '../components/Search'
import Cart from '../components/Cart';

import { useAppDispatch, useAppSelector } from '../redux/store';
import { setPage } from '../redux/slices/filterSlice';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const categories = ["all", "back", "cardio", "chest", "lower%20arms", "lower%20legs", "neck", "shoulders", "upper%20arms", "upper%20legs", "waist"]

const Exercises: React.FC = () => {

   const dispatch = useAppDispatch()
   const { page } = useAppSelector(state => state.filterReducer)
   const { exercises } = useAppSelector(state => state.exercisesReducer)

   const indexOfLastExercise = page * 6;
   const indexOfFirstExercise = indexOfLastExercise - 6;
   const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

   return (
      <section className='exercises'>
         <div className="container">

            <Search />

            <div className="exercises__slider">
               <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={50}
                  slidesPerView={4}
                  navigation
                  pagination={true}
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
                  {categories.map((i) => <SwiperSlide key={i}><Category title={i} /></SwiperSlide>)}
               </Swiper>
            </div>

            <div className="exercises__cart cart">
               <div className="cart__header-block header-block">
                  <h2 className="header-block__title header-block__title_s">Showing Results</h2>
               </div>
               <div className="cart__body">
                  {currentExercises.map(obj => <Cart key={obj.id} {...obj} />)}
               </div>
            </div>

            {exercises.length > 6 &&
               <div className="exercises__pagination">
                  <PaginationUi
                     color="standard"
                     shape="rounded"
                     defaultPage={1}
                     count={Math.ceil(exercises.length / 6)}
                     page={page}
                     onChange={(_, value) => dispatch(setPage(value))}
                     size="small"
                  />
               </div>
            }

         </div>
      </section>
   )
}

export default Exercises