import React from 'react'
import './lastpay.css';

export const LastPaymentsTable = () => {
  return (
    <div className="col-payments">
    <div className="card ">
      <div className="card-header pb-0 p-3">
        <div className="d-flex justify-content-between">
          <h6 className="mb-2">Últimos pagos</h6>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table align-items-center ">
          <tbody>
            <tr>
              <td className="w-30">
                <div className="d-flex px-2 py-1 align-items-center">
                  <div className="ms-4">
                    <p className="text-xs font-weight-bold mb-0">Nombre:</p>
                    <h6 className="text-sm mb-0">Luis Javier</h6>
                  </div>
                </div>
              </td>
              <td>
                <div className="text-center">
                  <p className="text-xs font-weight-bold mb-0">Fecha de pago:</p>
                  <h6 className="text-sm mb-0">23/03/2023</h6>
                </div>
              </td>
              <td>
                <div className="text-center">
                  <p className="text-xs font-weight-bold mb-0">Monto:</p>
                  <h6 className="text-sm mb-0">$2,500</h6>
                </div>
              </td>
              <td className="align-middle text-sm">
                <div className="col text-center">
                  <p className="text-xs font-weight-bold mb-0">Inmueble:</p>
                  <h6 className="text-sm mb-0">Casa Veracruz</h6>
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-30">
                <div className="d-flex px-2 py-1 align-items-center">
                  <div className="ms-4">
                    <p className="text-xs font-weight-bold mb-0">Nombre:</p>
                    <h6 className="text-sm mb-0">Ariadna Hernandez</h6>
                  </div>
                </div>
              </td>
              <td>
                <div className="text-center">
                  <p className="text-xs font-weight-bold mb-0">Fecha de pago:</p>
                  <h6 className="text-sm mb-0">23/03/2023</h6>
                </div>
              </td>
              <td>
                <div className="text-center">
                  <p className="text-xs font-weight-bold mb-0">Monto:</p>
                  <h6 className="text-sm mb-0">$2,500</h6>
                </div>
              </td>
              <td className="align-middle text-sm">
                <div className="col text-center">
                  <p className="text-xs font-weight-bold mb-0">Inmueble:</p>
                  <h6 className="text-sm mb-0">Rancho San Francisco</h6>
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-30">
                <div className="d-flex px-2 py-1 align-items-center">
                  <div className="ms-4">
                    <p className="text-xs font-weight-bold mb-0">Nombre:</p>
                    <h6 className="text-sm mb-0">Jaime</h6>
                  </div>
                </div>
              </td>
              <td>
                <div className="text-center">
                  <p className="text-xs font-weight-bold mb-0">Fecha de pago:</p>
                  <h6 className="text-sm mb-0">23/03/2023</h6>
                </div>
              </td>
              <td>
                <div className="text-center">
                  <p className="text-xs font-weight-bold mb-0">Monto:</p>
                  <h6 className="text-sm mb-0">$2,500</h6>
                </div>
              </td>
              <td className="align-middle text-sm">
                <div className="col text-center">
                  <p className="text-xs font-weight-bold mb-0">Inmueble:</p>
                  <h6 className="text-sm mb-0">Casa Hidalgo</h6>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}
