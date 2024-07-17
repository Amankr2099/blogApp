import React from 'react'
import { NavBar } from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'

export const Layout=()=> {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
    
  )
}
