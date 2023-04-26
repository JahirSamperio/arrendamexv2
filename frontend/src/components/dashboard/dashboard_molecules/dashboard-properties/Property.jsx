import React from 'react'
import './property.css'


export const Property = () => {
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
                <span className="ml ea ea2 ">Activo</span>
            </td>
            <td className="">
                <span className=" xa">Tipo inmueble</span>
            </td>

        </tr>
  )
}
