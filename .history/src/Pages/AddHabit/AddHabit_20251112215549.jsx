import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import React, { useState } from "react";
import TimePicker from "react-time-picker";
import toast from "react-hot-toast";
import { TypeAnimation } from "react-type-animation";
//import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const AddHabit = () => {
  const { user } = use(AuthContext);
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      category: e.target.category.value,
      description: e.target.description.value,
      image: e.target.image.value,
      createdAt: new Date(),
      creatorName: user.creatorName,
    };

    fetch('http://localhost:3000/all_habits', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success('Habit is added successfully !')
      })
      .catch((err) => {
        console.log(err);
        toast.error('Something is fishy !')
      });
  };

  return (
    <div className="card border-2 border-pink-800 bg-pink-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <h2 className=" text-pink-800 font-bold text-center mb-4 mt-10">
        <TypeAnimation
          sequence={["Add habit", 1000, "Add habit of yours !!", 1000]}
          speed={50}
          style={{ fontSize: "2em" }}
          repeat={Infinity}
        />
      </h2>
      <div className="card-body p-6 relative">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Habit Name Field */}
          <div>
            <label className="label text-lg font-semibold mb-2">
              Habit Name
            </label>
            <input
              type="text"
              name="title"
              required
              className="input w-full rounded-2xl  border-2 border-pink-800"
              placeholder="Enter name"
            />
          </div>

          {/* Description Textarea */}
          <div>
            <label className="label text-lg font-semibold mb-2">
              Habit Description
            </label>
            <textarea
              name="description"
              required
              rows="3"
              className="textarea w-full rounded-2xl  border-2 border-pink-800 h-[150px]"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="label text-lg font-semibold mb-2">Category</label>
            <select
              defaultValue={""}
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

          {/* time picker of react */}

          <h2 className="text-gray-500 font-semibold  text-lg mb-2">
            Reminder Time
          </h2>
          <TimePicker onChange={setTime} value={value} />

          {/* image URL */}
          <div>
            <label className="label text-lg font-semibold mb-2">
              Upload Image
            </label>
            <input
              type="url"
              name="image"
              className="input w-full rounded-2xl  border-2 border-pink-800"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* read only creator name and email */}
          <div className="text-md font-bold text-gray-500">
            Creator: {user?.displayName} ({user?.email})
          </div>

          {/* Add Button */}
          <button
            type="submit"
            className="btn w-full font-bold text-white mt-6 rounded-2xl bg-pink-800"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddHabit;
