import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/assets'

const Appdownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br/> Tomato APP </p>
        <div className='app-download-platform'>
            <img className='w-max max-w-44 transition-[0.5s] cursor-pointer
            hover:scale-[1.05]' src={assets.play_store} alt="" />
            <img className='w-max max-w-44 transition-[0.5s] cursor-pointer
            hover:scale-[1.05]' src={assets.app_store} alt="" />
        </div>

    </div>
  )
}

export default Appdownload