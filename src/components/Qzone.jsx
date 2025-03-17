import swimming from "../assets/swimming.png";
import classImg from "../assets/class.png";
import playGround from "../assets/playground.png";
import bg from "../assets/bg.png";
const Qzone = () => {
  return (
    <div>
      <div className="bg-[#F3F3F3] space-y-5 p-3 mb-5">
        <h2 className="text-[#403F3F] text-[20px] font-bold">Q-Zone</h2>
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
      <figure>
        <img src={bg} alt="" />
      </figure>
    </div>
  );
};

export default Qzone;
