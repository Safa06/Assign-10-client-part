// import { use, useEffect, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import { ModelCard } from "../../components/ModelCard";
// import Loading from "../Loading/Loading";



// const MyHabit = () => {
//   const { user } = use(AuthContext);
//   const [models, setModels] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`http://localhost:3000/my-habit?email=${user.email}`, {
//       headers: {
//         authorization: `Bearer ${user.accessToken}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setModels(data);
//         setLoading(false);
//       });
//   }, [user]);

//   if (loading) {
//     return <Loading></Loading>
//   }

//   return (
//     <div>
//       <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
//         {models.map((model) => (
//           <ModelCard key={model._id} model={model} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyHabit;
