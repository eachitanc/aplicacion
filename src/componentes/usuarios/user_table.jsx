import React from 'react';
import {
    MDBBadge,
    MDBBtn,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBIcon,
    MDBCard,
    MDBCardBody,
    MDBCardHeader
} from 'mdb-react-ui-kit';

function User_Table() {
    return (
        <div className='p-1 square rounded-4'>
            <div breakpoint="sm" className='rounded-4 bg-light p-4'>
                <MDBCard>

                    <MDBCardHeader className='bg-warning text-left text-light pb-0'><h5>USUARIOS DEL SISTEMA</h5></MDBCardHeader>
                    <MDBCardBody>
                        <div className='text-center mb-4'>
                            <MDBBtn className='ms-2' tag='a' color='success' floating title='Nueva Actividad'>
                                <MDBIcon fas icon="user-plus" />
                            </MDBBtn>
                        </div>
                        <MDBTable align='middle' striped hover small className='rounded-6 shadow-4'>
                            <MDBTableHead className='text-center'>
                                <tr>
                                    <th scope='col'>Img</th>
                                    <th scope='col'>Nombre</th>
                                    <th scope='col'>Usuario</th>
                                    <th scope='col'>Estado</th>
                                    <th scope='col'>Rol</th>
                                    <th scope='col'>Opciones</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td className='text-center'>
                                        <img
                                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                            alt=''
                                            style={{ width: '30px', height: '30px' }}
                                            className='rounded-circle'
                                        />
                                    </td>
                                    <td>
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>Leon S. Kennedy</p>
                                            <p className='text-muted mb-0'>leon.kennedy@umbrella.com</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'>1</p>
                                    </td>
                                    <td className='text-center'>
                                        <MDBBadge color='success' pill>
                                            Active
                                        </MDBBadge>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'>Admin</p>
                                    </td>
                                    <td className='text-center'>
                                        <MDBBtn className='mx-2' tag='a' color='primary' floating size='sm' title='Editar'>
                                            <MDBIcon fas icon="edit" />
                                        </MDBBtn>
                                        <MDBBtn color='danger' tag='a' floating size='sm' title='Eliminar'>
                                            <MDBIcon fas icon="trash-alt" />
                                        </MDBBtn>
                                        <MDBBtn className='ms-2' tag='a' color='info' floating size='sm' title='Permisos'>
                                            <MDBIcon fas icon="shield-alt" />
                                        </MDBBtn>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center'>
                                        <img
                                            src='https://mdbootstrap.com/img/new/avatars/5.jpg'
                                            alt=''
                                            style={{ width: '30px', height: '30px' }}
                                            className='rounded-circle'
                                        />
                                    </td>
                                    <td>
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>Rebecca Chambers</p>
                                            <p className='text-muted mb-0'>rebecca.chambers@umbrella.com</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'>12345</p>
                                    </td>
                                    <td className='text-center'>
                                        <MDBBadge color='secondary' pill>
                                            Inactive
                                        </MDBBadge>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'>Básico</p>
                                    </td>
                                    <td className='text-center'>
                                        <MDBBtn className='mx-2' tag='a' color='primary' floating size='sm' title='Editar'>
                                            <MDBIcon fas icon="edit" />
                                        </MDBBtn>
                                        <MDBBtn color='danger' tag='a' floating size='sm' title='Eliminar'>
                                            <MDBIcon fas icon="trash-alt" />
                                        </MDBBtn>
                                        <MDBBtn className='ms-2' tag='a' color='info' floating size='sm' title='Permisos'>
                                            <MDBIcon fas icon="shield-alt" />
                                        </MDBBtn>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center'>
                                        <img
                                            src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                                            alt=''
                                            style={{ width: '30px', height: '30px' }}
                                            className='rounded-circle'
                                        />
                                    </td>
                                    <td>
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>Jill Valentine</p>
                                            <p className='text-muted mb-0'>jill.valentine@umbrella.com</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'>23456</p>
                                    </td>
                                    <td className='text-center'>
                                        <MDBBadge color='success' pill>
                                            Active
                                        </MDBBadge>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'>Básico</p>
                                    </td>
                                    <td className='text-center'>
                                        <MDBBtn className='mx-2' tag='a' color='primary' floating size='sm' title='Editar'>
                                            <MDBIcon fas icon="edit" />
                                        </MDBBtn>
                                        <MDBBtn color='danger' tag='a' floating size='sm' title='Eliminar'>
                                            <MDBIcon fas icon="trash-alt" />
                                        </MDBBtn>
                                        <MDBBtn className='ms-2' tag='a' color='info' floating size='sm' title='Permisos'>
                                            <MDBIcon fas icon="shield-alt" />
                                        </MDBBtn>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center'>
                                        <img
                                            src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                                            alt=''
                                            style={{ width: '30px', height: '30px' }}
                                            className='rounded-circle'
                                        />
                                    </td>
                                    <td>
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>Claire Redfield</p>
                                            <p className='text-muted mb-0'>claire.redfield@umbrella.com</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'>34567</p>
                                    </td>
                                    <td className='text-center'>
                                        <MDBBadge color='success' pill>
                                            Active
                                        </MDBBadge>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'>Básico</p>
                                    </td>
                                    <td className='text-center'>
                                        <MDBBtn className='mx-2' tag='a' color='primary' floating size='sm' title='Editar'>
                                            <MDBIcon fas icon="edit" />
                                        </MDBBtn>
                                        <MDBBtn color='danger' tag='a' floating size='sm' title='Eliminar'>
                                            <MDBIcon fas icon="trash-alt" />
                                        </MDBBtn>
                                        <MDBBtn className='ms-2' tag='a' color='info' floating size='sm' title='Permisos'>
                                            <MDBIcon fas icon="shield-alt" />
                                        </MDBBtn>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center'>
                                        <img
                                            src='https://mdbootstrap.com/img/new/avatars/9.jpg'
                                            alt=''
                                            style={{ width: '30px', height: '30px' }}
                                            className='rounded-circle'
                                        />
                                    </td>
                                    <td>
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1'>Sherry Birkin</p>
                                            <p className='text-muted mb-0'>sherry.birkin@umbrella.com</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'>45678</p>
                                    </td>
                                    <td className='text-center'>
                                        <MDBBadge color='success' pill>
                                            Active
                                        </MDBBadge>
                                    </td>
                                    <td>
                                        <p className='fw-normal mb-1'>Básico</p>
                                    </td>
                                    <td className='text-center'>
                                        <MDBBtn className='mx-2' tag='a' color='primary' floating size='sm' title='Editar'>
                                            <MDBIcon fas icon="edit" />
                                        </MDBBtn>
                                        <MDBBtn color='danger' tag='a' floating size='sm' title='Eliminar'>
                                            <MDBIcon fas icon="trash-alt" />
                                        </MDBBtn>
                                        <MDBBtn className='ms-2' tag='a' color='info' floating size='sm' title='Permisos'>
                                            <MDBIcon fas icon="shield-alt" />
                                        </MDBBtn>
                                    </td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>
                    </MDBCardBody>
                </MDBCard>

            </div>
        </div>
    );
}

export default User_Table;