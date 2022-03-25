import React from "react";
import { Carousel } from "react-bootstrap";

import Gallery from "../Gallery/Gallery";
import Products from "../Products/Products";
import DisplayReview from "../Review/DisplayReview";

import Speciality from "../Speciality/Speciality";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/q1W6bRW/huracan-evo-exterior-right-front-three-quarter-2.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpaperaccess.com/full/294788.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/cT0d0YG/gate-family-hero-01-1.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {" "}
      <section className="about" id="about">
        <div className="row">
          <div className="image">
            <img src="https://thumbs.dreamstime.com/b/car-sale-logo-template-design-vector-eps-82119214.jpg" alt="" />
          </div>

          <div className="content">
            <h3>Speed is life && Life is Speed</h3>
            <p>
              We try to fullfill your hobby of speed. We always try to make you happy! Stay with us and support us we will change your life with speed!!!!
            </p>
            <p>We will serve you with your own choice onwards...............!!!!</p>
          </div>
        </div>
      </section>
      <Products></Products>
      <Speciality></Speciality>
      <Gallery></Gallery>
      <DisplayReview></DisplayReview>
    </div>
  );
};

export default Home;
