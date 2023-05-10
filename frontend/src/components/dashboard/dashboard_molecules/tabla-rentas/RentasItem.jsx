import React, { useEffect } from 'react'
import { FaCcPaypal } from 'react-icons/fa'
import '../../renta/rentas.css';

import { Link } from 'react-router-dom';

import { getTodoPayments } from '../../../../redux/actions/payments/getTodoPayments';
import { getPaypalLink } from '../../../../redux/actions/payments/getPaypalLink';

import { useDispatch, useSelector } from 'react-redux'



export const RentasItem = ({ nombre = '', total = '', fecha = '', id_inmueble = '', approveUrl = '' }) => {

    const dispatch = useDispatch();

    const { linkData } = useSelector((state) =>  state.payments.create)


    // useEffect(() => {
    //     dispatch(getPaypalLink(id_inmueble));
    // }, [])

    // useEffect(()=>{
    //     console.log(linkData);
    // },[linkData])

    return (
        <tr>
            <td>
                <div className="">
                    <div className="">
                        <h6 className="nombre-inmueble">{nombre}</h6>

                    </div>
                </div>
            </td>
            <td className=''>
                <p className="pago">$ {total}</p>
            </td>
            <td className="xa">
                <span className=" ">{fecha}</span>
            </td>
            <td className="btn-pago-cont">
                <Link to={approveUrl} className='boton-pago'><FaCcPaypal className='btn-pago-icon' /></Link>
            </td>

        </tr>
    )
}


