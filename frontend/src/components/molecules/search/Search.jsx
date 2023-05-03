import React, {useState}from 'react'
import { FaSearch } from 'react-icons/fa'
import { getPropsByWord } from '../../../redux/actions/properties/getPropsByWord'
import { useDispatch, useSelector } from 'react-redux'
import { getPropsBySpin } from '../../../redux/actions/properties/getPropsBySpin'


import './search.css';



export const Search = () => {

  const { loading } = useSelector((state) => state.properties.getAll);
  const dispatch = useDispatch();

  const handleFindProductsByWord = (word) => {
    dispatch(getPropsByWord(word));
  }

  const handleFindProductsBySpin = (vr) =>{
    dispatch(getPropsBySpin(vr));
  }



  return (
    <div className='search_container'>

      <form className="search_bar" onSubmit={(e) => {
        e.preventDefault();
        handleFindProductsByWord(e.target.wordS.value);
      }}>
        <input type="text" className='search_input' placeholder='Buscar' name='wordS' />
        <button className='search_btn' type='submit' disabled={loading ? true : false}> <FaSearch className='search_btn_i' /></button>
      </form>

      <form className="search_filters" onSubmit={(e) =>{
        e.preventDefault();
        handleFindProductsBySpin(e.target.spin.value);
      }}>
        <label htmlFor="spin"> Venta/Renta</label>
        <input id="propSpin" name='spin' type="text" list="spin" className="apf-i"/>
        <datalist id="spin">
          <option value="venta">Venta</option>
          <option value="renta">Renta</option>
        </datalist>

        <button type='submit' className='apply-btn-s'> Aplicar</button>
      </form>



    </div>
  )
}
