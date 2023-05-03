import axios from 'axios';
import {
fetchGetAllProps,
fetchGetAllPropsFailure,
fetchGetAllPropsSuccess
} from "../../slices/properties/getAllPropsSlice";



export const getPropsByWord = (word) => async (dispatch) => {

    try {
        dispatch(fetchGetAllProps());
        const { data } = await axios.get(`http://localhost:3000/inmueble/getInmuebleByName?nombre=${word}`);
        dispatch(fetchGetAllPropsSuccess(data.response));
    } catch (error) {
        dispatch(fetchGetAllPropsFailure(error));
    }


}