import { Route, Routes } from "react-router"
import Home from "./Home"
import About from "./About"
import { NavLink } from "react-router"
import { Navbar } from "./Navbar"
import Contact from "./Contact"
import PageNotFound from "./PageNotFound"
function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path='/*' element={<PageNotFound/>}/>



      </Routes>
    </>
  )
}

export default App
