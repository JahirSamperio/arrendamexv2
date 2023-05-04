import axios from 'axios';
import {
    fetchAcceptAppointment,fetchAcceptAppointmentFailure,fetchAcceptAppointmentSuccess
} from "../../slices/appointments/acceptAppointmentSlice";

export const acceptAppointment = (dataForm) => async (dispatch) => {

    console.log(dataForm);

    try {

        dispatch(fetchAcceptAppointment());
        
        const {data} = await axios.post('http://localhost:3000/citas/sendcita', dataForm);
        console.log(data.response);
        dispatch(fetchAcceptAppointmentSuccess(data.response));

    } catch (error) {
        dispatch(fetchAcceptAppointmentFailure("Error al aceptar la cita"));
    }
}