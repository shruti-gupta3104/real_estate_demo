import React from 'react'
import Navbar from './components/Navbar'
import Headeer from './components/Headeer'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify'
// import Contact from './components/Contact'
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <ToastContainer />
     <Headeer />
     <About />
     <Projects />
     <Testimonials />
    <Contact />
    <Footer />

    </div>
  )
}

export default App
