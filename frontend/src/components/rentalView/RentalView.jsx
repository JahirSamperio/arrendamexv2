import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import { getRentalView } from '../../redux/actions/properties/getRentalView';
import { useDispatch, useSelector } from 'react-redux';


export const RentalView = () => {

    // Crear toda la logica en redux para obtener
    // la informacion del producto 

    // Traerlo desde la API

    //Mostrarla en un console.log();

    const dispatch = useDispatch();

    const { id_propertie } = useParams();
    

    const {success, error, rentalViewData} = useSelector((state) => state.properties.getById);

    const {name, precio} = rentalViewData;

    useEffect( () =>{
        dispatch(getRentalView(4));
    },[])       

    useEffect(() =>{
        console.log(rentalViewData);
    },[rentalViewData])
    

  return (
    <div>
       <p> josue : {name}</p>
       <p> josue : {precio}</p>
    </div>
  )
}
