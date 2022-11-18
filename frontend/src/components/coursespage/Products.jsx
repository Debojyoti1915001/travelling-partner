import React from "react";
import "./Products.css";

const Products = (props) => {
  return (
    <>
      <div className="product-main">
        <div className="product-img">
          <img src={props.src} alt="" />
        </div>
        <div className="product-intro">
          <div className="product-name">
            <h4>Learn Python: The Complete Python Programming Course</h4>
          </div>
          <div className="product-data">
            <div className="views">
              <img src="./images/eye.png" alt="" />
              <p className="space">1245 views</p>
            </div>
            <div className="lectures">
              <img src="./images/play.png" alt="" />
              <p className="space">12 Lectures</p>
            </div>
            <div className="durations">
              <img src="./images/time.png" alt="" />
              <p className="space">6hr 40min</p>
            </div>
          </div>
          <div className="product-line"></div>
          <div className="product-description">
            <div className="product-rate">
              <p className="rating">4.5 </p>
              <p className="rating-total">(134)</p>
            </div>
            <div className="product-price">
              <p className="discounted">Rs2600</p>
              <p className="original">Rs3600</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
