import { Link } from 'react-router-dom';
import {Nav, Navbar,Image} from 'react-bootstrap';
import classes from './Navigation.module.css';

import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
    
            <div
            style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', position: '-webkit-sticky', position: 'sticky', top: '0' }}
            >
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                {/* <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}> */}
                
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-2x"></i>}>
                <a
                    href="/"
                    className="text-decoration-none fa-2x"
                    style={{ color: 'inherit'}}
                >
                    iDAT 
                    
                    {/* Sidebar */}
                </a>
               
                <Image src='pngegg.png'></Image>
           
                </CDBSidebarHeader>
                <div
                    style={{
                     padding: '5px'
                    }}
                >
        
                    <CDBSidebarContent className="sidebar-content">

                    <CDBSidebarMenu>
                        <NavLink exact to="/favorites" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="columns">24H Dashboard</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/browse" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="table">Messages</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/browseprefetch" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="table">CQ Prefetch Messages</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/profile" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="user">Expired Messages</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/analytics" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="chart-line">Care Event</CDBSidebarMenuItem>
                        </NavLink>

                        {/* <NavLink
                        exact
                        to="/hero404"
                        target="_blank"
                        activeClassName="activeClicked"
                        >
                        <CDBSidebarMenuItem icon="exclamation-circle">
                            404 page
                        </CDBSidebarMenuItem>
                        </NavLink> */}
                    </CDBSidebarMenu>
                    </CDBSidebarContent>
                </div>
                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                <div
                    style={{
                    padding: '20px 5px',
                    }}
                >
                    {/* Sidebar Footer */}
                </div>
                </CDBSidebarFooter>
            </CDBSidebar>
            </div>
       
      );
    };




// const Navigation = (props) => {
//     return (

//         <div className={classes.sticky}>
//             <Navbar bg="dark" variant="dark">
//                 <Navbar.Brand as={Link} to='/browse'>Beer Selection</Navbar.Brand>
//                     <Nav className="mr-auto">
//                         <Nav.Link as={Link} to='/browse'>Browse Beers</Nav.Link >
//                         <Nav.Link as={Link} to='/favorites'>Favorite Beers</Nav.Link >
//                     </Nav>
//             </Navbar>
//         </div>
//     );
// }




export default Navigation;