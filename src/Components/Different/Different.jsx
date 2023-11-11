import "./Different.css";
import img8 from "./../../assets/img/img8.webp";
import img9 from "./../../assets/img/img9.webp";
import img10 from "./../../assets/img/img10.webp";

const Different = () => {
  return (
    <section className=" p-5">
      <div className="container">
        <div className=" text-center ma-section-H">
          <h1>WHAT MAKES THE ESSENTIAL DIFFERENT?</h1>
          <p className="text-secondary pt-3">
            EXPERIENCE HIGH PERFORMANCE AND SECURE
          </p>
        </div>
        <div className="main-performance pt-5">
          <div className=" d-flex align-items-center justify-content-evenly flex-wrap text-center">
            <div className="ma-all-package">
              <img className="mb-5" src={img8} alt="card" />
              <p className=" m-0">PERFECT CUT</p>
              <h4>DUAL CAMERA</h4>
              <p className="text-secondary">
                Tristique senectus et netus et malesuada ant reiet fames.
              </p>
            </div>
            <div className="ma-all-package">
              <img className="mb-5" src={img9} alt="card" />
              <p className=" m-0">PERFECT CUT</p>
              <h4>DUAL CAMERA</h4>
              <p className="text-secondary">
                Tristique senectus et netus et malesuada ant reiet fames.
              </p>
            </div>
            <div className="ma-all-package">
              <img className="mb-5" src={img10} alt="card" />
              <p className=" m-0">PERFECT CUT</p>
              <h4>DUAL CAMERA</h4>
              <p className=" text-secondary">
                Tristique senectus et netus et malesuada ant reiet fames.s{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Different;
