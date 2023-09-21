

// Components
import Navbar from "./Components/navbar/navbar"
import Banner from "./Components/banner/banner"
import Contents from "./Components/contents/contents"
import Footer from "./Components/footer/footer"

// Css
import './App.css'


function App() {
  

  return (
    <>
      <div className="main-page">
          <Navbar/>
          <Banner/>
          <Contents/>
          <Footer/>
      </div>
    </>
  )
}

export default App
