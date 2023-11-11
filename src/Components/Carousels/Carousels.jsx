import Carousel from "react-bootstrap/Carousel";
import img11 from "./../../assets/img/img11.webp";
import img12 from "./../../assets/img/img12.webp";
import img13 from "./../../assets/img/img13.webp";
import "./Carousels.css";
const Carousels = () => {
  return (
    <Carousel data-bs-theme="dark" className=" pt-5">
      <Carousel.Item>
        <img className="d-block w-100" src={img11} alt="First slide" />
        <Carousel.Caption className="ma-package">
          <h5 className="ma-h5">Zania Black Edition</h5>
          <p className="ma-p">CURVY BEVEL DUAL AUDIO</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img12} alt="Second slide" />
        <Carousel.Caption>
          <h5 className="ma-h5 text-dark">4K REDOLUTION</h5>
          <p className="ma-p text-dark">EXCLUSIVE STEEL FRAME</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img13} alt="Third slide" />
        <Carousel.Caption>
          <h5 className="ma-h5">DELTA ZERTIGA PROCESSOR</h5>
          <p className="ma-p">FULL SCREEN DISPLAY</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
