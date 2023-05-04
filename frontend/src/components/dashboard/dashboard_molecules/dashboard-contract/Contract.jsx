import './contract.css';


export const Contract = ({nombre='',correo='',nombreInmueble='',tipoIn='',fecha=''}) => {

    const fechaNueva = fecha.substring(0,10);

    return (
        <tr>
            <td>
                <div className="">
                    <div className="">
                        <h6 className="">{nombre}</h6>
                        <p className="">{correo}</p>
                    </div>
                </div>
            </td>
            <td className=''>
                <p className="ae">{nombreInmueble}</p>
                <p className="ae">{tipoIn}</p>
            </td>
            <td className="ae">
                <span className="ml ea">Activo</span>
            </td>
          
            <td className="ml">
                <span className="ml ae">{fechaNueva}</span>
            </td>

        </tr>
    )
}
