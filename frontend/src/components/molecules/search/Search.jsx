import React from 'react'
import {FaSearch} from 'react-icons/fa'


import './search.css';



export const Search = () => {
  return (
    <div className='search_container'>
        
        <div className="search_bar">
          <input type="text" className='search_input' placeholder='Buscar'/>
          <div className='search_btn'> <FaSearch className='search_btn_i'/> </div>       
        </div> 
        
        <div className="search_filters"> 
            <select name="tipo" id="inmobiliary_type" className='holas'>
              <option value="renta">Renta</option>
              <option value="venta">Venta</option>
            </select>

        </div>

        
    
    </div>
  )
}
