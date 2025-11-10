import { useLoaderData } from "react-router";
import Banner from "../../components/Banner";
import { ModelCard } from "../../components/ModelCard";
const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner />

      <div className="text-center text-3xl font-bold mt-10 text-pink-800">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            "Featured Habits Section",
            1000,
            "Featured Latest H",
            1000,
          ]}
          speed={50}
          style={{ fontSize: "2em" }}
          repeat={Infinity}
        />
        
      </div>

      {/* 6 newest cards load */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-10">
        {/* {data.map((model) => (
          <ModelCard key={model._id} model={model} />
        ))} */}
      </div>
    </div>
  );
};

export default Home;
