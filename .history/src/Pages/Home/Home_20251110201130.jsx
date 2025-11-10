import { useLoaderData } from "react-router";
import Banner from "../../components/Banner";
import { ModelCard } from "../../components/ModelCard";
import { TypeAnimation } from "react-type-animation";
import focus from "../ass"

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
      <div className="text-center font-bold mt-10 text-pink-800">
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
        <div className="flex justify-center items-center gap-6">
          <div className="bg-linear-to-r from-purple-700 via-purple-500 to-purple-300 py-8 px-8">
            <img src={} alt="" />
            <h1>Build Focus</h1>
            <p>
              Build daily habits that train your mind to stay attentive and
              organized. Stay consistent to boost your productivity and cut
              distractions
            </p>
          </div>
          <div className="bg-linear-to-r from-green-700 via-green-500 to-green-400 py-8 px-8">
            <img src="" alt="" />
            <h1>Reduce Stress</h1>
            <p>Practice small routines that relax your mind and body after a long day.
Mindful breaks and self-care habits can ease tension naturally</p>
          </div>
          <div className="bg-linear-to-r from-orange-700 via-orange-500 to-orange-300 py-8 px-8">
            <img src="" alt="" />
            <h1>Track your steps</h1>
            <p>Monitor your daily movement to stay motivated and active.
Small steps every day add up to big health improvements over time</p>
            
          </div>
          <div className="bg-linear-to-r from-yellow-700 via-yellow-500 to-yellow-300 py-8 px-8 rounded text-white font-bold text-xl">
            <img src="" alt="" />
            <h1>Mental peace</h1>
            <p>Create moments of calm through meditation, journaling, or gratitude habits.
These routines help you feel centered and emotionally balanced</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
