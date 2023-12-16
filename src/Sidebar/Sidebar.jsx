import { TiShoppingCart } from "react-icons/ti";
import Category from "./Category";
import Price from "./Price";
import Colors from "./Colors";
const Sidebar = () => {
    return (
        <>
            <section className="w-[15%] fixed h-[100%] border-r border-[#e5e5e5] z-[3] flex items-center flex-col">
                <div className="">
                    <h1 className=""><TiShoppingCart /></h1>
                </div>
                <Category />
                <Price />
                <Colors />
            </section>
        </>
    );
};

export default Sidebar;