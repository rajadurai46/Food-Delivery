import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'

const Loginpopup = ({setshowlogin}) => {

    const [currstate, setcurrstate] = useState("Log IN")

  return (
    <div className='login-popup' id='login-popup'>
     <form action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currstate}</h2>
            <img onClick={() =>setshowlogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currstate==="Log IN"? <></>:<input type="text" placeholder='Your Name' />}
            <input type="email" placeholder='Your Email' />
            <input type="password" placeholder='Password' />
        </div>
        <button>{currstate==="Sign UP"? "Create Account":"Log IN"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" />
            <p>By continuing, I Agree to the Terms and Condition use and privacy policy.</p>
        </div>
        {currstate ==="Log IN"
        ? <p>Create a New Account?<span onClick={()=>setcurrstate("Sign UP")}>Click Here</span> </p> :
        <p>Already Have an Account? <span onClick={()=>setcurrstate("Log IN")}>Log IN Here</span> </p>
    }
        
        
     </form>
    </div>
  )
}

export default Loginpopup