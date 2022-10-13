import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import swal from 'sweetalert';
import logo from '../assets/logo.png'
import '../styles/Navbar.css'
import TextAnimate from './TextAnimate';

const submit = () => {
  swal(
      {
          title:"currículum vitae", 
          text:`download successfully`, 
          icon: "success", 
          button:"Aceptar",
          timer: "2000"
      }
      );
}

const NavBar = () => {

  return (
      <Navbar sticky="top" bg="light" expand="lg">
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
            
            <a onClick={submit} className='download-cv-navbar' href='/CvFabianGonzalez.pdf' download>DOWNLOAD CV</a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavBar;
