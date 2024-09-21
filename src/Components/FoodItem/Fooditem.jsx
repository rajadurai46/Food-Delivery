import React, { useContext } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { Storecontext } from '../../Storecontext/Storecontext'

const Fooditem = ({id, name, price, description, image}) => {

const {cartitems, addtocart, removefromcart} = useContext(Storecontext)

  return (
    <div className='food-item'>
        <div className='food-item-img-container'>
            <img className='food-item-img' src={image} alt='' />
            {!cartitems[id]
               ? <img className='add' 
               onClick={() => addtocart(id)} 
               src={assets.add_icon_white} alt='' />
               : <div className='food-item-counter'>
                 <img onClick={() => removefromcart(id)} 
                 src={assets.remove_icon_red} alt="" />
                 <p>{cartitems[id]}</p>
                 <img onClick={() => addtocart(id)} 
                 src={assets.add_icon_green} alt="" />
               </div>
            }
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p className='text-base font-semibold'>{name}</p>
                    <img className='' src={assets.rating_starts} alt="" />
                </div>
                <p className='text-sm'>{description}</p>
                <p className='text-orange-500 text-2xl font-medium m-2'>${price}</p>
            </div>
        </div>

    </div>
  )
}

export default Fooditem