import swimming from "../assets/swimming.png";
import classImg from "../assets/class.png";
import playGround from "../assets/playground.png";
const Qzone = () => {
  return (
    <div>
      <h2>Q-Zone</h2>
      <figure>
        <img src={swimming} alt="" />
      </figure>
      <figure>
        <img src={classImg} alt="" />
      </figure>
      <figure>
        <img src={playGround} alt="" />
      </figure>
    </div>
  );
};

export default Qzone;
