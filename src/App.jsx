import logo from './assets/logo.png'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.css'
import Form from 'react-bootstrap/Form';
import { useState } from 'react'

function App() {

  const themeDefault = {
    background: "white",
    color: "black"
  }

  const themeBlack = {
    background: "black",
    color: "white"
  }

  const [theme, setTheme] = useState(themeDefault)
  const [ isOn, setIsOn ] = useState(false)

  document.body.style = `background: ${theme.background}`
  document.body.style.color = `${theme.color}`;

  const changeState = () => {
    if (isOn) {
      setTheme(themeDefault);
      setTheme
    }
    else {
      setTheme(themeBlack);
    }
  }

  return (
    <HashRouter>
      <div>
        <div className="App">
          <Form className='container-btn-theme'>
          <Form.Check 
              type="switch"
              id="custom-switch"
              label={isOn ? "Dark" : "Light" }
              checked= {isOn}
              onChange={res => setIsOn(res.target.checked)}
              onClick= { changeState }
          />
          </Form>
      </div>

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
