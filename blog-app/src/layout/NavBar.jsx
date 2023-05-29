import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
const MyNavBar = () =>{
return(    
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="/">Blog App</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="/posts">Blog</Nav.Link>
        <Nav.Link href="/add">Add Blog</Nav.Link>
        
      </Nav>
    </Container>
  </Navbar>)

}

export default MyNavBar