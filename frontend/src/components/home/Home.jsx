
import NavBar from "../atoms/navBar/NavBar";
import { ItemCard } from "../atoms/itemRow/ItemRow";
import { Search } from "../molecules/search/Search";
import { Footer } from "../atoms/footer/Footer";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";

import { getAllProps } from "../../redux/actions/properties/getAllProps";

import './home.css'




const Home = () => {

    const dispatch = useDispatch();



    const { sucess, error, propData } = useSelector((state) => state.properties.getAll);

    useEffect(() => {
        dispatch(getAllProps());
    }, [])

    useEffect(() => {
        console.log(propData);
    }, [propData])

    return (
        <>

            <NavBar />
            <div className="search-cont">
                <Search />
            </div>

            <div className="item_container">
                {
                    propData.map((element, index) => {

                        return (<div key={index}>
                            <ItemCard

                                id_propertie={element.id}
                                name={element.nombre}
                                costo={element.precio}
                                cuartos={element.num_recamaras}
                                ubicacion={element.municipio}
                                superficie={element.superficie_total}
                                vr={element.renta_venta}
                                imagen={element.pathImage}
                            />
                        </div>

                        )
                    })}
            </div>

            {error == true ? <h1>Error al traer</h1> : <></>}
            <Footer />





        </>
    )
}



export default Home;