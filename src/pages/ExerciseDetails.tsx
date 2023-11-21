import React from 'react'
import axios from 'axios';
import { useAppSelector } from '../redux/store';
import { useParams } from 'react-router-dom';

import Cart from '../components/Cart';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import icon1 from '../assets/icons/01.png'
import icon2 from '../assets/icons/02.png'
import icon3 from '../assets/icons/03.png'
import icon4 from '../assets/icons/loader.gif'


const ExerciseDetails: React.FC = () => {

   const { id } = useParams()
   const [details, setDetails] = React.useState<any>([])

   const { exercises } = useAppSelector(state => state.exercisesReducer)

   React.useEffect(() => {
      const fetchDetails = async () => {
         try {
            const { data } = await axios.get(`https://exercisedb.p.rapidapi.com/exercises/exercise/` + id, { headers: { 'X-RapidAPI-Key': '96620745camsh850180238d7a654p1491ffjsnce13520e5d5b', 'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com' } })
            setDetails(data)
            window.scrollTo(0, 0)
         } catch (error) {
            console.log(error)
         }
      }
      fetchDetails()
   }, [])

   if (details.length === 0) {
      return (
         <div className="details">
            <div className="details__preloader">
               <img src={icon4} alt="..." />
            </div>
         </div>
      )
   }

   return (
      <section className='details'>
         <div className="container">

            <div className="details__body">

               <div className="details__column">
                  <div className="details__item details__item_img"><img src={details.gifUrl} alt="..." /></div>
               </div>

               <div className="details__column">
                  <div className="details__item">
                     <div className="details__header-block header-block">
                        <h2 className="header-block__title header-block__title_d">{details.name}</h2>
                        {details.instructions.map((i: string) => <p className="header-block__text header-block__text_d" key={i}>{i}</p>)}
                     </div>
                     <div className="details__tag">
                        <span><img src={icon1} alt="..." /></span>
                        <p>{details.bodyPart}</p>
                     </div>
                     <div className="details__tag">
                        <span><img src={icon3} alt="..." /></span>
                        <p>{details.target}</p>
                     </div>
                     <div className="details__tag">
                        <span><img src={icon2} alt="..." /></span>
                        <p>{details.equipment}</p>
                     </div>
                  </div>
               </div>

            </div>

            {
               exercises.filter(obj => obj.target === details.target).length !== 0 &&
               <div className="details__slider">
                  <div className="details__header-block header-block">
                     <h2 className="header-block__title header-block__title_s">Similar <span>Target Muscle</span> exercises</h2>
                  </div>
                  <Swiper
                     modules={[Navigation, Pagination]}
                     spaceBetween={50}
                     slidesPerView={3}
                     navigation
                     pagination={true}
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
                     {exercises.filter(obj => obj.target === details.target).map((obj) => <SwiperSlide key={obj.id}><Cart {...obj} /></SwiperSlide>)}
                  </Swiper>
               </div>
            }

            {
               exercises.filter(obj => obj.equipment === details.equipment).length !== 0 &&
               <div className="details__slider details__slider_e">
                  <div className="details__header-block header-block">
                     <h2 className="header-block__title header-block__title_s">Similar <span>Equipment</span> exercises</h2>
                  </div>
                  <Swiper
                     modules={[Navigation, Pagination]}
                     spaceBetween={50}
                     slidesPerView={3}
                     navigation
                     pagination={true}
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
                     {exercises.filter(obj => obj.equipment === details.equipment).map((obj) => <SwiperSlide key={obj.id}><Cart {...obj} /></SwiperSlide>)}
                  </Swiper>
               </div>
            }

         </div>
      </section>
   )
}

export default ExerciseDetails