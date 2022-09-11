import * as React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import CONSTANTS from '../../utils/constants';


const SubHeader = () => {
  const [menuIndex, setMenuIndex] = React.useState(0)
  let location = useLocation();

  const setActive = (e) => {
    setMenuIndex(e)
  }

  return (
    <div>
      <Navbar fixed="top" bg="light" expand="lg" className='p-0'>
        <Container>
          <Navbar.Brand className="p-0">
            <Link to="/">
              <img src='/images/logo-3.png' className='mainLogo'></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {
                CONSTANTS.MENU_DATA.map((data, index) => {
                  return (
                    <>
                      {
                        data?.subMenu ?
                          <NavDropdown className={"headerMenu p-0" + (location.pathname === "submenu" ? 'headerMenu_active' : '')} title={data.title} id="basic-nav-dropdown">
                            {data?.subMenu?.map((subData) => {
                              return (
                                <>
                                  <NavDropdown.Item>
                                    <Link className='dropHeaderMenu' to={subData.to}>{subData.name}</Link>
                                  </NavDropdown.Item>
                                </>
                              )
                            })}
                          </NavDropdown>
                          :
                          (
                            <Nav.Link>
                              <Link className={"headerMenu " + (location.pathname === data.to ? 'headerMenu_active' : '')} onClick={() => setActive(data.index)} to={data.to}>{data.name}</Link>
                            </Nav.Link>
                          )
                      }
                    </>
                  )

                })
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default SubHeader;
