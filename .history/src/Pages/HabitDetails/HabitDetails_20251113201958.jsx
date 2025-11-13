import { use, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../Loading/Loading";

const HabitDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [model, setModel] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);
  //   const [refetch, setRefetch] = useState(false);


  useEffect(() => {
    fetch(`https://habit-ten-xi.vercel.app/all_habits/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setModel(data.result);
        console.log(" Api called!");
        console.log(data);
        setLoading(false);
      });
  }, [user, id]);


  //progress

  const calculateProgress = () => {
    if (!model?.completionHistory) return 0;
    const last30Days = new Date();
    last30Days.setDate(last30Days.getDate() - 30);

    const completed = model.completionHistory.filter(
      (date) => new Date(date) >= last30Days
    ).length;

    return Math.round((completed / 30) * 100);
  };

  const calculateStreak = () => {
    if (!model?.completionHistory || model.completionHistory.length === 0) return 0;

    const sortedDates = model.completionHistory
      .map((d) => new Date(d).setHours(0, 0, 0, 0))
      .sort((a, b) => b - a);

    let streak = 0;
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let date of sortedDates) {
      if (date === today.getTime() || date === today.getTime() - streak * 86400000) {
        streak++;
      } else {
        break;
      }
    }

    return streak;
  };

  const handleMarkComplete = () => {
    if (!model) return;
    const today = new Date().setHours(0, 0, 0, 0);

    // Prevent duplicate entry for today
    if (model.completionHistory?.some((d) => new Date(d).setHours(0, 0, 0, 0) === today)) {
      Swal.fire("Already Completed!", "You have already marked today.", "info");
      return;
    }

    const updatedHistory = [...(model.completionHistory || []), new Date()];





    const handleDelete = () => {
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
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              navigate("/all-habits");

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            })
            .catch((err) => {
              (err)
            });
        }
      });
    };


    if (loading) {
      return <Loading></Loading>
    }

    return (
      <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
        <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
            <div className="shrink-0 w-full md:w-1/2">
              <img
                src={model.image}
                alt=""
                className="w-full object-cover rounded-xl shadow-md"
              />
            </div>

            <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                {model.title}
              </h1>

              <div className="flex gap-3">
                <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                  {model.category}
                </div>

              </div>

              <div className="badge badge-lg badge-outline text-green-600 border-green-600 font-medium">
                Streak: {calculateStreak()} days
              </div>

              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {model.description}
              </p>

            
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-blue-500 h-4 rounded-full"
                    style={{ width: `${calculateProgress()}%` }}
                  ></div>
                </div>
                <p className="text-sm mt-1 text-gray-500">{calculateProgress()}% completed in last 30 days</p>
              </div>



              <div className="flex gap-3 mt-6">
                <Link
                  to={`/update-habit/${model._id}`}
                  className="btn cursor-pointer rounded-2xl bg-pink-800 text-white"
                >
                  Update Habit
                </Link>

                <button
                  onClick={handleMarkComplete}
                  className="btn rounded-2xl bg-green-600 text-white"
                >
                  Mark Complete
                </button>


                <button
                  onClick={handleDelete}
                  className="btn rounded-2xl bg-purple-500 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default HabitDetails;
