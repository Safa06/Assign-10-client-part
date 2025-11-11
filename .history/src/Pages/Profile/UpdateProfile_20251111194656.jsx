import React, { useState, use } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { user, updateUserProfile } = use(AuthContext);
  const [name, setName] = useState(user.displayName || "");
  //const [photoURL, setPhotoURL] = useState(user.photoURL || "");
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile({ displayName: name });
      toast.success("Profile updated successfully!");
      setTimeout(() => navigate("/profile"), 1000);
    } catch (err) {
      toast.error("Something is wrong!", err.message);
    }
  };

  return (
    <div className="mt-10 w-1/2 mx-auto flex justify-center items-center bg-pink-100 text-pink-800 p-4 border-2 border-pink-800 rounded-2xl">
      <title>Update Profile</title>
      <form
        onSubmit={handleSubmit}
        className="py-10 bg-pink-100 h-80 p-6 rounded-2xl w-full max-w-md "
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-pink-800">
          Update Profile
        </h2>
        {/* {message && <p className="text-green-800 font-bold mb-3">{message}</p>} */}
        <input
          type="text"
          placeholder="Name"
          className=" border-2 border-pink-800 w-full p-2 mb-3 rounded text-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* <input
          type="text"
          placeholder="Photo URL"
          className="border-2 border-pink-800 w-full p-2 mb-3 rounded text-black"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
        /> */}
        <div className="flex justify-center items-center flex-col">
          <button className="w-3/4 mt-8 bg-pink-800 font-bold p-2 rounded-2xl cursor-pointer text-white">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
export default UpdateProfile;
