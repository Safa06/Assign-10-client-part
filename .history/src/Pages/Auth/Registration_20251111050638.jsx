import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { TypeAnimation } from "react-type-animation";

const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const displayName = event.target.displayName.value;
    const photoURL = event.target.photoURL.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    toast.loading("Creating user...", { id: "create-user" });

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(displayName, photoURL);
        toast.success("User created successfully!", { id: "create-user" });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message, { id: "create-user" });
      });
  };

  const handleGoogleSignIn = () => {
    toast.loading("Creating user...", { id: "create-user" });
    signInWithGoogle()
      .then((result) => {
        toast.success("User created successfully!", { id: "create-user" });
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message, { id: "create-user" });
      });
  };

  return (
    <div className="card bg-pink-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl border-2 border-pink-800">
      <div className="card-body">
        <h1 className="text-pink-800 font-bold text-center">
          <TypeAnimation
            sequence={["Register", 1000, "Register & know more !!", 1000]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
        </h1>
        <form onSubmit={handleRegister} className="w-11/12 mx-auto">
          <fieldset className="fieldset mt-6">
            {/* email field */}
            <label className="label text-lg text-gray-600 font-semibold">
              Name
            </label>
            <input
              type="text"
              name="displayName"
              className="input rounded-2xl focus:border-2 border-pink-800 focus:outline-gray-200 mb-5"
              placeholder="Name"
            />

            <label className="label text-lg text-gray-600 font-semibold">
              PhotoURL
            </label>
            <input
              type="text"
              name="photoURL"
              className="input rounded-2xl focus:border-2 border-pink-800 focus:outline-gray-200 mb-5"
              placeholder="Photo URL"
            />
            {/* email field */}
            <label className="label text-lg text-gray-600 font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input rounded-2xl focus:border-2 border-pink-800 focus:outline-gray-200 mb-5"
              placeholder="Email"
            />
            {/* password field */}
            <label className="label text-lg text-gray-600 font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="input rounded-2xl focus:border-2 border-pink-800 focus:outline-gray-200 mb-5"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover text-pink-800">Forgot password?</a>
            </div>
            <button className="btn text-white mt-4 rounded-2xl bg-pink-800">
              Register
            </button>
          </fieldset>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white rounded-2xl text-black border-2 border-green-600"
        >
          <FcGoogle />
          Login with Google
        </button>
        <p className="text-center">
          Already have an account? Please{" "}
          <Link className="text-blue-500 hover:text-red-600" to="/auth/login">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
