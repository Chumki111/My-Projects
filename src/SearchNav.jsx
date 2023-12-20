import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShopping } from "react-icons/ai";
import { FaUsersCog } from "react-icons/fa";
const SearchNav = () => {
    return (
        <>
           <nav className="flex border-b border-[#f3f3f3] justify-around items-center p-5 z-[999] ml-[2rem]">
                <div className="nav-container">
                    <input type="text" className="translate bg-[#f7f6f6] px-3 py-4 rounded relative w-[15rem] border-none outline-none mr-5" placeholder="Inter your search shoes" />
                </div>
                <div className="flex">
                    <a href="" >
                        <FaRegHeart className="w-[1.5rem] h-[1.5rem] ml-[2rem]" />
                    </a>
                    <a href="">
                        <AiOutlineShopping className="w-[1.5rem] h-[1.5rem] ml-[2rem]" />
                    </a>

                    <a href="">
                        <FaUsersCog className="w-[1.5rem] h-[1.5rem] ml-[2rem]" />
                    </a>
                </div>

            </nav> 
        </>
    );
};

export default SearchNav;