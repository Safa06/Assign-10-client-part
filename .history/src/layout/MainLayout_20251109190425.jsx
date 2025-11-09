import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="shadow-xl">
      <div className="max-w-11/12 mx-auto">
        <div className="border border-b-pink-800 ">
          <Navbar />
        </div>

        <div className="mt-4">
          <Outlet />
        </div>
        <Footer />
      </div>

      <Toaster />
    </div>
  );
};

export default MainLayout;
