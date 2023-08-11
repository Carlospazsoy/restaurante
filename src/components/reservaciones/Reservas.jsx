import React, { useEffect, useState } from 'react'
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import './reservas.css'
import db from '../../config/dbFirebase';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Table } from 'react-bootstrap';

function Reservas() {
  //para guardar el listado de reservas
  const[reservas, setReservas] = useState([]);
  //este guarda los valores del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    fecha: '',
    hora: '',
    comensales: '',
    email: ''
  })

  const onSave = (event) =>{
    event.preventDefault();
    console.log(formData);
    addDoc(collection(db,'reserva'), formData);
    alert('Se guardo con exito!')
    
  }

  const onChange = (e) =>{
      setFormData({
        ...formData, [e.target.name]: e.target.value
      })
  }

  const getReservas = async() =>{
    onSnapshot(collection(db, 'reserva'), (snapshot) =>{
      const lista = [];
      snapshot.forEach(doc => lista.push({...doc.data(), id: doc.id}))
      setReservas(lista)
    })
    console.log(reservas);
  }

 useEffect(() =>{
getReservas();
 },[])

  return (
    <>
    <div >
   <div className='form-contenedor'>
   <Form onSubmit={onSave} className='form-reserva'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Nombre Completo</Form.Label>
        <Form.Control type="string" value={formData.nombre} onChange={onChange} name='nombre' placeholder="Escribe tu nombre y apellidos" />
       
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="phone" value={formData.telefono} onChange={onChange} name='telefono' placeholder="Escribe tu telefono" />
        <Form.Label>Fecha de Reservacion</Form.Label>
        <Form.Control type="date" value={formData.fecha}  onChange={onChange} name='fecha'  />
        <Form.Label>Hora de Reservacion</Form.Label>
        <Form.Control type="time" value={formData.hora} name='hora'  onChange={onChange}/>
        <Form.Label>Comensales</Form.Label>
        <Form.Control type="string" name='comensales' value={formData.comensales} onChange={onChange} placeholder="Escribe numero de personas" />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' value={formData.email} onChange={onChange} placeholder="Escribe tu email" />

        <Form.Text className="text-muted">
         Tu informacion es privada y no sera compartida o reutilizada.
        </Form.Text>
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
   </div>
   <div>
    <Table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Comensales</th>
        </tr>
      </thead>
      <tbody>
        {
          reservas.map(reserva => {
            return(
              <tr>
                <td>{reserva.nombre}</td>
                <td>{reserva.telefono}</td>
                <td>{reserva.fecha}</td>
                <td>{reserva.hora}</td>
                <td>{reserva.comensales}</td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
   </div>
    </div>
    </>
  )
}

export default Reservas