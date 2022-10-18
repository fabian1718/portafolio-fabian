import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import swal from 'sweetalert';
import logo from '../assets/logo.png'
import '../styles/Navbar.css'
import TextAnimate from './TextAnimate';

const submit = () => {

  // const themeDefault = {
  //   background: "#FAFAFA",
  //   color: "#343A40"
  // }

  // const themeBlack = {
  //   background: "#343A40",
  //   color: "#FAFAFA"
  // }

  // const [theme, setTheme] = useState(themeDefault)
  // const [ isOn, setIsOn ] = useState(false)

  // document.body.style = `background: ${theme.background}`
  // document.body.style.color = `${theme.color}`;

  // const changeState = () => {
  //   if (isOn) {
  //     setTheme(themeDefault);
  //     setTheme
  //   }
  //   else {
  //     setTheme(themeBlack);
  //   }
  // }

  swal(
      {
          title:"currículum vitae", 
          text:`download successfully`, 
          icon: "success", 
          button:"to accept",
          timer: "2000"
      }
      );
}

const NavBar = () => {
  // light - dark
  return (
      <Navbar sticky="top" bg='primary' variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/"><img style={{width:50}} src={logo} alt="" />Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/#/project">Projects</Nav.Link>
              <Nav.Link href="/#/skills">Skills</Nav.Link>
             
              <NavDropdown title="More" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/#/aboutme">About me</NavDropdown.Item>
                <NavDropdown.Item href="/#/contactme">Contact me</NavDropdown.Item>

                
              </NavDropdown>
              <Nav.Link href="#" disabled> <TextAnimate /></Nav.Link>
            </Nav>
            
            

            <a style={{color:'white'}} onClick={submit} className='download-cv-navbar' href='/CvFabianGonzalez.pdf' download>DOWNLOAD CV</a>

            {/* <Form className='container-btn-theme '>
              <Form.Check
                type="switch"
                id="custom-switch"
                label={isOn ? "Dark" : "Light" }
                checked= {isOn}
                onChange={res => setIsOn(res.target.checked)}
                onClick= { changeState }
              />
            </Form> */}

          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavBar;
