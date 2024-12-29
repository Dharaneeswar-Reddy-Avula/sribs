import React from 'react'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Country } from './pages/Country'
import { Courses } from './pages/Courses'
import { Footer } from './components/Footer'
import { Contact } from './pages/Contact'
import { Navbar } from './components/Navbar'
export const App = () => {
  return (
    <div className='bg-[#0b1324] px-[20px] xl:px-[100px]'>
      <Navbar/>
      <Home/>
      <About/>
      <Country/>
      <Courses/>
      <Contact/>
      <Footer/>

    </div>
  )
}
