import './pf.css'

export const PerfilForm = () => {
  return (
    <div className='pf-container'>

      <form action="" className='pf'>

        <div className="pf-names">

          <div className="pf-campo">
            <label htmlFor="userFName">Nombre(s)</label>
            <input type="text" name="userFName" id="" placeholder='Nombre(s) de usuario' />
          </div>

          <div className="pf-campo">
            <label htmlFor="userLName">Apellido(s)</label>
            <input type="text" name='userLName' id='' placeholder='Apellido(s) del usuario' />
          </div>


        </div>

        <div className="pf-phone">
            
        </div>


      </form>

    </div>
  )
}