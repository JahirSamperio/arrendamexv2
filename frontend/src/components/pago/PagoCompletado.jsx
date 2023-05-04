import React from 'react'
import './pago.css'
import { AiFillCheckCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const PagoCompletado = () => {
    return (
        <div className='pago-cont'>

            <div className="pago-info">
                <h2 className='pago-h2'> Su pago ha sido efectuado <span className='ai-pago'><AiFillCheckCircle /></span> </h2>
                <div className='pago-link-cont'><Link to={'/Dashboard'} className='pago-link'>Regresar</Link></div>
            </div>

        </div>
    )
}
