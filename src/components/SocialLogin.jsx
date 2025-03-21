import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const SocialLogin = () => {
  const { signInWithGoogle, signInWithGithub } = useContext(AuthContext);

  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {});
  };

  const handleGithub = () => {
    signInWithGithub()
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {});
  };
  return (
    <div>
      <h2 className="font-bold mb-5 text-[20px]">Login With</h2>
      <div className="*:w-full space-y-2">
        <button onClick={handleGoogle} className="btn">
          <FaGoogle /> Login with Google
        </button>
        <button onClick={handleGithub} className="btn">
          <FaGithub /> Log in with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
