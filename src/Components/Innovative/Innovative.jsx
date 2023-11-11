import img1 from "./../../assets/img/img6.png";
import img2 from "./../../assets/img/img5.webp";
import img3 from "./../../assets/img/img4.webp";
import img4 from "./../../assets/img/img3.webp";
import img5 from "./../../assets/img/img2.webp";
import img6 from "./../../assets/img/img1.png";
import img7 from "./../../assets/img/center-img_eb064c43-efaf-4d56-90df-f89acfdf85fe.webp";

const Innovative = () => {
  return (
    <section>
      <div className=" container ma-Innovative mt-5">
        <div>
          <h2 className="text-center">INNOVATIVE QUALITIES & FEATURES</h2>
          <p className="text-secondary text-center">SHOW YOURS TO THE WORLD</p>
        </div>
        <div className="pt-5">
          <div className=" row">
            <div className="col-lg-4">
              <div className=" d-flex align-items-center pb-5">
                <div className=" p-4">
                  <h4>INTELLIGENT PROCESSOR</h4>
                  <p>
                    Tellus in hac habitasse platea dictumst vestibulum rhoncus
                    srd mana erti qeueri
                  </p>
                </div>
                <img src={img1} alt="icon" />
              </div>

              <div className="d-flex align-items-center pb-5">
                <div className=" p-4">
                  <h4>INTELLIGENT PROCESSOR</h4>
                  <p>
                    Tellus in hac habitasse platea dictumst vestibulum rhoncus
                    srd mana erti qeueri
                  </p>
                </div>
                <img src={img2} alt="icon" />
              </div>
              <div className="d-flex align-items-center pb-5">
                <div className="p-4">
                  <h4>INTELLIGENT PROCESSOR</h4>
                  <p>
                    Tellus in hac habitasse platea dictumst vestibulum rhoncus
                    srd mana erti qeueri
                  </p>
                </div>
                <img src={img3} alt="icon" />
              </div>
            </div>
            <div className="col-lg-4">
              <img src={img7} alt="phone" className="ma-InnovativeImage" />
            </div>
            <div className="col-lg-4">
              <div className="d-flex align-items-center pb-5 ">
                <img src={img4} alt="icon" />
                <div className="p-4">
                  <h4>INTELLIGENT PROCESSOR</h4>
                  <p>
                    Tellus in hac habitasse platea dictumst vestibulum rhoncus
                    srd mana erti qeueri
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center pb-5">
                <img src={img5} alt="icon" />
                <div className="p-4">
                  <h4>INTELLIGENT PROCESSOR</h4>
                  <p>
                    Tellus in hac habitasse platea dictumst vestibulum rhoncus
                    srd mana erti qeueri
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center pb-5 ">
                <img src={img6} alt="icon" />
                <div className="p-4">
                  <h5>INTELLIGENT PROCESSOR</h5>
                  <p>
                    Tellus in hac habitasse platea dictumst vestibulum rhoncus
                    srd mana erti qeueri
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovative;
