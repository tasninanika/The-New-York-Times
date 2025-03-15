const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Login Your Account
        </h2>
        <form>
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label">Email</label>
              <input
                type="email"
                className="input bg-[#F3F3F3] w-full border-none"
                placeholder="Enter your email address"
              />
              <label className="fieldset-label">Password</label>
              <input
                type="password"
                className="input bg-[#F3F3F3] w-full border-none"
                placeholder="Enter your password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn bg-[#403F3F] rounded-none mt-4 text-white">
                Login
              </button>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
