import React from 'react'

import image from '../assets/icons/gym.png'

import { setCategory } from '../redux/slices/filterSlice'
import { useAppDispatch, useAppSelector } from '../redux/store'

const Category: React.FC<{ title: string }> = ({ title }) => {

   const dispatch = useAppDispatch()
   const { category } = useAppSelector(state => state.filterReducer)

   return (
      <div className='exercises__category category'>
         <div onClick={() => dispatch(setCategory(title))} className={`category__item ${category === title ? 'active' : ''}`}>
            <img src={image} alt="..." />
            <p className="category__title">{title.replace(/[^a-zа-яё]/gi, ' ')}</p>
         </div>
      </div>
   )
}

export default Category