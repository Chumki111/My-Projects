import { TiShoppingCart } from "react-icons/ti";
import Category from "./Category/Category";
import Prices from "./Prices/Prices";
import Colors from "./Colors/Colors";
import './Sidebar.css'

const Sidebar = () => {
    return (

        <>

            <section className="sidebar">
                <div className="logo-container">
                    <h1><TiShoppingCart /></h1>
                </div>
                <Category />
                <Prices />

                <Colors />

            </section>

        </>




    );
};

export default Sidebar;