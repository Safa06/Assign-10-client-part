import { Link } from "react-router";

export const ModelCard = ({ model }) => {
  const { title, image, likes, description, _id, createdAt, creatorName } =
    model;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
    
        <figure className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center font-semibold">{title}</h2>
          <div className="badge text-xs bg-pink-800 text-white">
            Liked By : {likes}
          </div>
          <p className="">{description}</p>
          <p className="text-sm text-gray-500">Created By : {creatorName}</p>
          <p className="text-sm text-gray-500">Created At : {createdAt}</p>

          <div className="card-actions justify-center items-center mt-4 gap-6">
            <Link
              to={`/habit-details/${_id}`}
              className="btn rounded-2xl bg-pink-800 text-white w-1/2 mt-5 mb-5"
            >
              View Details
            </Link>
          </div>
        </div>
    </div>
  );
};
