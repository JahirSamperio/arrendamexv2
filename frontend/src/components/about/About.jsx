import NavBar from "../atoms/navBar/NavBar";
import './About.css'

const About = () =>{
    

    return(
        <>
            <NavBar/>
            <div className="about_container">
                <div className="about">
                    <div className="img"></div>
                    <div className="about_text">
                        <p className="about_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis mauris suscipit, venenatis arcu in, placerat arcu. Morbi blandit dignissim neque, in egestas tellus lacinia sit amet. Sed et tortor ut ipsum dapibus ornare. Curabitur imperdiet eros est, vitae viverra eros mattis at.</p>
                        <br />
                        <p className="about_p"> Aenean posuere justo vel eros dapibus eleifend. Praesent tincidunt velit non erat congue, ac posuere ex venenatis. Suspendisse aliquam mauris vitae ultrices consequat.</p>
                    </div>
                    
                </div>

                <div className="contact">
                    <div className="contact_form">
                        <input type="email" placeholder="E-Mail" id="contact_email" className="contact_email form_input2"/>
                        <input type="number"  placeholder="ID de usuario" id="contact_id" className="contact_id form_input2"/>
                        <input type="text" placeholder="Su mensaje aqui" id="contact_message" className="contact_message"/>
                        <input type="submit"  id="contact_submit" className="contact_submit"/>
                    </div>
                    <div className="contact_info">
                            <h3 className="contact_title">Informacion de contacto</h3>
                            <p className="contact_text">Numero telefonico: 7761039469</p>
                            <p className="contact_text"> Correo de contacto: correo@correo.com</p>
                            <p className="contact_text">Ubicacion: Calle ficticia #100 Col.Lomas, Poblado, Estado.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;