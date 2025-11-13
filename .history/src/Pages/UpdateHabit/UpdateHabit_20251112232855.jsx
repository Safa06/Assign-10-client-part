import toast from "react-hot-toast";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { TypeAnimation } from "react-type-animation";

const UpdateModel = () => {
  const data = useLoaderData();
  //console.log(data)
  const model = data.result;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      category: e.target.category.value,
      description: e.target.description.value,
      image: e.target.thumbnail.value,
    };

    //to update data in mongoDB, ways are 2 -
    //1. updateOne
    // 2. updateMany

    fetch(`https://habit-ten-xi.vercel.app/models/${model._id}`, {
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
              defaultValue={model.name}
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

          {/* Thumbnail URL */}
          <div>
            <label className="label font-medium">Thumbnail URL</label>
            <input
              type="url"
              name="thumbnail"
              defaultValue={model.thumbnail}
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
          >
            Update Model
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateModel;
