// icons
import { FaRegStar } from "react-icons/fa";
import { BsFillBagHeartFill } from "react-icons/bs";
const Card = () => {
    return (
        <section className="card">
        <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" className='card-img' alt="" />
        <div className="card-details">
            <h3 className="card-details">Shoe</h3>
            <section className="card-reviews">
            <FaRegStar className='rating-star'/>
            <FaRegStar className='rating-star'/>
            <FaRegStar className='rating-star'/>
            <FaRegStar className='rating-star'/>
            <span className="total-reviews">4</span>
            </section>
            <section className="card-price">
                <del>$300</del>$200
            </section>
            <div className="bag">
                <BsFillBagHeartFill className='bag-icon'/>
            </div>
        </div>
    </section>
    );
};

export default Card;