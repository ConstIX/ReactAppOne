import React from 'react'
import { Link } from 'react-router-dom'

const Cart: React.FC = () => {
   return (
      <div className='cart__column'>
         <Link to='/exercise/1' className="cart__item">
            <img src="https://v2.exercisedb.io/image/n6UH4SuRvUvtHh" alt="..." />
            <div className="cart__tags">
               <span>Upper Arms</span>
               <span>Biceps</span>
            </div>
            <h4 className="cart__title">Lorem, ipsum dolor. Lorem ipsum dolor sit amet.</h4>
         </Link>
      </div>
   )
}

export default Cart