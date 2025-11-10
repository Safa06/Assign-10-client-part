import { useLoaderData } from "react-router";
import Banner from "../../components/Banner";
import { ModelCard } from "../../components/ModelCard";
import { TypeAnimation } from "react-type-animation";



const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner />

      <div className="text-center text-2xl font-bold mt-10 text-pink-800">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            "Featured Habits Section",
            1000,
            "Featured Habits Section With Latest 6 !!",
            1000,
          ]}
          speed={50}
          style={{ fontSize: "0.5em" }}
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
