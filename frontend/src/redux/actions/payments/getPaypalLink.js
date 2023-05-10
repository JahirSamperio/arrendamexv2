import axios from 'axios';
import { fetchGetPaypalLink,fetchGetPaypalLinkFailure,fetchGetPaypalLinkSuccess} from '../../slices/payment/getPaypalLinkSlice';

export const getPaypalLink = (id_inmueble) => async (dispatch) => {
    
    const userID = localStorage.getItem('id');

    try {

        dispatch(fetchGetPaypalLink());
        
        
        const {data} = await axios.post(`http://localhost:3000/create-payment?id_inmueble=${id_inmueble}&id_usuario=${userID}`);
        dispatch(fetchGetPaypalLinkSuccess(data.response));

    } catch (error) {
        dispatch(fetchGetPaypalLinkFailure("Error al obtener el link de cobro"));
    }
}