import '../../dashboard.css'
import '../dashboard-addContract/addContract.css'

import { useDispatch } from 'react-redux'
import { useState } from 'react'

import { DashboardNav } from '../dashboard_navBar/DashboardNav'
import { Contract } from '../dashboard-contract/Contract'
import { Property } from '../dashboard-properties/Property'



export const AddContract = () => {


  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    genero: '',
    color: '',
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(sendFormData(formData));
  };


  return (
    <div className='container'>

      <div className="content">
        <aside className="col-1">
          <DashboardNav />
        </aside>

        <main className='col-2'>


          <div className="card addContractI-cont">
            <div className="card-header"><h6>Agregar arrendatario a inmueble</h6></div>

            <div className="adContract-inmueblesT">
              <table className="table align-items-center mb-0">
                <thead>
                  <tr className='th-cont'>
                    <th className="th-contract">Inmueble</th>
                    <th className="th-contract">Costo</th>
                    <th className="th-contract">Estado</th>
                    <th className="th-contract">Tipo</th>
                    <th className="text-secondary opacity-7"></th>
                  </tr>
                </thead>
                <tbody>
                  <Property />


                </tbody>
              </table>
            </div>

            <form action="" className="addContract-form">

              <div className="adc-i-cont">
                <label htmlFor="idUsuario">ID del usuario </label>
                <input type="number" placeholder='' name='idUsuario' className='adc-i' />
              </div>

              <div className="adc-i-cont">
                <label htmlFor="idInmueble">ID del inmueble </label>
                <input type="number" placeholder=' ' name='idInmueble' className='adc-i' />
              </div>

              <div className="adc-i-cont">
                <label htmlFor="fechaContrato">Fecha de inicio del contrato </label>
                <input type="date" placeholder='' name='fechaContrato' className='adc-i' />

              </div>

              <input type="submit" value="Agregar" className='addContract-btn' />

            </form>
          </div>

        </main>

      </div>
    </div>
  )
}