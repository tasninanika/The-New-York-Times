import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Find Us On</h2>
      <div className="join join-vertical flex *:w-88 *:bg-base-100">
        <button className="btn join-item justify-start">
          <FaFacebook></FaFacebook> Facebook
        </button>
        <button className="btn join-item justify-start">
          <BsTwitter></BsTwitter> Twitter
        </button>
        <button className="btn join-item justify-start">
          <BsInstagram></BsInstagram> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
