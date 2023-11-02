import { Navbar, Nav, Container } from 'react-bootstrap'

const MyNav = () => (
  <Navbar expand="lg" className="bg-secondary" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">EPIBOOKS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)

export default MyNav;