import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { FaGoogle } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Login = () => {
  const { signInUser, signInWithGoogle } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  //console.log(location);

  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        event.target.reset();
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-pink-100  w-full mx-auto max-w-sm shrink-0 shadow-2xl border-2 border-pink-800 mt-20">
      <div className="card-body">
        <h1 className="font-bold text-center text-pink-800">
          <TypeAnimation
            sequence={["Login", 1000, "Login to explore more !!", 1000]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
        </h1>
        <form onSubmit={handleLogIn}>
          <fieldset className="fieldset mt-6">
            <label className="label text-gray-600 font-semibold text-lg">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input rounded-2xl focus:border-2 border-pink-600 focus:outline-gray-200"
              placeholder="Email"
            />

            <label className="label text-gray-600 font-semibold text-lg mt-5">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="input rounded-2xl focus:border-2 border-pink-600 focus:outline-gray-200 mb-5"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover  text-pink-800">Forgot password?</a>
            </div>
            <button className="btn text-white mt-4 rounded-2xl bg-pink-800">
              Login
            </button>
          </fieldset>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white rounded-2xl text-black border-2 border-"
        >
          <FaGoogle />
          Login with Google
        </button>
        <p className="text-center">
          New to our website? Please{" "}
          <Link
            className="text-blue-500 hover:text-blue-800"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
