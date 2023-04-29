import axios from 'axios';
import { fetchGetAllProps,fetchGetAllPropsFailure,fetchGetAllPropsSuccess } from '../../slices/properties/getAllPropsSlice';

export const getAllProps = () => async (dispatch) => {
    

    try {

        dispatch(fetchGetAllProps());
        
        const {data} = await axios.get('http://localhost:3000/inmueble/allInmuebles');
        console.log(data.response);
        dispatch(fetchGetAllPropsSuccess(data.response));

    } catch (error) {
        dispatch(fetchGetAllPropsFailure("Error al obtener inmuebles"));
    }
}