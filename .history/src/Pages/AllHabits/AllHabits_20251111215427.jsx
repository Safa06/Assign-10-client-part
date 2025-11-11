import { useLoaderData } from "react-router";
import { ModelCard } from "../../components/ModelCard";

const AllHabits = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <div className="text-3xl text-center font-bold mb-10 mt-5 text-pink-800"> All Public Habits</div>

      <div className="grid grid-cols-3 lg:grid-cols-4 gap- my-5">
        {data.map((model) => (
          <ModelCard key={model._id} model={model} />
        ))}
      </div>
    </div>
  );
};

export default AllHabits;
