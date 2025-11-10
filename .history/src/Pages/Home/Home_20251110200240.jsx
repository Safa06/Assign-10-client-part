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

      <div className="text-center font-bold mt-10 text-pink-800">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            "Featured Habits",
            1000,
            "Featured Habits With Latest 6 !!",
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

      {/* why habits section */}
      <div className="text-center font-bold mt-10 text-pink-800 flex justify-center items-center">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            "Why Build",
            1000,
            "Why Build Habits !!",
            1000,
          ]}
          speed={50}
          style={{ fontSize: "2em" }}
          repeat={Infinity}
        />
        <div>
          
        </div>
        <div className="bg-linear-to-r from-purple-700 via-purple-500 to-purple-300 py-8 p">
          Build Focus
        </div>
        <div className="bg-linear-to-r from-green-700 via-green-500 to-green-400">
          Reduce Stress
        </div>
        <div className="bg-linear-to-r from-orange-700 via-orange-500 to-orange-300">
          Track your steps
        </div>
        <div className="bg-linear-to-r from-yellow-700 via-yellow-500 to-yellow-300">
          Mental peace
        </div>
      </div>
    </div>
  );
};

export default Home;
