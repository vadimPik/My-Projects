import { Link } from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';
import classes from './Navigation.module.css';


const Navigation = (props) => {
    return (

        <div className={classes.sticky}>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={Link} to='/browse'>Beer Selection</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to='/browse'>Browse Beers</Nav.Link >
                        <Nav.Link as={Link} to='/favorites'>Favorite Beers</Nav.Link >
                    </Nav>
            </Navbar>
        </div>
    );
}

export default Navigation;