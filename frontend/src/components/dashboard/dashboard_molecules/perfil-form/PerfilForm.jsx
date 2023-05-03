import { useDispatch, useSelector } from 'react-redux'
import './pf.css'

import { editUser } from '../../../../redux/actions/users/editUser';

export const PerfilForm = () => {
  
  const dispatch = useDispatch();

  const {loading,success, error, dataUserEdit} = useSelector((state) => state.users.edit);

  const handleEditUser = (data) =>{

      const userInfo = {
        name: data.userFName.target.value,
        sname: data.userLName.target.value,
        phone: data.userPhoneN.target.value

      }

      console.log(userInfo);
      dispatch(editUser(userInfo));

  }


  return (
    <div className='pf-container card'>
      
      <div className="card-header"><h6>Editar informacion</h6></div>

      <form action="" className='pf card' onSubmit={(e) =>{
            e.preventDefault();
            handleEditUser(e);
          }}>

        <div className="pf-names">

          <div className="pf-campo">
            <label htmlFor="userFName" className='pf-campo-label'>Nombre(s) </label>
            <input type="text" name="userFName" id="" placeholder='Nombre(s) de usuario' className='pf-campo-input' value={localStorage.getItem('name')} />
          </div>

          <div className="pf-campo">
            <label htmlFor="userLName" className='pf-campo-label'>Apellido(s) </label>
            <input type="text" name='userLName' id='' placeholder='Apellido(s) del usuario' className='pf-campo-input' value={localStorage.getItem('sname')} />
          </div>


        </div>

        <div className="pf-phone">
            <div className="pf-campo">
              <label htmlFor="userPhonN" className='pf-campo-label'>Telefono </label>
              <input type="text" name='userPhoneN' placeholder='1234567890' className='pf-campo-input pciP' value={localStorage.getItem('telefono')}/>
            </div>
        </div>

        <div className="pf-direction">

            <div className="pf-campo">
              <label htmlFor="userDirection" className='pf-campo-label'>Domicilio </label>
              <input type="text" className='pf-campo-input direc' placeholder='Av. Siempre viva #100 Col. El paso Poblado, Estado.'  />
            </div>

        </div>

        <div className="pf-submit">
          <input type="submit" value='Confirmar' className='pf-submit-btn' />
        </div>


      </form>

    </div>
  )
}