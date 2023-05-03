import React, { useState,useEffect } from 'react'
import './property.css';


import { DashboardNav } from '../dashboard_navBar/DashboardNav'
import { useDispatch, useSelector } from 'react-redux';
import { newProp } from '../../../../redux/actions/properties/newProp';


export const AddProp = () => {

  const { loading, success, error, propData } = useSelector((state) => state.properties.newProp);

  useEffect(() => {
    console.log(propData);
  }, [propData])

  const dispatch = useDispatch();


  const handleUploadProperty = (data) => {

    const formData = {
      propName: data.target.nombreInmueble.value,
      propDesc: data.target.descripcion.value,
      propType: data.target.propType.value,
      propSpin: data.target.propSpin.value,
      propPrice: data.target.precioInmueble.value,
      propState: data.target.inmuebleEstado.value,
      propCity: data.target.inmuebleMunicipio.value,
      propCol: data.target.inmuebleColonia.value,
      propLat: data.target.lat.value,
      propAlt: data.target.alt.value,
      propImg: data.target.inmuebleImagen.value,
      propSur: data.target.superficieT.value,
      propBuilt: data.target.superficieC.value,
      propAge: data.target.inmuebleAntiguedad.value,
      propBaths: data.target.inmuebleBanos.value,
      propRooms: data.target.inmuebleRecamaras.value,
      propParkS: data.target.inmuebleParkings.value,
    }

    dispatch(newProp(formData));


  }

  useEffect(() => {

    if (success) {
      alert('Inmueble agregado');
      navigate('/Dashboard');
    }

  }, [success])





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
                    <input id="propType" type="text" list="propTypes" className="apf-i" />
                    <datalist id="propTypes">
                      <option value="Casa">Casa</option>
                      <option value="Terreno">Terreno</option>
                      <option value="Local">Local</option>
                      <option value="Departamento">Departamento</option>
                    </datalist>
                  </div>

                  <div className="apf-i-cont">

                    <label >Giro </label>
                    <input id="propSpin" type="text" list="spin" className="apf-i" />
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
                    <input type="num" name='lat' placeholder='latitud' />
                    <input type="num" name='alt' placeholder='altitud' />
                  </div>

                  <div className="apf-img">
                    <input type="file" name='inmuebleImagen' />
                  </div>

                </div>

                <div className="apf-general">

                  <div className="apf-i-cont">
                    <label htmlFor="inmuebleSuperT">Superficie </label>
                    <input type="number" name="superficieT" id="" className='apf-numi apf-i' />
                  </div>

                  <div className="apf-i-cont">
                    <label htmlFor="inmuebleSuperC">Construida </label>
                    <input type="number" name="superficieC" id="" className='apf-numi apf-i' />
                  </div>

                  <div className="apf-i-cont">
                    <label htmlFor="inmuebleAntiguedad">Antigüedad </label>
                    <input type="number" name="inmuebleAntiguedad" id="" className='apf-numi apf-i' />
                  </div>

                  <div className="apf-i-cont">
                    <label htmlFor="inmuebleBanos">Baños </label>
                    <input type="number" name="inmuebleBanos" id="" className='apf-numi apf-i' />
                  </div>

                  <div className="apf-i-cont">
                    <label htmlFor="inmuebleRecamaras">Recamaras </label>
                    <input type="number" name="inmuebleRecamaras" id="" className='apf-numi apf-i' />
                  </div>

                  <div className="apf-i-cont">
                    <label htmlFor="inmuebleParking">Estacionamientos </label>
                    <input type="number" name='inmuebleParking' className='apf-numi apf-i' />
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
