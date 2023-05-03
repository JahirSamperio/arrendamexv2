import './itemCard.css'

import { MdOutlineBedroomParent } from 'react-icons/md';
import { RiMoneyDollarBoxLine } from 'react-icons/ri';
import { useNavigate } from "react-router-dom"
import { BiArea } from 'react-icons/bi';
import { TiLocationOutline } from 'react-icons/ti';

export const ItemCard = ({
  id_propertie = "",
  name = "",
  cuartos = "-",
  superficie = "-",
  ubicacion = "-",
  costo = "-",
  vr = " -",
  imagen = " -",
}) => {

  const navigate = useNavigate();



  return (
    <div className='item_card'
      onClick={() => {
        navigate(`/Propertie/${id_propertie}`);
      }}>
      <div className='item_img'>
        <img className='item_img-img' src={imagen} alt="" />
      </div>
      <div className='item_information'>
        <p className='item_name'>{name} - <span style={{ textTransform: 'uppercase' }}>{vr}</span></p>
        <div className="item_info">
          <p className="cuartos"><MdOutlineBedroomParent />{cuartos}</p>
          <p className="superficie"><BiArea />{superficie}</p>
          <p className="ubicacion"><TiLocationOutline />{ubicacion}</p>
          <p className="costo"><RiMoneyDollarBoxLine /> {costo}</p>

        </div>

      </div>
    </div>
  )
}

import React from 'react'



