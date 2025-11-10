import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="w-full mx-auto">
        <div className="shadow-md px-4">
          <Navbar />
        </div>

        <div className="mt-4 ">
          <Outlet />
        </div>
        <Footer />
      </div>

      <Toaster />
    </div>
  );
};

export default MainLayout;
