import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand >ONLINE GANPATTI ORDER</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className="justify-content-end" id="navbarScroll">
                        <Nav >
                            <LinkContainer to="/cart">

                                <Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link ><i className="fas fa-user"></i>Sign In</Nav.Link>
                            </LinkContainer>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    )
}
export default Header;

/*<Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Online Ganpatti Order</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link href="/cart"><i class="fas fa-shopping-cart"></i>Cart</Nav.Link>
                    <Nav.Link href="/signIn"><i className="fas fa-user"></i>Sign In</Nav.Link>

                </Nav>
            </Container>
        </Navbar>
    */