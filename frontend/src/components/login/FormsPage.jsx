import { Login } from "./Login";
import { Register } from "./Register";
import './formsPage.css';
import './login.css'
import { useState } from "react";




const FormsPage = () =>{


    const [formType,setFormType] =useState(1);

    const handleLoginForm= () =>{
        setFormType(1);
    }

    const handleRegisterForm = () =>{
        setFormType(2);
    }
    
    return(
        
            <div className="forms_page">
                <div className="logo_section">
                    <p>hola</p>
                </div>

                <div className="form_section">
                    <div className="nav-">                    

                        <ul className="nav-links">
                            <li className="nav-link">Inicio</li>
                            <li className="nav-link">Acerca de</li>
                        </ul>

                        <h2 className="k">&#9776;</h2>

                    </div>
                    
                    <div className="form2">
                        <p className="form2-p"><a className="form_link" onClick={handleLoginForm}>Inicie sesión</a>  o <a className="form_link" onClick={handleRegisterForm}>registrese</a>  en EasyRentals</p>
                      <div className="formulario-">
                        {formType === 1 ?(<Login/>):(<Register/>)}
                      </div>
                    </div>


                </div>

            </div>
        
        
        
    )
}


export default FormsPage;