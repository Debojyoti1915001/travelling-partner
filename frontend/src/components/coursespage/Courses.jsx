import React from "react";
import "./Courses.css";
import Navbar from "../Home/HomeNavbar/Navbar";
import Products from "./Products";
import Product from "./Product";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const Courses = () => {
  return (
    <>
      <Navbar />
      <div className="courses-head">
        <img src="./images/course-main.png" alt="" />
        <div className="course-heading">
          <h1>Courses</h1>
          <div className="course-inp">
            <div className="course-search">
              <div className="work-icon">
                <WorkOutlineIcon/>
              </div>
              <p>Search Courses</p>
            </div>
            <div className="search-btn">
              <button>SEARCH NOW</button>
            </div>
          </div>
        </div>
      </div>
      <div className="sort">
        <div className="sort-form">
          <p>Sort by</p>
          <div className="sortform">
            <select name="popular" id="popular">
              <option value="popular">Most Popular</option>
            </select>

            <select id="grade" name="grade">
              <option value="grade">Grade</option>
            </select>
          </div>
        </div>
        <div className="course-products">
          <Products src="./images/product1.png" />
          <Products src="./images/product2.png" />
          <Products src="./images/product3.png" />
          <Products src="./images/product3.png" />
        </div>
        <div className="course-products">
          <Product src="./images/product4.png" />
          <Product src="./images/product5.png" />
          <Product src="./images/product6.png" />
          <Product src="./images/product6.png" />
        </div>
      </div>
      <div className="bottom-line"></div>
      <div className="bottom">
        <div className="page">
          <p>Page 1 of 10</p>
        </div>
        <div className="pages">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
        </div>
        <div className="nxt-btn">
          <button>Next </button>
        </div>
      </div>
    </>
  );
};

export default Courses;
