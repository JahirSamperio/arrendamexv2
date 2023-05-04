import React from 'react'
import './property.css'


export const Property = ({nombre='',precio='',tipo='',rv=''}) => {
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
                <p className="pago">{`$${precio}`}</p>
            </td>
            <td className="xa">
                <span className="ml ea ea2 ">Activo</span>
            </td>
            <td className="">
                <span className=" xa">{tipo}</span>
            </td>

        </tr>
  )
}
