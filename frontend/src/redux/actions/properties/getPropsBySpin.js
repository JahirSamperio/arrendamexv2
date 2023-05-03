import axios from 'axios';
import {
fetchGetAllProps,
fetchGetAllPropsFailure,
fetchGetAllPropsSuccess
} from "../../slices/properties/getAllPropsSlice";



export const getPropsBySpin = (vr) => async (dispatch) => {

    try {
        dispatch(fetchGetAllProps());
        const { data } = await axios.get(`http://localhost:3000/inmueble/searchInmuebleByRenta?renta_venta=${vr}`);
        dispatch(fetchGetAllPropsSuccess(data.response));
    } catch (error) {
        dispatch(fetchGetAllPropsFailure(error));
    }


}