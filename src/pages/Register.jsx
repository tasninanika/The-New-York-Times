import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 5) {
      setError({ ...error, name: "must be more than 5 character long" });
      return;
    }
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
          <h2 className="text-2xl font-semibold text-center">
            Register Your Account
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="card-body">
              <fieldset className="fieldset gap-2">
                <label className="fieldset-label text-[#403F3F] text-sm font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="input bg-[#F3F3F3] w-full border-none mb-4"
                  placeholder="Enter your name"
                />
                {error.name && (
                  <label className="label text-xs text-red-500">
                    {error.name}
                  </label>
                )}
                <label className="fieldset-label text-[#403F3F] text-sm font-semibold">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  className="input bg-[#F3F3F3] w-full border-none mb-4"
                  placeholder="Enter your photo url"
                />
                <label className="fieldset-label text-[#403F3F] text-sm font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="input bg-[#F3F3F3] w-full border-none mb-4"
                  placeholder="Enter your email address"
                />
                <label className="fieldset-label text-[#403F3F] text-sm font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="input bg-[#F3F3F3] w-full border-none"
                  placeholder="Enter your password"
                />
                <div>
                  <label className="fieldset-label *:font-semibold mt-2">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox"
                    />
                    Accept{" "}
                    <span className="text-[#706F6F]">Term & Conditions</span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn bg-[#403F3F] rounded-none mt-4 text-white"
                >
                  Register
                </button>
              </fieldset>
            </div>
          </form>
          <p className="text-xs text-center font-semibold text-[#706F6F]">
            Already Have An Account ?{" "}
            <Link to="/auth/login" className="text-orange-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
