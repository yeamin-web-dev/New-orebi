import React from 'react'
import Header from './Header'
import Navber from './Navber'
import Footer from './Footer'

import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
      <Header/>
      <Navber/>
     <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
