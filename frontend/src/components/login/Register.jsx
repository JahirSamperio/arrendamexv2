import React,{useEffect} from "react"
import { newUser } from "../../redux/actions/users/newUser";
import {useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import './login.css'


export function Register  () {

    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    const {loading,success,error,userData } = useSelector((state) => state.users.new);

    
    useEffect(() =>{
        console.log(userData); 
    },[userData])




    const handleRegisternUser = (data)=>{

       const formData = {
            nombre: data.target.nombreUsuario.value,
            apellidos: data.target.apellidoUsuario.value,
            password: data.target.password.value,
            email: data.target.user.value,
            telefono: data.target.phoneNum.value
        }

        console.log(formData);

        dispatch(newUser(formData));

        
    }

    useEffect(() => {

        if(success) {
            alert('Usuario creado correctamente');
            navigate('/');
        }

    }, [success])

    return(
        <>
        

            <form className="formv2" method="submit" onSubmit={(e)=>{
                e.preventDefault()
                handleRegisternUser(e)
            }}>
                <div className="formulario">
                    <h2 className="form-title">Registro</h2>
                    <p className="form-p">¿Ya tiene una cuenta? <span className="p-span">Click en el enlace de arriba</span> </p>

                <div className="form_group">
                    
                    <input type="text" name="nombreUsuario" placeholder=" "  className="form_input" />
                    <label htmlFor="nombreUsuario" className="form_label">Nombre</label>
                    <span className="form_line"></span>
                </div>

                <div className="form_group">
                    <input type="text" name="apellidoUsuario" placeholder=" "  className="form_input"/>
                    <label htmlFor="apellidoUsuario" className="form_label">Apellidos</label>
                    <span className="form_line"></span>
                </div>


                <div className="form_group">
                    <input type="tel" placeholder=" " name="phoneNum" className="form_input"/>
                    <label htmlFor="phoneNum" className="form_label">Télefono</label>
                    <span className="form_line"></span>
                </div> 
              
                <div className="form_group">
                    <input type="email" placeholder=" " name="user" className="form_input"/>
                    <label htmlFor="user" className="form_label">Email</label>
                    <span className="form_line"></span>
                </div> 

                <div className="form_group">
                  <input type="password" name="password"  placeholder=" " className="form_input"/>
                  <label htmlFor="password" className="form_label">Contraseña</label>
                  <span className="form_line"></span>
                </div>
                

                <input type="submit" name="submit"  className="form_submit"  />
                </div>
                {error ? <h2>{error}</h2> : <></> }

            </form>
        
        </>
    )
}