import React, { useEffect, useState } from "react"
import { loginUser } from "../../redux/actions/loginUser";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './login.css';




export const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { loading,success, error, loginData} = useSelector((state) => state.users.login);


    const handleUserLogin = (data) => {
        console.log(data);
        const loginData = {
            email: data.target.userEmail.value,
            password: data.target.userPassword.value,
        }

        dispatch(loginUser(loginData));
    }


    useEffect(() => {
        console.log(`${loginData}`);
    }, [error])

    useEffect(() => {
        console.log(` success: ${success}`);
        if (success == true) {

            localStorage.setItem('names', names);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            localStorage.setItem('telefono', telefono);

            navigate('/Home');

        }

    }, [success])

    return (

        <>

            <form className="formv2" method="submit" onSubmit={
                (e) => {
                    e.preventDefault();
                    handleUserLogin(e);
                }}>
                <h2 className="form-title">Inicio de sesión</h2>
                <p className="form-p">¿Aún no tiene una cuenta?<span className="p-span"> Click en el enlace de arriba</span></p>
                <div className="form-container">
                    <div className="formulario" method="submit">

                        <div className="form_group">
                            <input type="email" id="email" name="userEmail" className="form_input" placeholder=" " />
                            <label htmlFor="email" className="form_label">Email</label>
                            <span className="form_line"></span>
                        </div>

                        <div className="form_group">
                            <input type="password" id="pass" name="userPassword" className="form_input" placeholder=" " />
                            <label htmlFor="pass" className="form_label">Contraseña</label>
                            <span className="form_line"></span>
                        </div>


                        <input type="submit" className="form_submit" placeholder="Ingresar" />
                    </div>
                </div>


            </form>
        </>
    )
}