import { Link } from 'react-router-dom';
import {Nav, Navbar, Button, Form, FormControl} from 'react-bootstrap';

const Navigation = (props) => {
    return (
        // <header>
        //     <div>Beer Selection</div>
        //     <nav>
        //         <ul>
        //             <li>
        //                 <Link to='/browse'>Browse Beers</Link>
        //             </li>
        //             <li>
        //                 <Link to='/favorites'>Favorite Beers</Link>
        //             </li>
        //         </ul>
        //     </nav>
        // </header>

    <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to='/browse'>Beer Selection</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to='/browse'>Browse Beers</Nav.Link >
                <Nav.Link as={Link} to='/favorites'>Favorite Beers</Nav.Link >
            </Nav>
            {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Submit</Button>
            </Form> */}
    </Navbar>

    );
}

export default Navigation;