import logo from './assets/logo.png'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './styles/App.css'

function App() {

  return (
    <HashRouter>
      <div className="App">
        <NavBar />     
        <Routes>
          <Route path='/' element= {<Home />}/>
          <Route path='/aboutMe' element= {<AboutMe />}/>
          <Route path='/skills' element= {<Skills />}/>
          <Route path='/project' element = {<Projects />}/>
          <Route path='/contactme' element={<ContactMe />}/>
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
