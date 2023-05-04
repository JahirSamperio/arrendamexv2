import axios from 'axios';
import {
    fetchDeleteAppointment,fetchDeleteAppointmentFailure,fetchDeleteAppointmentSuccess
} from "../../slices/appointments/deleteAppointmentSlice";

export const deleteAppointment = (ae) => async (dispatch) => {

    console.log(ae);

    try {

        dispatch(fetchDeleteAppointment());
        
        const {data} = await axios.delete(`http://localhost:3000/citas/deletecita?id_cita=${ae}`);
        console.log(data.response);
        dispatch(fetchDeleteAppointmentSuccess(data.response));

    } catch (error) {
        dispatch(fetchDeleteAppointmentFailure("Error al borrar la cita"));
    }
}