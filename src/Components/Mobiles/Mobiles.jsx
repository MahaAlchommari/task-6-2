import "./Mobiles.css";
import { Container } from "react-bootstrap";
import img14 from "./../../assets/img/img14.webp";
import Accordion from "react-bootstrap/Accordion";
const Mobiles = () => {
  return (
    <section className="mobiles p-5">
      <Container>
        <div className=" text-center ma-section-H p-5">
          <h1 className="text-light">SEE WHY CUSTOMERS LOVE THE OUR MOBILES</h1>
          <p className="text-secondary pt-3">DESIGNED TO PERFECTIO</p>
        </div>
        <div className=" d-flex align-items-center ma-worp">
          <div className="w-100">
            <div className="customers-img">
              <img className="object-fit-cover w-100" src={img14} alt="" />
            </div>
          </div>
          <div className="w-100 mobiles">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0" className="bg-transparent">
                <Accordion.Header>NEW GRADIENT COLOR FINISHES</Accordion.Header>
                <Accordion.Body>
                  Rierem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui official.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="bg-transparent">
                <Accordion.Header>
                  FOUR-SIDED CURVED CERAMIC BODY
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui official.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="bg-transparent">
                <Accordion.Header>
                  4000MAH HIGH-CAPACITY BATTERY
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui official.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="bg-transparent">
                <Accordion.Header>FULLY HIDDEN CAMERA LENS</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui official.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Mobiles;
