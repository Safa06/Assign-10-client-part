import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import React, { useState } from "react";
import TimePicker from "react-time-picker";
import toast from "react-hot-toast";
import { TypeAnimation } from "react-type-animation";


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
          sequence={["Add habit", 1000,
            "Add habit of yours !!", 1000]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
      </h2>
      <div className="card-body p-6 relative">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Habit Name Field */}
          <div>
            <label className="label text-lg font-semibold mb-2">Habit Name</label>
            <input
              type="text"
              name="title"
              required
              className="input w-full rounded-2xl  focus:border-2 focus:outline-gray-200"
              placeholder="Enter name"
            />
          </div>

          {/* Description Textarea */}
          <div>
            <label className="label font-medium">Habit Description</label>
            <textarea
              name="description"
              required
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="label font-medium">Category</label>
            <select
              defaultValue={""}
              name="category"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
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
          <div>
            <label className="block mb-2">Reminder Time</label>
            <TimePicker
              onChange={setTime}
              value={time}
              disableClock={true}
              className="border rounded"
            />
          </div>

          {/* image URL */}
          <div>
            <label className="label font-medium">Upload Image</label>
            <input
              type="url"
              name="image"
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* read only creator name and email */}
          <div className="text-sm text-gray-600">
            Creator: {user?.displayName} ({user?.email})
          </div>

          {/* Add Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddHabit;
