import { useLoaderData } from "react-router";
import Banner from "../../components/Banner";
import { ModelCard } from "../../components/ModelCard";
import { TypeAnimation } from "react-type-animation";
import focus from "../../assets/focus.png"
import stress from "../../assets/stress.png"
import steps from "../../assets/steps.png"
import peace from "../../assets/peace.png"
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";


const Home = () => {
  const data = useLoaderData();
  console.log(data);


  // for marquee texts
  const motivationQuotes = [
    "Small habits, when repeated daily, lead to big success.",
    "Discipline beats motivation every single time.",
    "Focus on progress, not perfection.",
    "Your habits decide your future, not your goals.",
    "Start today — your future self will thank you.",
  ];


  return (
    <div>
      <Banner />

      {/* featured habits title */}
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
        <div className="mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-10">
          <div className="bg-linear-to-r from-purple-700 via-purple-500 to-purple-300 py-8 px-8 rounded-xl ">
            <img src={focus} className=" w-20 h-20 mx-auto" alt="" />
            <h1 className="text-white font-bold text-xl">Build Focus</h1>
            <p className="text-white font-semibold">
              Build daily habits that train your mind to stay attentive and
              organized. Stay consistent to boost your productivity and cut
              distractions
            </p>
          </div>
          <div className="bg-linear-to-r from-green-700 via-green-500 to-green-400 py-8 px-8 rounded-xl ">
            <img src={stress} className=" w-20 h-20 mx-auto" alt="" />
            <h1 className="text-white font-bold text-xl">Reduce Stress</h1>
            <p className="text-white font-semibold">
              Practice small routines that relax your mind and body after a long
              day. Mindful breaks and self-care habits can ease tension
              naturally
            </p>
          </div>
          <div className="bg-linear-to-r from-orange-700 via-orange-500 to-orange-300 py-8 px-8 rounded-xl ">
            <img src={steps} className=" w-20 h-20 mx-auto" alt="" />
            <h1 className="text-white font-bold text-xl">Track your steps</h1>
            <p className="text-white font-semibold">
              Monitor your daily movement to stay motivated and active. Small
              steps every day add up to big improvements
            </p>
          </div>
          <div className="bg-linear-to-r from-yellow-600 via-yellow-400 to-yellow-200 py-8 px-8 rounded-xl ">
            <img src={peace} className="mx-auto w-20 h-20" alt="" />
            <h1 className="text-white font-bold text-xl">Mental peace</h1>
            <p className="text-white font-semibold">
              Create moments of calm through meditation, journaling, or
              gratitude habits. These routines help you feel centered
            </p>
          </div>
        </div>
      </div>

      {/* extra section 1: daily motivation */}
      <div>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center my-10 p-8 rounded-lg text-pink-800 font-bold "
        >
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "Daily Motivation",
                1000,
                "Daily Motivation!!",
                1000,
              ]}
              speed={50}
              style={{ fontSize: "2em" }}
              repeat={Infinity}
            />

          <Marquee gradient={false} speed={50}>
            {motivationQuotes.map((quote, i) => (
              <span
                key={i}
                className="text-lg text-gray-700 italic mx-10 whitespace-nowrap"
              >
                “{quote}”
              </span>
            ))}
          </Marquee>
        </motion.section>

        {/* extra Section 2: Habit Tracking Tips */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="my-10"
        >
          <h2 className="text-2xl font-semibold text-center mb-6">
            Tips for Building Strong Habits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Start small and stay consistent.",
              "Set reminders to keep yourself on track.",
              "Celebrate small wins every week.",
              "Avoid all-or-nothing thinking.",
              "Track progress visually for motivation.",
              "Share your habits with a friend for accountability.",
            ].map((tip, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-4 border rounded-xl shadow-sm bg-white"
              >
                <p className="text-gray-700">{tip}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
