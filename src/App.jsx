import React from "react";
import "./App.css";
// import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Innovative from "./Components/Innovative/Innovative";
import Different from "./Components/Different/Different";
import Footer from "./Components/Footer/Footer";
import Carousel from "./Components/Carousels/Carousels";
import Mobiles from "./Components/Mobiles/Mobiles";
import Arrivals from "./Components/Arrivals/Arrivals";
import Power from "./Components/Power/Power";
function App() {
  //

  return (
    <>
      <Nav />
      <Carousel />
      <Different />
      <Power />
      <Innovative />
      <Arrivals />
      <Mobiles />
      <Footer />
    </>
  );
}

export default App;
