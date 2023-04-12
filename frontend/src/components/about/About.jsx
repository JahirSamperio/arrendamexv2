import NavBar from "../atoms/navBar/NavBar";
import './About.css'

const About = () =>{
    

    return(
        <>
            <NavBar/>
            <div className="container">
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
                        <input type="email" placeholder="E-Mail"/>
                        <input type="number"  placeholder="ID"/>
                    </div>
                    <div className="contact_info">

                    </div>
                </div>
            </div>
        </>
    )
}

export default About;