import React from 'react'
import { useNavigate } from 'react-router-dom'

type CartProps = { id: string, gifUrl: string, target: string, equipment: string, name: string }

const Cart: React.FC<CartProps> = ({ id, gifUrl, target, equipment, name }) => {

   const navigate = useNavigate()
   const onClickHandler = () => {
      navigate(`/exercise/${id}`)
      window.location.reload()
   }

   return (
      <div className='cart__column'>
         <div onClick={onClickHandler} className="cart__item">
            <img src={gifUrl} alt="..." />
            <div className="cart__tags">
               <span>{equipment}</span>
               <span>{target}</span>
            </div>
            <h4 className="cart__title">{name}</h4>
         </div>
      </div>
   )
}

export default Cart