import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router'
import Header from './sections/Header/Header'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Process from './sections/Process/Process'
import Services from './sections/Services/Services'
import Stats from './sections/Stats/Stats'
import Steps from './sections/Steps/Steps'
import Cases from './sections/Cases/Cases'
import Points from './sections/Points/Points'
import Faq from './sections/Faq/Faq'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'
import Form from './sections/Form/Form'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function HomePage() {
  return (
    <>
      <main id="top">
        <Hero />
        <About />
        <Process />
        <Services />
        <Stats />
        <Steps />
        <Cases />
        <Points />
        <Faq />
        <Contact />
      </main>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/consult" element={<Form />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
