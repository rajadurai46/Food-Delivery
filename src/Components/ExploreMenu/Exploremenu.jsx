import React from 'react'
import './Exploremenu.css'
import {menu_list} from '../../assets/assets'

const Exploremenu = ({category, setcategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1 className='font-bold'>Explore Our Menu</h1>
        <p className='max-w-[60%]'>Choose from a diverse menu featuring a delectable array of dishes.
        Our Mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.</p>
        <div className='explore-menu-list'>
            {menu_list.map((item, index) => {
                return(

                    <div onClick={() => setcategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
                    key={index} className='explore-menu-list-item'>
                     <img className={category===item.menu_name?"active":""} src={item.menu_image} alt='' />
                     <p className='mt-3 font-medium cursor-pointer'>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr className='m-3 h-1 bg-slate-100 border-none' />
    </div>
  )
}

export default Exploremenu