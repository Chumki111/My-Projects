import Products from "../Pages/Products/Products";
import Sidebar from "../Sidebar/Sidebar";
import SearchNav from "../Components/SearchNav";
import Recommended from "../Components/Recommended";


const Layout = () => {
    return (
        <div>
            
             <Sidebar/>
             
            <SearchNav/>
            <Recommended/>

            <Products/>
        </div>
    );
};

export default Layout;