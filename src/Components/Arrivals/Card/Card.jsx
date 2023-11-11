import "./Card.css";
const Card = (props) => {
  return (
    <div className=" p-3">
      <div className="card align-items-center">
        <img src={props.img} alt="phone " className=" w-100 ma-img" />
        <div className="w-100">
          <h4 className="text-center">{props.h4}</h4>
          <p className="fs-5 text-center">
            {props.p} $
            <del className="text-muted text-center">
              <small>87674</small>
            </del>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
