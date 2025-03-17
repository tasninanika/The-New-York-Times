import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-5 text-[20px]">Login With</h2>
      <div className="*:w-full space-y-2">
        <button className="btn">
          <FaGoogle /> Login with Google
        </button>
        <button className="btn">
          <FaGithub /> Log in with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
