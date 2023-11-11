import "./Power.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import CardsPo from "./CardsPo/CardsPo";
import imgMo from "./../../assets/img/hotspot_2934b3a5-cd7e-49be-b709-8269a17f7390.webp";
import img16 from "./../../assets/img/img16.webp";
import img17 from "./../../assets/img/img17.png";
import img18 from "./../../assets/img/img18.webp";
import img19 from "./../../assets/img/img19.webp";
const Power = () => {
  return (
    <Container className="ma-Power p-5 w-100 h-100">
      <div className=" text-center ma-section-H p-5">
        <h1> POSSIBILITIES. PERFORMANCE. POWER.</h1>
        <p className="text-secondary pt-3">FASTER PROCESSING WITH LESS POWER</p>
      </div>
      <div className="ma-PowerImg">
        <img src={imgMo} alt="mobile" className=" w-100 h-auto" />
        <div className="points position-absolute d-flex justify-content-around w-100">
          <div className="position-relative">
            <FontAwesomeIcon icon={faCircle} />
            <div>
              <CardsPo
                img={img16}
                h4="48 HRS BACKUP"
                p="Natoque penatibus et magnis dis parturient montes nascetur."
              />
            </div>
          </div>
          <div className="position-relative">
            <FontAwesomeIcon icon={faCircle} />
            <div>
              <CardsPo
                img={img17}
                h4="48 HRS BACKUP"
                p="Natoque penatibus et magnis dis parturient montes nascetur."
              />
            </div>
          </div>
          <div className="position-relative">
            <FontAwesomeIcon icon={faCircle} />
            <div>
              <CardsPo
                img={img18}
                h4="48 HRS BACKUP"
                p="Natoque penatibus et magnis dis parturient montes nascetur."
              />
            </div>
          </div>
          <div className="position-relative">
            <FontAwesomeIcon icon={faCircle} />
            <div>
              <CardsPo
                img={img19}
                h4="48 HRS BACKUP"
                p="Natoque penatibus et magnis dis parturient montes nascetur."
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Power;
