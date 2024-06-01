import { Routes, Route } from "react-router-dom";
import Home from "./page/Home"
import Header from "./page/Header";
import Footer from "./page/Footer"
function App() {

  return (
    <>
      <div className='app'>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
