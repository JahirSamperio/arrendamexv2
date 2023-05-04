import React from 'react'

import '../dashboard.css'
import './arrendamientos.css';

import { Link } from 'react-router-dom';
import { BsBuildingFillAdd } from 'react-icons/bs'
import { TiUserAdd } from 'react-icons/ti';

import { DashboardNav } from '../dashboard_molecules/dashboard_navBar/DashboardNav'
import { Contract } from '../dashboard_molecules/dashboard-contract/Contract';
import { Property } from '../dashboard_molecules/dashboard-properties/Property';


import { useDispatch, useSelector } from 'react-redux'

import { getAllTenants } from '../../../redux/actions/properties/getAllTenants';
import { getPropInfo } from '../../../redux/actions/properties/getPropInfo';

import { useEffect } from 'react';





export const Arrendamientos = () => {

  const dispatch = useDispatch();

  const { tenantsData } = useSelector((state) => state.properties.getTenants);

  useEffect(() => {
    dispatch(getAllTenants());
  }, [])

  const { propInfoData } = useSelector((state) => state.properties.getInfo);

  useEffect(() => {
    dispatch(getPropInfo());
  }, []);




  return (
    <div className='container'>

      <div className="content">
        <aside className="col-1">
          <DashboardNav />
        </aside>

        <main className='col-2arrendamientos'>

          < div className="row-1">
            <div className="rented-table card">

              <div className="card-header">
                <h6 className='mb-0'>Arrendatarios</h6>
              </div>

              <table className="table align-items-center mb-0">
                <thead>
                  <tr className='th-cont'>
                    <th className="th-contract">Arrendatario</th>
                    <th className="th-contract">Inmueble</th>
                    <th className="th-contract">Estado</th>
                    <th className="th-contract">Fecha de pago</th>
                    <th className="text-secondary opacity-7"></th>
                  </tr>
                </thead>
                <tbody className='tttbb'>

                  {tenantsData.map((element, index) => {

                    return (
                      <Contract key={index}
                        nombre={element.nombreUsuario}
                        correo={element.email}
                        nombreInmueble={element.nombre}
                        tipoIn={element.tipoInmueble}
                        fecha={element.fecha_pago}
                      />
                    )
                  })}


                </tbody>
              </table>

            </div>

            <div className="properties-table card">

              <div className="card-header">
                <h6 className='mb-0'>Inmuebles</h6>
              </div>

              <table className='table align-items-center mb-0'>
                <thead>
                  <tr className='trt'>

                    <th className="thh">Nombre</th>
                    <th className="thh">Pago por mes</th>
                    <th className="thh">Estado</th>
                    <th className="thh">Tipo</th>

                  </tr>
                </thead>
                <tbody className='tttbb'>

                  {propInfoData.map((element, index) => {

                    return (
                      <Property key={index}
                        nombre={element.nombre}
                        precio={element.precio}
                        tipo={element.tipoInmueble}

                      />
                    )


                  })}


                </tbody>
              </table>

            </div>

          </div>

          <div className="row-2">

            <div className="addPropertyBtn">
              <div className="bbb">
                <Link to={'/AddContract'} className='addPropBtn'>Agregar contrato <TiUserAdd /></Link>
              </div>
            </div>



            <div className="addPropertyBtn">
              <div className="bbb">
                <Link to={'/AddProperty'} className='addPropBtn'>Agregar inmueble <BsBuildingFillAdd /></Link>
              </div>

            </div>

          </div>


        </main>

      </div>
    </div>
  )
}
