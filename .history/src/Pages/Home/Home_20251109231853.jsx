import { useLoaderData } from "react-router";
import Banner from "../../components/Banner";
import { ModelCard } from "../../components/ModelCard";
const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner />

      <div className="text-center text-2xl font-bold mt-10 text-pink">Featured Habits Section</div>

      <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
        {/* {data.map((model) => (
          <ModelCard key={model._id} model={model} />
        ))} */}
      </div>
    </div>
  );
};

export default Home;
