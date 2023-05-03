import React, { useEffect } from 'react';

import { useParams } from "react-router-dom";
import { getRentalView } from '../../redux/actions/properties/getRentalView';
import { useDispatch, useSelector } from 'react-redux';

import NavBar from '../atoms/navBar/NavBar'

import './rentalview.css';
import {FaBath} from 'react-icons/fa';
import {BsTextarea} from 'react-icons/bs'
import {MdBedroomChild,MdMonetizationOn} from 'react-icons/md'
import {AiFillCar} from 'react-icons/ai'


export const RentalView = ({}) => {

  const dispatch = useDispatch();

  const { id_propertie:id } = useParams();

  console.log(id);
  
  const {rentalViewData,success}  = useSelector((state) => state.properties.getById);

  const { nombre,descripcion,tipoInmueble,id_arrendador,renta_venta,precio, estado,municipio,colonia,latitud,longitud,superficie_total
    ,antiguedad,num_recamaras,num_estacionamientos,superficie_construida,pathImage } = rentalViewData[0];


  useEffect(() => {
    dispatch(getRentalView(id));
  }, [])

  useEffect(() => {
    console.log(rentalViewData);
  }, [rentalViewData])

    

  return (

    <div className="oa">
      <NavBar />

      <div className="rental-view">
        <div className="rental-view-header"><h2>{nombre}</h2></div>
 
        <div className="rental-view-content">

          <div className="rental-view-col1">
            <div className="rental-view-img">
                <img src={pathImage} alt=""  className='rental-view-img-'/>
            </div>

            <div className="rental-view-desc">
              <div className="rv-info-h6"><h6>Descripcion</h6></div>

              <p>
                {descripcion}
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
              <p className='rv-info-p'>Tipo de inmueble: <span className="rv-info-s">{tipoInmueble}</span></p>
              <p className='rv-info-p'>Tipo de contrato: <span className="rv-info-s" style={{textTransform:'uppercase'}}>{renta_venta}</span></p>
              <p className='rv-info-p'><BsTextarea/> <span className="rv-info-s">{superficie_total}</span></p>
              <p className='rv-info-p' style={{fontSize:'20px'}}><MdBedroomChild/> <span className="rv-info-s">{num_recamaras}</span></p>
              <p className='rv-info-p'><FaBath/> <span className="rv-info-s">---</span></p>
              <p className='rv-info-p' style={{fontSize:'20px'}}><AiFillCar/> <span className="rv-info-s">{num_estacionamientos}</span></p>
              <p className='rv-info-p' style={{fontSize:'20px'}}><span className="rv-info-s">${precio}</span></p>

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
