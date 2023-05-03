import React from 'react'
import {FaCcPaypal} from 'react-icons/fa'
import '../../renta/rentas.css';

export const RentasItem = () => {
  return (
    <tr>
            <td>
                <div className="">
                    <div className="">
                        <h6 className="nombre-inmueble">Nombre inmueble</h6>

                    </div>
                </div>
            </td>
            <td className=''>
                <p className="pago">$ 0000.00</p>
            </td>
            <td className="xa">
                <span className=" ">00/00/0000</span>
            </td>
            <td className="btn-pago-cont">
                <button className='boton-pago'><FaCcPaypal className='btn-pago-icon'/></button>
            </td>

        </tr>
  )
}
