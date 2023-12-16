

import Recommended from "../../Components/Recommended";
import SearchNav from "../../Components/SearchNav";
import Sidebar from "../../Sidebar/Sidebar";
import Products from "../Products/Products";

const AllShoes = () => {
    return (
        <>
        <Sidebar/>
            <SearchNav/>
            <Recommended/>

            <Products/>
        </>
    );
};

export default AllShoes;