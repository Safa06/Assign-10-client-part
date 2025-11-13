import { useLoaderData } from "react-router";
import { ModelCard } from "../../components/ModelCard";

const AllHabits = () => {
  const data = useLoaderData();
   const [models, setModels] = useState(data);
   const [loading, setLoading] = useState(false);
  console.log(data);

   const handleSearch = (e) => {
     e.preventDefault();
     const search_text = e.target.search.value;
     console.log(search_text);
     setLoading(true);

     fetch(`https://localhost:3000//search?search=${search_text}`)
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
         setModels(data);
         setLoading(false);
       });
  };
  



  return (
    <div>
      <div className="text-3xl text-center font-bold mb-10 mt-5 text-pink-800"> All Public Habits</div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 my-5 w-11/12 mx-auto">
        {data.map((model) => (
          <ModelCard key={model._id} model={model} />
        ))}
      </div>
    </div>
  );
};

export default AllHabits;
