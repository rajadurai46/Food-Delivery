import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
     <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, omnis! Neque fuga 
                assumenda rem pariatur odio?</p>

                <div className='footer-social-icon'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
                </div>

                <div className='footer-content-center'>
                    <h2 className='text-white font-bold'>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About US</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                    </div>
                <div className='footer-content-right'>
                    <h2 className='text-white font-bold'>Get IN Touch</h2>
                    <ul>
                        <li>+91 9876543210</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr className='w-[100%] h-1 m-5 bg-slate-600 border-none'/>
            <p className="footer-copyright">
                @<span className='text-orange-500'>{new Date().getFullYear()}</span> Copyrights || All Rights Reserved.
            </p>
        </div>
     

    
  )
}

export default Footer