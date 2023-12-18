const Price = () => {
    return (
        <div className="ml-5">
          <h2 className="sidebar-title price-title mt-5">Price </h2>
          <div>
          <label className="sidebar-label-container">
                <input type="radio" name="test2" />
                <span className="checkmark"></span>All 
                </label>
          <label className="sidebar-label-container">
                <input type="radio" name="test2" />
                <span className="checkmark"></span>$0 - $50 
                </label>
          <label className="sidebar-label-container">
                <input type="radio" name="test2" />
                <span className="checkmark"></span>$50 - $100 
                </label>
          <label className="sidebar-label-container">
                <input type="radio" name="test2" />
                <span className="checkmark"></span>$100 - $150 
                </label>
          <label className="sidebar-label-container">
                <input type="radio" name="test2" />
                <span className="checkmark"></span>over $150 
                </label>
        
          </div>
        </div>
    );
};

export default Price;