import './itemCard.css'

import {MdOutlineBedroomParent} from 'react-icons/md';
import {RiMoneyDollarBoxLine} from 'react-icons/ri';
import {GrMapLocation} from 'react-icons/gr';
import {BiArea} from 'react-icons/bi';

const ItemCard = () => {
  return (
    <div className='item_card'>
        <div className='item_img'></div>
        <div className='item_information'>
            <p className='item_name'>Nombre</p>
            <div className="item_info">
                <p className="cuartos"><MdOutlineBedroomParent/> ---</p>
                <p className="superficie"><BiArea/> ---</p>
                <p className="ubicacion"><GrMapLocation/> ---</p>
                <p className="costo"><RiMoneyDollarBoxLine/> ---</p>
            </div>
        </div>
    </div>
  )
}

import React from 'react'

export const ItemRow = () => {
  return (
    <div className="card_row">
     <ItemCard/>
     <ItemCard/>
     <ItemCard/>
     <ItemCard/>
     <ItemCard/>
    </div>
  )
}



export default ItemRow;