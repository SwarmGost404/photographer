import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./component/Header"
import Home from "./view/Home"
import About from "./view/About"
import Alboms from "./view/Alboms"
import Price from "./view/Price"
import Street from "./view/Street"
import FasionSolo from "./view/FasionSolo"
import LoveStory from "./view/LoveStory"


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/alboms" element={<Alboms />} />
        <Route path="/price" element={<Price />} />
        <Route path="/price">
          <Route path="street" element={<Street />} />
          <Route path="fasionsolo" element={<FasionSolo />} />
          <Route path="lovestory" element={<LoveStory />} />
        </Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
