import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import React, { useState } from "react";
import TimePicker from "react-time-picker";

const AddHabit = () => {
  const { user } = use(AuthContext);
  const [time, setTime] = useState("10:00");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      category: e.target.category.value,
      description: e.target.description.value,
      thumbnail: e.target.thumbnail.value,
      created_at: new Date(),
      downloads: 0,
      created_by: user.email,
    };

    fetch("http://localhost:3000/models", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">Add Habit Page</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Habit Name Field */}
          <div>
            <label className="label font-medium">Habit Name</label>
            <input
              type="text"
              name="name"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
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
              <option value="Vehicles">Work</option>
              <option value="Plants">Study</option>
              <option value="Foods">Fitness</option>
              <option value="Home & Living">Anxiety</option>
              <option value="Characters">Peace</option>
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
              required
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
