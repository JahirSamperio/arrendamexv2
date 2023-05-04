import React from 'react'
import {FaCcPaypal} from 'react-icons/fa'
import '../../renta/rentas.css';
import { Link } from 'react-router-dom';


export const RentasItem = () => {
  return (
    <tr>
            <td>
                <div className="">
                    <div className="">
                        <h6 className="nombre-inmueble">Casa Veracruz</h6>

                    </div>
                </div>
            </td>
            <td className=''>
                <p className="pago">$ 5000.00</p>
            </td>
            <td className="xa">
                <span className=" ">2023/05/04</span>
            </td>
            <td className="btn-pago-cont">
                <Link  to={'https://www.sandbox.paypal.com/checkoutnow?token=72H71564UJ9507001'} className='boton-pago'><FaCcPaypal className='btn-pago-icon'/></Link>
            </td>

        </tr>
  )
}
