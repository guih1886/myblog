import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./CSS/App.css"
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage"
import ProjectsPage from "./Pages/ProjectsPage"
import ContactPage from "./Pages/ContactPage"


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App;
