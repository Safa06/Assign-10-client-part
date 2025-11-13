// import { use, useEffect, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import { ModelCard } from "../../components/ModelCard";
// import Loading from "../Loading/Loading";

// const MyHabit = () => {
//   const { user } = use(AuthContext);
//   const [models, setModels] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`https://habit-ten-xi.vercel.app/my-habit?email=${user.email}`, {
//       headers: {
//         authorization: `Bearer ${user.accessToken}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setModels(data);
//         setLoading(false);
//       });
//   }, [user]);

//   if (loading) {
//     return <Loading></Loading>
//   }

//   return (
//     <div>
//       <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
//         {models.map((model) => (
//           <ModelCard key={model._id} model={model} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyHabit;

import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";

const MyHabit = () => {
  const { user } = useContext(AuthContext);
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch user's habits
  useEffect(() => {
    if (!user) return;

    fetch(`https://habit-ten-xi.vercel.app/my-habit?email=${user.email}`, {
      headers: { authorization: `Bearer ${user.accessToken}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setModels(data.res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [user]);

  // Calculate current streak
  const calculateStreak = (completionHistory = []) => {
    if (!completionHistory.length) return 0;

    const sortedDates = completionHistory
      .map((d) => new Date(d).setHours(0, 0, 0, 0))
      .sort((a, b) => b - a);

    let streak = 0;
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let date of sortedDates) {
      if (date === today.getTime() - streak * 86400000) {
        streak++;
      } else if (streak === 0 && date === today.getTime()) {
        streak = 1;
      } else {
        break;
      }
    }

    return streak;
  };

  // Mark habit complete
  const handleMarkComplete = (model) => {
    const today = new Date().setHours(0, 0, 0, 0);

    if (
      model.completionHistory?.some(
        (d) => new Date(d).setHours(0, 0, 0, 0) === today
      )
    ) {
      Swal.fire("Already Completed!", "You have already marked today.", "info");
      return;
    }

    const updatedHistory = [...(model.completionHistory || []), new Date()];

    fetch(`https://habit-ten-xi.vercel.app/all_habits/${model._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.accessToken}`,
      },
      body: JSON.stringify({ completionHistory: updatedHistory }),
    })
      .then((res) => res.json())
      .then(() => {
        // Update state immediately
        setModels((prev) =>
          prev.map((m) =>
            m._id === model._id
              ? { ...m, completionHistory: updatedHistory }
              : m
          )
        );
        Swal.fire(
          "Marked Complete!",
          "Good job on completing your habit today.",
          "success"
        );
      })
      .catch((err) => console.log(err));
  };

  // Delete habit
  const handleDelete = (model) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://habit-ten-xi.vercel.app/all_habits/${model._id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then(() => {
            setModels((prev) => prev.filter((m) => m._id !== model._id));
            Swal.fire("Deleted!", "Your habit has been deleted.", "success");
          })
          .catch((err) => console.log(err));
      }
    });
  };

  if (loading) return <Loading />;

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-6">My Habits</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 text-left">Title</th>
              <th className="border p-2 text-left">Category</th>
              <th className="border p-2 text-left">Current Streak</th>
              <th className="border p-2 text-left">Created Date</th>
              <th className="border p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {models.map((model) => (
              <tr key={model._id} className="hover:bg-gray-50">
                <td className="border p-2">{model.title}</td>
                <td className="border p-2">{model.category}</td>
                <td className="border p-2">
                  {calculateStreak(model.completionHistory)}
                </td>
                <td className="border p-2">
                  {new Date(model.createdAt).toLocaleDateString()}
                </td>
                <td className="border p-2 flex gap-2">
                  <button
                    onClick={() => handleMarkComplete(model)}
                    className="btn bg-green-600 text-white btn-sm rounded"
                  >
                    Mark Complete
                  </button>
                  <Link
                    to={`/update-habit/${model._id}`}
                    className="btn bg-pink-800 text-white btn-sm rounded"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(model)}
                    className="btn bg-purple-500 text-white btn-sm rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyHabit;
