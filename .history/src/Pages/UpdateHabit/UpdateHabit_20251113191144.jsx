import toast from "react-hot-toast";
import { useLoaderData } from "react-router";
import { use } from "react";
import Swal from "sweetalert2";
import { TypeAnimation } from "react-type-animation";
import { AuthContext } from "../../context/AuthContext";

const UpdateHabit = () => {
    const data = useLoaderData();
    const { user } = use(AuthContext);
  console.log(data)
  const model = data.result;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      category: e.target.category.value,
      description: e.target.description.value,
      image: e.target.image.value,
    };

    //to update data in mongoDB, ways are 2 -
    //1. updateOne
    // 2. updateMany

    fetch(`http://localhost:3000/all-habits/${model._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully updated!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something is fishy !");
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <h2 className=" text-pink-800 font-bold text-center mb-4 mt-10">
        <TypeAnimation
          sequence={["Update habit", 1000, "Update habit of yours !!", 1000]}
          speed={50}
          style={{ fontSize: "2em" }}
          repeat={Infinity}
        />
      </h2>
      <div className="card-body p-6 relative">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="label text-lg font-semibold mb-2">
              Habit Title
            </label>
            <input
              type="text"
              defaultValue={model.title}
              name="title"
              required
              className="input w-full rounded-2xl  border-2 border-pink-800"
              placeholder="Enter habit title"
            />
          </div>

          {/* Description Textarea */}
          <div>
            <label className="label text-lg font-semibold mb-2 ">
              Habit Description
            </label>
            <textarea
              defaultValue={model.description}
              name="description"
              required
              rows="3"
              className="textarea w-full rounded-2xl border-2 border-pink-800 h-[150px]"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="label text-lg font-semibold mb-2">Category</label>
            <select
              defaultValue={model.category}
              name="category"
              required
              className="select w-full rounded-2xl  border-2 border-pink-800"
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="Work">Work</option>
              <option value="Study">Study</option>
              <option value="Fitness">Fitness</option>
              <option value="Anxiety">Anxiety</option>
              <option value="Peace">Peace</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* image URL */}
          <div>
            <label className="label text-lg font-semibold mb-2">
              Image URL
            </label>
            <input
              type="url"
              name="image"
              defaultValue={model.image}
              required
              className="input w-full rounded-2xl  border-2 border-pink-800"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* read only creator name and email */}
          <div className="text-md font-bold text-gray-500">
            Creator: {user?.displayName} ({user?.email})
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full font-bold text-white mt-6 rounded-2xl bg-pink-800"
          >
            Update model
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateHabit;
