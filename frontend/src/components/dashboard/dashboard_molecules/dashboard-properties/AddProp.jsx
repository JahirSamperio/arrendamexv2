import React, { useState, useEffect } from 'react'
import './property.css';

import { DashboardNav } from '../dashboard_navBar/DashboardNav'
import { useDispatch, useSelector } from 'react-redux';
import { newProp } from '../../../../redux/actions/properties/newProp';
import { useNavigate } from 'react-router-dom';
import { resetDataNewPropProcess } from '../../../../redux/slices/properties/newPropSlice';


export const AddProp = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, success, error, propData } = useSelector((state) => state.properties.new);

  useEffect(() => {
    console.log(propData);
  }, [propData])


  const handleUploadProperty = (data) => {

    const propertyData = {
      // fileImage: data.target.inmuebleImagen.value,
      nombre: data.target.nombreInmueble.value,
      descripcion: data.target.descripcion.value,
      tipoInmueble: data.target.propType.value,
      renta_venta: data.target.propSpin.value,
      precio: data.target.precioInmueble.value,
      id_arrendador: localStorage.getItem('id'),
      estado: data.target.inmuebleEstado.value,
      municipio: data.target.inmuebleMunicipio.value,
      colonia: data.target.inmuebleColonia.value,
      latitud: data.target.lat.value,
      longitud: data.target.lon.value,
      superficie_total: data.target.superficieT.value,
      antiguedad: data.target.inmuebleAntiguedad.value,
      num_recamaras: data.target.inmuebleRecamaras.value,
      num_estacionamientos: data.target.inmuebleParking.value,
      superficie_construida: data.target.superficieC.value,
      
    }


    dispatch(newProp(propertyData));


  }

  useEffect(() => {

    if (success == true) {
      alert('Inmueble agregado');
      navigate('/Dashboard');
    } else if (error == true) {
      alert('Error al agregar inmueble')
    }

  }, [success])


  useEffect(() => {
    if (success || error) {
      setTimeout(() => {
        dispatch(resetDataNewPropProcess());
      }, 2000);
    }
  }, [success, error])



  return (
    <div className='container'>

      <div className="content">
        <aside className="col-1">
          <DashboardNav />
        </aside>

        <main className='col-2'>


          <div className="card addProp-form">
            <div className="card-header"><h6>Agregar inmueble</h6></div>

            <div className="">
              <form method='submit' onSubmit={(e) => {
                (e).preventDefault();
                handleUploadProperty(e);
              }} className='addProperty-form'>




                <div className="apf-1s">
                  <div className="apf-i-cont">
                    <label htmlFor="nombreInmueble">Nombre </label>
                    <input type="text" name='nombreInmueble' className='apf-i' />
                  </div>

                  <div className="apf-i-cont desc">
                    <label htmlFor="descripcion">Descripcion </label>
                    <input type="text" name='descripcion' className='apf-i i-desc' />
                  </div>
                </div>



                <div className="radios-cont">
                  <div className="apf-i-cont">
                    <label >Tipo de inmueble </label>
                    <input id="propType" name='propType' type="text" list="propTypes" className="apf-i" />
                    <datalist id="propTypes">
                      <option value="Casa">Casa</option>
                      <option value="Terreno">Terreno</option>
                      <option value="Local">Local</option>
                      <option value="Departamento">Departamento</option>
                    </datalist>
                  </div>

                  <div className="apf-i-cont">

                    <label >Giro </label>
                    <input id="propSpin" name='propSpin' type="text" list="spin" className="apf-i" />
                    <datalist id="spin">
                      <option value="Venta">Venta</option>
                      <option value="Renta">Renta</option>
                    </datalist>

                  </div>

                </div>




                <div className="apf-ubi">
                  <div className="apf-i-cont">
                    <label htmlFor="precioInmueble">Precio </label>
                    <input type="number" name="precioInmueble" id="precioInmueble" className='apf-i' />
                  </div>

                  <div className="apf-i-cont">
                    <label htmlFor="inmuebleEstado">Estado </label>
                    <input type="text" name='inmuebleEstado' className='apf-i' />
                  </div>

                  <div className="apf-i-cont">
                    <label htmlFor="inmuebleMunicipio">Municipio </label>
                    <input type="text" name='inmuebleMunicipio' className='apf-i' />
                  </div>

                  <div className="apf-i-cont">
                    <label htmlFor="inmuebleColonia">Colonia </label>
                    <input type="text" name='inmuebleColonia' className='apf-i' />
                  </div>
                </div>

                <div className="map-img">
                  <div className="apf-map">
                    <input type="text" name='lat' placeholder='latitud'  className='apf-i'/>
                    <input type="text" name='lon' placeholder='longitud' className='apf-i'/>
                  </div>

                  <div className="apf-img">
                    <input type="file" name='inmuebleImagen' />
                  </div>

                </div>

                <div className="apf-general">

                  <div className="apf-i-cont">
                    <label htmlFor="inmuebleSuperT">Superficie </label>
                    <input type="text" name="superficieT" id="" className='apf-numi apf-i' />
                  </div>

                  <div className="apf-i-cont">
                    <label htmlFor="inmuebleSuperC">Construida </label>
                    <input type="text" name="superficieC" id="" className='apf-numi apf-i' />
                  </div>

                  <div className="apf-i-cont">
                    <label htmlFor="inmuebleAntiguedad">Antigüedad </label>
                    <input type="text" name="inmuebleAntiguedad" id="" className='apf-numi apf-i' />
                  </div>

                  <div className="apf-i-cont">
                    <label htmlFor="inmuebleBanos">Baños </label>
                    <input type="text" name="inmuebleBanos" id="" className='apf-numi apf-i' />
                  </div>

                  <div className="apf-i-cont">
                    <label htmlFor="inmuebleRecamaras">Recamaras </label>
                    <input type="text" name="inmuebleRecamaras" id="" className='apf-numi apf-i' />
                  </div>

                  <div className="apf-i-cont">
                    <label htmlFor="inmuebleParking">Estacionamientos </label>
                    <input type="text" name='inmuebleParking' className='apf-numi apf-i' />
                  </div>

                </div>

                <input type="submit" value='Agregar inmueble' className='addProperty-btn' />
              </form>
            </div>

          </div>

        </main>

      </div>
    </div>
  )
}
