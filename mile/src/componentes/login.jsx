import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardFooter,
    MDBContainer,
    MDBInput,
    MDBBtn,
    MDBIcon,
    MDBCardImage
}
    from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
function Login() {
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <MDBCard alignment='center' className='w-25'>
                <MDBCardHeader className='bg-warning'>
                    <MDBCardImage src='mile.png' className='img-fluid' style={{ width: '200px' }} waves='light' zoom hover alt='...' title="Inicio" />
                </MDBCardHeader>
                <MDBCardBody>
                    <MDBContainer className="p-2 my-2 d-flex flex-column w-100">
                        <p className="h5 text-center mb-4">Iniciar sesión</p>
                        <MDBInput wrapperClass='mb-4' label='Usuario' id='form1' type='email' />
                        <MDBInput wrapperClass='mb-4' label='Contraseña' id='form2' type='password' />


                        <div className="text-center">
                            <Link to="/inicio">
                                <MDBBtn className='me-1' color='success'>
                                    <MDBIcon fas icon="lock-open" className='mx-2' />Iniciar
                                </MDBBtn>
                            </Link>
                            <div className='d-flex justify-content-between mx-auto pt-4' style={{ width: '40%' }}>
                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='facebook-f' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='google' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='github' size="sm" />
                                </MDBBtn>

                            </div>
                        </div>
                    </MDBContainer>
                </MDBCardBody>
                <MDBCardFooter className='text-light bg-warning'>Bienvenid@</MDBCardFooter>
            </MDBCard>
        </div>
    );
}

export default Login;