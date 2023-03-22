import React,{useEffect} from "react"
import { login } from "../../redux/actions/login";
import {useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';





export const Login = () =>{


    return (

        <>  
            <div className="form-container">
                <form action="">

                    <input type="email" placeholder="E-Mail" name="userEmail" />
                    <input type="password" placeholder="Contraseña" name="userPassword" />

                    <input type="submit" placeholder="Ingresar" />
                </form>


            </div>
        </>
    )
}