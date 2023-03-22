import React,{useEffect} from "react"
import { newUser } from "../../redux/actions/newUser";

import {useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';


export function Register  () {

    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    const {loading,sucess,error,userData
    } = useSelector((state) => state.users.new);

    useEffect(() =>{
        console.log(userData); 
    },[userData])




    const handleRegistrernUser = (data)=>{

       const formData = {
            nombre: data.target.nombreUsuario.value,
            apellidos: data.target.apellidoUsuario.value,
            password: data.target.password.value,
            email: data.target.user.value,

        }

        console.log(formData);

        dispatch(newUser(formData));

        
    }

    return(
        <>
        <div>

            <form method="submit" onSubmit={(e)=>{
                e.preventDefault()
                handleRegistrernUser(e)
            }}>
                <input type="email" placeholder="usuario" name="user"/>
                <input type="password" name="password"  placeholder="Contraseña"/>
                <input type="text" name="nombreUsuario" placeholder="Su nombre(s)" />
                <input type="text" name="apellidoUsuario" placeholder="Sus apellido(s)" />


                <input type="submit" name="submit"  />
            </form>

            <input type="button" name="log" id="log" className="B" />

        </div>
        
        
        </>
    )
}