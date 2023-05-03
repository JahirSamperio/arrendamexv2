import axios from 'axios';
import { fetchGetRentalViewProp,fetchGetRentalViewPropFailure,fetchGetRentalViewPropSuccess } from '../../slices/properties/getRentalViewPropsSlice';

export const getRentalView = (id_inmueble) => async (dispatch) => {
    
    try {

        dispatch(fetchGetRentalViewProp());
            
             const {data} = await axios.get(`http://localhost:3000/inmueble/profile?id_inmueble=${id_inmueble}`);
             dispatch(fetchGetRentalViewPropSuccess(data.response));
    
         } catch (error) {
             dispatch(fetchGetRentalViewPropFailure("Error al obtener los datos de la propiedad"));
         }

    // const inmuebleData = {
    //     name: 'Josue puto',
    //     descripcion: 'es un maldito racista',
    //     rentaVenta: 'Renta',
    //     precio: '1',
    //     imagen: ''

    // }

   

    // dispatch(fetchGetRentalViewProp());
    // dispatch(fetchGetRentalViewPropSuccess(inmuebleData));

   
}