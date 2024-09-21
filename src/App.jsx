import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Placeorder from './Pages/PlaceOrder/Placeorder'
import Footer from './Components/Footer/Footer'
import Loginpopup from './Components/Loginpopup/Loginpopup'

const App = () => {

const [showlogin, setshowlogin] = useState(false)

  return (
    <>
    {showlogin?<Loginpopup setshowlogin={setshowlogin} />:<></>}
    <div className='app'>
      <Navbar setshowlogin={setshowlogin} />
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/placeorder' element={<Placeorder/>}/>
      </Routes>

    </div>
    <Footer/>
    </>
  )
}

export default App

