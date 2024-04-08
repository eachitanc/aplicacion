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

function Act_Table() {
    return (
        <div className='p-1 square rounded-4'>
            <div breakpoint="sm" className='rounded-4 bg-light p-4'>
                <MDBCard>

                    <MDBCardHeader className='bg-warning text-left text-light pb-0'><h5>ACTIVIDADES DE USUARIOS</h5></MDBCardHeader>
                    <MDBCardBody>
                        <div className='text-center mb-4'>
                            <MDBBtn className='ms-2' tag='a' color='success' floating title='Nueva Actividad'>
                                <MDBIcon fas icon="user-plus" />
                            </MDBBtn>
                        </div>
                        <MDBTable align='middle' striped hover small className='rounded-6 shadow-4'>
                            <MDBTableHead className='text-center'>
                                <tr>
                                    <th scope='col'>#</th>
                                    <th scope='col'>Actividad</th>
                                    <th scope='col'>Usuario</th>
                                    <th scope='col'>Inicia</th>
                                    <th scope='col'>Termina</th>
                                    <th scope='col'>Estado</th>
                                    <th scope='col'>Opciones</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td className='text-left'>
                                        1
                                    </td>
                                    <td>
                                        Actividad número uno (1).
                                    </td>
                                    <td>
                                        Leon S. Kennedy.
                                    </td>
                                    <td className='text-center'>
                                        08:00 a.m.
                                    </td>
                                    <td className='text-center'>
                                        10:00 a.m.
                                    </td>
                                    <td className='text-center'>
                                        <MDBBadge color='success' pill>
                                            Completa
                                        </MDBBadge>
                                    </td>
                                    <td className='text-center'>
                                        <MDBBtn className='mx-2' tag='a' color='primary' floating size='sm' title='Editar'>
                                            <MDBIcon fas icon="edit" />
                                        </MDBBtn>
                                        <MDBBtn color='danger' tag='a' floating size='sm' title='Eliminar'>
                                            <MDBIcon fas icon="trash-alt" />
                                        </MDBBtn>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-left'>
                                        2
                                    </td>
                                    <td>
                                        Actividad número dos (2).
                                    </td>
                                    <td>
                                        Leon S. Kennedy.
                                    </td>
                                    <td className='text-center'>
                                        10:00 a.m.
                                    </td>
                                    <td className='text-center'>
                                        12:00 a.m.
                                    </td>
                                    <td className='text-center'>
                                        <MDBBadge color='secondary' pill>
                                            Pendiente
                                        </MDBBadge>
                                    </td>
                                    <td className='text-center'>
                                        <MDBBtn className='mx-2' tag='a' color='primary' floating size='sm' title='Editar'>
                                            <MDBIcon fas icon="edit" />
                                        </MDBBtn>
                                        <MDBBtn color='danger' tag='a' floating size='sm' title='Eliminar'>
                                            <MDBIcon fas icon="trash-alt" />
                                        </MDBBtn>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-left'>
                                        3
                                    </td>
                                    <td>
                                        Actividad número uno (1).
                                    </td>
                                    <td>
                                        Sherry Birkin
                                    </td>
                                    <td className='text-center'>
                                        08:00 a.m.
                                    </td>
                                    <td className='text-center'>
                                        10:00 a.m.
                                    </td>
                                    <td className='text-center'>
                                        <MDBBadge color='secondary' pill>
                                            Pendiente
                                        </MDBBadge>
                                    </td>
                                    <td className='text-center'>
                                        <MDBBtn className='mx-2' tag='a' color='primary' floating size='sm' title='Editar'>
                                            <MDBIcon fas icon="edit" />
                                        </MDBBtn>
                                        <MDBBtn color='danger' tag='a' floating size='sm' title='Eliminar'>
                                            <MDBIcon fas icon="trash-alt" />
                                        </MDBBtn>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-left'>
                                        4
                                    </td>
                                    <td>
                                        Actividad número dos (2).
                                    </td>
                                    <td>
                                        Sherry Birkin
                                    </td>
                                    <td className='text-center'>
                                        10:00 a.m.
                                    </td>
                                    <td className='text-center'>
                                        12:00 a.m.
                                    </td>
                                    <td className='text-center'>
                                        <MDBBadge color='success' pill>
                                            Completa
                                        </MDBBadge>
                                    </td>
                                    <td className='text-center'>
                                        <MDBBtn className='mx-2' tag='a' color='primary' floating size='sm' title='Editar'>
                                            <MDBIcon fas icon="edit" />
                                        </MDBBtn>
                                        <MDBBtn color='danger' tag='a' floating size='sm' title='Eliminar'>
                                            <MDBIcon fas icon="trash-alt" />
                                        </MDBBtn>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-left'>
                                        5
                                    </td>
                                    <td>
                                        Actividad número uno (1).
                                    </td>
                                    <td>
                                        Jill Valentine
                                    </td>
                                    <td className='text-center'>
                                        08:00 a.m.
                                    </td>
                                    <td className='text-center'>
                                        10:00 a.m.
                                    </td>
                                    <td className='text-center'>
                                        <MDBBadge color='success' pill>
                                            Completa
                                        </MDBBadge>
                                    </td>
                                    <td className='text-center'>
                                        <MDBBtn className='mx-2' tag='a' color='primary' floating size='sm' title='Editar'>
                                            <MDBIcon fas icon="edit" />
                                        </MDBBtn>
                                        <MDBBtn color='danger' tag='a' floating size='sm' title='Eliminar'>
                                            <MDBIcon fas icon="trash-alt" />
                                        </MDBBtn>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-left'>
                                        6
                                    </td>
                                    <td>
                                        Actividad número dos (2).
                                    </td>
                                    <td>
                                    Jill Valentine
                                    </td>
                                    <td className='text-center'>
                                        10:00 a.m.
                                    </td>
                                    <td className='text-center'>
                                        12:00 a.m.
                                    </td>
                                    <td className='text-center'>
                                        <MDBBadge color='success' pill>
                                            Completa
                                        </MDBBadge>
                                    </td>
                                    <td className='text-center'>
                                        <MDBBtn className='mx-2' tag='a' color='primary' floating size='sm' title='Editar'>
                                            <MDBIcon fas icon="edit" />
                                        </MDBBtn>
                                        <MDBBtn color='danger' tag='a' floating size='sm' title='Eliminar'>
                                            <MDBIcon fas icon="trash-alt" />
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

export default Act_Table;