import axios from 'axios';

import {fetchNewProp,fetchNewPropFailure,fetchNewPropSuccess} from  '../../slices/properties/newPropSlice';


export const newProp = (datosPropiedad) => async (dispatch) => {

    console.log(datosPropiedad);

    try {
        dispatch(fetchNewProp());
        const {data} = await axios.post(`http://localhost:3000/inmueble/newInmueble`, datosPropiedad);
        console.log(response.data);
        dispatch(fetchNewPropSuccess(data.response));
    } catch (error) {
        dispatch(fetchNewPropFailure('error al agregar '));
    }

}