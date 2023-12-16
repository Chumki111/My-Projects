const Recommended = () => {
    return (
        <>
           <div>
           <h2 className="ml-[320px] my-5 text-xl">Recommended</h2>
           <div className="flex ml-[320px]">
            <button className="px-3 py-1 mr-1 bg-transparent border-2 border-[#ccc] rounded text-[#323232] cursor-pointer">All Products</button>
            <button className="px-3 py-1 mr-1 bg-transparent border-2 border-[#ccc] rounded text-[#323232] cursor-pointer">Nike</button>
            <button className="px-3 py-1 mr-1 bg-transparent border-2 border-[#ccc] rounded text-[#323232] cursor-pointer">Adidas</button>
            <button className="px-3 py-1 mr-1 bg-transparent border-2 border-[#ccc] rounded text-[#323232] cursor-pointer">Puma</button>
            <button className="px-3 py-1 mr-1 bg-transparent border-2 border-[#ccc] rounded text-[#323232] cursor-pointer">Vans</button>

           </div>
           </div>
        </>
    );
};

export default Recommended;