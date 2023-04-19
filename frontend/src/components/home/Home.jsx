import  NavBar  from "../atoms/navBar/NavBar";
import ItemRow from "../atoms/itemRow/ItemRow";
import { Search } from "../molecules/search/Search";
import { Footer } from "../atoms/footer/Footer";

import './home.css'


const Home = () =>{
    return(
        <>
            
            <NavBar/>
            <Search/>
            <div className="item_container">
                <ItemRow/>
                <ItemRow/>
                <ItemRow/>
            </div>
            <Footer/>

            
            
            
        
        </>
    )
}



export default Home;