import "./CardPo.css";
const CardsPo = (props) => {
  return (
    <div className="ma-card">
      <img src={props.img} alt="" />
      <h4 className=" fw-bold">{props.h4}</h4>
      <p className=" text-black-50">{props.p}</p>
    </div>
  );
};

export default CardsPo;
