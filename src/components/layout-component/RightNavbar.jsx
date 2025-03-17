import FindUs from "../FindUs";
import Qzone from "../Qzone";
import SocialLogin from "../SocialLogin";

const RightNavbar = () => {
  return (
    <div className="space-y-10">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <Qzone></Qzone>
    </div>
  );
};

export default RightNavbar;
