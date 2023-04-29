import axios from 'axios';
import { fetchGetRentalViewProp,fetchGetRentalViewPropFailure,fetchGetRentalViewPropSuccess } from '../../slices/properties/getRentalViewPropsSlice';

export const getRentalView = (id_inmueble) => async (dispatch) => {
    

    const inmuebleData = {
        name: 'Josue puto',
        descripcion: 'es un maldito racista',
        rentaVenta: 'Renta',
        precio: '1',
        imagen: ''

    }

   

    dispatch(fetchGetRentalViewProp());
    dispatch(fetchGetRentalViewPropSuccess(inmuebleData));

    // try {

    //     dispatch(fetchGetRentalViewProp());
        
    //     const {data} = await axios.get('http://localhost:3000/inmueble/getInmuebleById', id_inmueble);
    //     console.log(data.response);
    //     dispatch(fetchGetRentalViewPropSuccess(data.response));

    // } catch (error) {
    //     dispatch(fetchGetRentalViewPropFailure("Error al obtener los datos de la propiedad"));
    // }
}