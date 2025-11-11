import { Link } from "react-router";

export const ModelCard = ({ model }) => {
  const { title, image, likes, description, _id } = model;
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
        <h2 className="card-title">{title}</h2>
        <div className="badge text-xs bg-pink-800 text-white">
          Liked By : {likes}
        </div>
        <p className="">{description}</p>
        {/* <p className="text-sm text-base-content/70">by {author}</p> */}
        <div className="card-actions justify-between items-center mt-4">
          <div className="flex gap-4 text-sm text-base-content/60">
            {/* <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {views}
            </span> */}
            {/* <span className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              {likes}
            </span> */}
          </div>
          <Link
            to={`/model-details/${_id}`}
            className="btn rounded-2xl bg-pink-800 text-white w-full btn-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
