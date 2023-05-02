import React, { useState } from 'react'
import './property.css';


import { DashboardNav } from '../dashboard_navBar/DashboardNav'



// const dispatch = useDispatch();
// const [formData, setFormData] = useState({
//   nombre: '',
//   email: '',
//   genero: '',
//   color: '',
// });

// const handleInputChange = (event) => {
//   setFormData({
//     ...formData,
//     [event.target.name]: event.target.value
//   });
// };

// const handleSubmit = (event) => {
//   event.preventDefault();
//   dispatch(sendFormData(formData));
// };


export const AddProp = () => {

  const [addPropData, setPropData] = useState({

    nombre: ''


  })





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
              <form action="" className='addProperty-form'>




                <div className="apf-1s">
                  <div className="apf-i-cont">
                    <label htmlFor="nombreInmueble">Nombre </label>
                    <input type="text" name='nombreInmueble' className='apf-i' />
                  </div>

                  <div className="apf-i-cont desc">
                    <label htmlFor="nombreInmueble">Descripcion </label>
                    <input type="text" name='nombreInmueble' className='apf-i i-desc' />
                  </div>
                </div>



                <div className="radios-cont">
                  {/* checked={formData.genero === 'hombre'} onChange={handleInputChange} */}
                  <div className="apf-i-cont">
                    <label htmlFor="tipoInmueble">Tipo:</label>
                    <br />
                    <input type="radio" id="casa" name="tipoInmueble" value="Casa" />
                    <label htmlFor="casa">Casa</label>
                    <br />
                    <input type="radio" id="depto" name="tipoInmueble" value="Departamento" />
                    <label htmlFor="depto">Departamento</label>
                    <br />
                    <input type="radio" id="local" name="tipoInmueble" value="Local" />
                    <label htmlFor="local">Local</label>
                    <br />
                    <input type="radio" id="terreno" name="tipoInmueble" value="Terreno" />
                    <label htmlFor="terreno">Terreno</label>
                  </div>

                  <div className="apf-i-cont">
                    <label htmlFor="tipoContrato">Giro: </label>
                    <br />
                    <input type="radio" name='tipoContrato' value='Venta' id='venta' />
                    <label htmlFor="venta">Venta</label>
                    <br />
                    <input type="radio" name='tipoContrato' value='Renta' id="renta" />
                    <label htmlFor="renta">Renta</label>

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
