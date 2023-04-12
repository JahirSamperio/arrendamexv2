import  NavBar  from "../atoms/navBar/NavBar";
import ItemRow from "../atoms/itemRow/ItemRow";


import './home.css'

const Home = () =>{
    return(
        <>
            
            <NavBar/>
            
            <div className="item_container">
                <ItemRow/>
                <ItemRow/>
                <ItemRow/>
                <ItemRow/>

            </div>


            
            
            
        
        </>
    )
}



export default Home;