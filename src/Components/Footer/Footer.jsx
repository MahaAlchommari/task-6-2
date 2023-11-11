import "./Footer.css";
import FooterContent from "./FooterContent/FooterContent";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer>
      <Container className="text-light text-center p-5">
        <h6 className="pb-3">SUBSCRIBE NOW</h6>
        <h2 className="pb-3">GET OUR UPDATES ALWAYS FAST</h2>
        <p className="pb-3">YOUR PERSONAL DATA WILL ALWAYS BE SAFE</p>
        <div className="ma-input mb-5 m-auto position-relative">
          <input
            type="text"
            id="input"
            placeholder="Enter your email id"
            className="form-control rounded-pill"
            aria-label="Recipient's username"
            aria-describedby="basic-addon"
          />
          <button className="rounded-circle position-absolute">
            <FontAwesomeIcon icon={faAngleRight} style={{ color: "#fcfcfc" }} />
          </button>
        </div>
        <FooterContent />
      </Container>
    </footer>
  );
};

export default Footer;
