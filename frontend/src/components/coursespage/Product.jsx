import { React } from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";

const Product = (props) => {
  return (
    <>
      <div className="main-product">
        <div className="img-pro">
          <img src={props.src} alt="" />
        </div>
        <div className="intro-pro">
          <div className="name-pro">
            <h3>Learn Python: The Complete Python Programming Course</h3>
          </div>
        </div>
        <div className="star-rating">
          <div className="star">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <p className="rate-value">4.5</p>
          <p className="rate-no">(134)</p>
        </div>
        <div className="data-pro">
          <div className="view">
            <img src="./images/eye.png" alt="" />
            <p className="space">1245 views</p>
          </div>
          <div className="lecture">
            <img src="./images/play.png" alt="" />
            <p className="space">12 Lectures</p>
          </div>
          <div className="duration">
            <img src="./images/time.png" alt="" />
            <p className="space">6hr 40min</p>
          </div>
        </div>
        <div className="price-pro">
          <p className="discount">Rs2600</p>
          <p className="orig">Rs3600</p>
        </div>
      </div>
    </>
  );
};

export default Product;
