import React, { useEffect } from 'react';

import { useParams } from "react-router-dom";
import { getRentalView } from '../../redux/actions/properties/getRentalView';
import { useDispatch, useSelector } from 'react-redux';

import NavBar from '../atoms/navBar/NavBar'

import './rentalview.css';
import {FaBath} from 'react-icons/fa';





export const RentalView = () => {

  // Crear toda la logica en redux para obtener
  // la informacion del producto 

  // Traerlo desde la API

  //Mostrarla en un console.log();

  const dispatch = useDispatch();

  const { id_propertie } = useParams();


  const { success, error, rentalViewData } = useSelector((state) => state.properties.getById);

  const { name, precio, banos, tipoInmueble, tipoContrato, superficie, habitaciones, parking } = rentalViewData;

  useEffect(() => {
    dispatch(getRentalView(4));
  }, [])

  useEffect(() => {
    console.log(rentalViewData);
  }, [rentalViewData])


  return (
    // <div>
    //    <p> josue : {name}</p>
    //    <p> josue : {precio}</p>
    // </div>


    <div className="oa">
      <NavBar />

      <div className="rental-view">
        <div className="rental-view-header"><h2>{name}</h2></div>

        <div className="rental-view-content">

          <div className="rental-view-col1">
            <div className="rental-view-img">

            </div>

            <div className="rental-view-desc">
              <div className="rv-info-h6"><h6>Descripcion</h6></div>

              <p>Esta sera una descripcion del inmueble jaja
                la verdad no se que poner, buena inteligencia
                por eso controlo, disfrutando de mis logros, me
                acostumbre a golear, con hechos demostrar, no
                confunda mi humildad, soy hombre de palabra.
                Para el jale efectivo...
              </p>
            </div>

            <div className="rental-view-map-cont">
                <div className="card-header" style={{padding:'10px'}}><h6>Ubicacion</h6></div>

            </div>
          </div>

          <div className="rental-view-col2">

            <div className="rv-info-header">
              <h6 className='rv-info-h6'>Informacion de la propiedad</h6>
            </div>

            <div className="rental-view-info">
              <p className='rv-info-p'>Tipo de inmueble: <span className="rv-info-s">---</span></p>
              <p className='rv-info-p'>Tipo de contrato: <span className="rv-info-s">---</span></p>
              <p className='rv-info-p'>Superficie: <span className="rv-info-s">---</span></p>
              <p className='rv-info-p'>Habitaciones: <span className="rv-info-s">---</span></p>
              <p className='rv-info-p'>Banos: <span className="rv-info-s">---</span></p>
              <p className='rv-info-p'>Parking: <span className="rv-info-s">---</span></p>
              <p className='rv-info-p'>Precio: <span className="rv-info-s">{precio}</span></p>

            </div>

            <div className="rv-form-cont">
              <div className="rental-view-header rvch"><h6>Solicite su cita</h6></div>
              <form className="rv-form">

                <input type="text" name='nombreCita' placeholder='Ingrese su nombre' className='rv-input' />
                <div className="rv-time">
                  <input type="date" name='fechaCita' placeholder='' className='rv-input' />
                  <input type="time" name='horaCita' placeholder='' className='rv-input' />
                </div>

                <input type="submit" name='enviarCita' value='Solicitar' className='send-cita' />

              </form>

            </div>
          </div>



        </div>
      </div>
    </div>



  )
}
