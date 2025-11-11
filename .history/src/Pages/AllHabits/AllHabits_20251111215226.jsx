import { useLoaderData } from "react-router";
import { ModelCard } from "../../components/ModelCard";

const AllHabits = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <div className="text-2xl text-center font-bold "> All Public Habits</div>

      <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 my-5">
        {data.map((model) => (
          <ModelCard key={model._id} model={model} />
        ))}
      </div>
    </div>
  );
};

export default AllHabits;
