import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./component/Header"
import Home from "./view/Home"
import About from "./view/About"
import Alboms from "./view/Alboms"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/alboms" element={<Alboms />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
