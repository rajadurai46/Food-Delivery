import React, { useContext } from 'react'
import './Fooddisplay.css'
import { Storecontext } from '../../Storecontext/Storecontext'
import Fooditem from '../FoodItem/Fooditem'

const Fooddisplay = ({category}) => {

    const {food_list} = useContext(Storecontext)

  return (
    <div className='food-display' id='food-display'>
        <h2 className='font-semibold'>Top Dishes Near You</h2>
        <div className='food-display-list'>
            {food_list.map((item, index) => {
                if (category==='All' || category===item.category){
                    return <Fooditem key={index} id={item._id} name={item.name} description={item.description}
                    price={item.price} image={item.image} />
                }
                   
            })}
        </div>
         
    </div>
  )
}

export default Fooddisplay