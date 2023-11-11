import "./Arrivals.css";
import Card from "./Card/Card";
import { Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Arrivals() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products/category/smartphones"
      );
      setData(response.data.products);
      console.log("data from axios", response.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1044 },
      items: 4,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1044, min: 668 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 668, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <section className=" p-5">
      <Container>
        <div className=" text-center ma-section-H p-5">
          <h1> NEW ARRIVALS</h1>
          <p className="text-secondary pt-3"> FIND THE PERFECT PHONE FOR YOU</p>
        </div>
      </Container>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={false}
        customTransition="transform 500ms ease-in-out"
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
      >
        {data.map((product) => (
          <div key={product.id}>
            <Card
              img={product.images[0]}
              h4={product.title}
              p={product.price}
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default Arrivals;
