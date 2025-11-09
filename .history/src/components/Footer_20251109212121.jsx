import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import logo from "../assets/logo.jpg"
import { FaPhoneSquareAlt } from "react-icons/fa";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-r from-pink-900 via-pink-700 to-pink-500 py-8 px-4  rounded-t-2xl mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 text-white">
            <img src={logo} className="rounded-3xl w-12 h-12" alt="" />
            <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              Fit ~ Track
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">
            Connect With Us
          </h3>
          <ul className="space-y-2">
            <li>
              <a className="text-gray-600 dark:text-gray-200 flex items-center hover:text-yellow-600 mr-3">
                <FaPhoneSquareAlt size={18} className="mr-2" /> +8801711111100
              </a>
            </li>
            <li>
              <a
                href="mailto:support@nihonlearn.com"
                className="flex items-center text-gray-600 dark:text-gray-200 hover:text-blue-600"
              >
                <Mail size={18} className="mr-2" /> support@nihonlearn.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">
            Terms & Conditions
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="text-gray-600 dark:text-gray-200 hover:text-blue-600 mr-3"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-gray-600 dark:text-gray-200 hover:text-blue-600"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">
            Social Media Links
          </h3>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-200 hover:text-blue-700"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-200 hover:text-blue-400"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-200 hover:text-pink-600"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t lg:mb-0 md:mb-0 mb-20 border-white mt-8 pt-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-200">
          © {currentYear} Fit ~ Track. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
