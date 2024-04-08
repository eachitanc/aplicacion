import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon,
    MDBNavbarNav,
    MDBInputGroup,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem,
    MDBCardImage
} from 'mdb-react-ui-kit';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const [openNavNoToggler, setOpenNavNoToggler] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const location = useLocation();

    return (
        <>
            <MDBNavbar expand='lg' className='pt-5' style={{ backgroundColor: '#16a085' }}>
                <MDBContainer fluid>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarTogglerDemo01'
                        aria-controls='navbarTogglerDemo01'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setOpenNavNoToggler(!openNavNoToggler)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar open={openNavNoToggler} className='pb-4'>
                        <Link to="/inicio">
                            <MDBNavbarBrand aria-current='page' href='#'>
                                <MDBCardImage src='mile.png' className='img-fluid' style={{ width: '200px' }} waves='light' zoom hover alt='...' title="Inicio" />
                            </MDBNavbarBrand>
                        </Link>
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem>
                                <Link to="/usuarios">
                                    <MDBNavbarLink active={location.pathname === '/usuarios'} className={`text-light ${location.pathname === '/usuarios' ? 'bg-secondary' : ''}`}>Usuarios</MDBNavbarLink>
                                </Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link to="/actividades">
                                    <MDBNavbarLink active={location.pathname === '/actividades'} className={`text-light ${location.pathname === '/actividades' ? 'bg-secondary' : ''}`}>Actividades</MDBNavbarLink>
                                </Link>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                        <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
                            <MDBDropdown>
                                <MDBDropdownToggle tag="a" className="nav-link text-light" onClick={toggleDropdown}>
                                    <img
                                        src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                        alt=''
                                        style={{ width: '50px', height: '50px' }}
                                        className='rounded-circle'
                                    />
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>Perfil Usuario</MDBDropdownItem>
                                    <MDBDropdownItem link>Cambiar contraseña</MDBDropdownItem>
                                    <MDBDropdownItem divider />
                                    <MDBDropdownItem link>Cerrar Sesión</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBInputGroup>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}
export default Navbar;