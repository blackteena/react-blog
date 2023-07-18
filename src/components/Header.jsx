import { Image, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import avatar from '../assets/my_avatar.jpg'
import Search from './Search';

function Header({ onSearch }) {
  return (
    <Navbar key={'lg'} bg="light" expand={'lg'} className="mb-3">
      <Container fluid> 
        <Navbar.Brand><Link className='nav-link' to="/"><Image roundedCircle width={64} src={avatar} /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'lg'}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${'lg'}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${'lg'}`}
          placement="start" 
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'lg'}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Item>
                <Link className='nav-link' to="/">Home</Link>
              </Nav.Item>
              <Nav.Item>
                <Link className='nav-link' to="/about">About</Link>
              </Nav.Item>
            </Nav>

            <Search onSearch={onSearch} />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;