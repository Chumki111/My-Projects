import { TiShoppingCart } from "react-icons/ti";
import Category from "./Category";
import Price from "./Price";
import Colors from "./Colors";
const Sidebar = () => {
    return (
        <>
            <section className="w-[15%] fixed max-h-screen border-r border-[#e5e5e5] z-[3] flex items-center flex-col">
                <div className="mb-16">
                    <h1 className="mt-5 text-2xl"><TiShoppingCart /></h1>
                </div>
                <Category />
                <Price />
                <Colors />
            </section>
        </>
    );
};

export default Sidebar;