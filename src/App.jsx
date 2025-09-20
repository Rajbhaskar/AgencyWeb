import React from 'react'
import Header from './components/Header'
import Intro from './components/Intro'
import Company from './components/Company'
import Services from './components/Services'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Team from './components/Team'

const App = () => {
  return (
    <div className='bg-black min-h-screen'>
      <div className='h-16 flex items-center justify-between px-6'>
        <Header/>
      </div>
      <div id = 'intro' className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <Intro />
      </div>
      <div className='px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 '>
        <Company/>
      </div>
      <div id = 'Services' className='px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20'>
        <Services/>
      </div>
      <div id = 'Process' className='px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20'>
        <Process/>
      </div>
      <div id='Projects' className='px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20'>
        <Projects/>
      </div>
      <div id='Team' className='px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20'>
        <Team/>
      </div>
      <div id='Contact' className='px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20'>
        <Contact/>
      </div>
      <div >
        <Footer/>
      </div>
    </div>
  )
}

export default App