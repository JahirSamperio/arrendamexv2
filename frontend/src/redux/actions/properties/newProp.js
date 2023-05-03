import axios from 'axios';
import { fetchNewProp,fetchNewPropFailure,fetchNewPropSuccess } from '../../slices/properties/newPropSlice';


export const newProp = (datosPropiedad) => async (dispatch) => {

    console.log(datosPropiedad);
    const userID = localStorage.getItem('id');

    try {
        dispatch(fetchNewProp());
        const {data} = await axios.post(`http://localhost:3000/inmueble/newInmueble?id_usuario=${userID}`, datosPropiedad);
        console.log(data.response);
        dispatch(fetchNewPropSuccess(data.response));
    } catch (error) {
        dispatch(fetchNewPropFailure(error));
    }

}