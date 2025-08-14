import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="company" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="bg-[#27D17D] p-3 rounded-full">
              <span className="text-black font-bold text-xl">⚡</span>
            </div>
            <h2 className="text-lg font-semibold">LogoName</h2>
          </div>
          <p className="mt-4 text-gray-300 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href="#"
              className="bg-[#27D17D] w-9 h-9 rounded-full flex items-center justify-center"
            >
              <FaFacebookF className="text-black" />
            </a>
            <a
              href="#"
              className="bg-[#27D17D] w-9 h-9 rounded-full flex items-center justify-center"
            >
              <FaTwitter className="text-black" />
            </a>
            <a
              href="#"
              className="bg-[#27D17D] w-9 h-9 rounded-full flex items-center justify-center"
            >
              <FaLinkedinIn className="text-black" />
            </a>
            <a
              href="#"
              className="bg-[#27D17D] w-9 h-9 rounded-full flex items-center justify-center"
            >
              <FaYoutube className="text-black" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#">Software Team</a>
            </li>
            <li>
              <a href="#">Technologies</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#">Dedicated Development</a>
            </li>
            <li>
              <a href="#">Staff Augmentation Services</a>
            </li>
            <li>
              <a href="#">Software Development</a>
            </li>
            <li>
              <a href="#">Development Center</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex gap-3">
              <FaMapMarkerAlt className="text-[#27D17D] mt-1" />
              Envato, Level 13, 2 Elizabeth
              <br />
              Victoria 3000 India
            </li>
            <li className="flex gap-3 items-center">
              <FaPhoneAlt className="text-[#27D17D]" />
              +91 1234567890
            </li>
            <li className="flex gap-3 items-center">
              <FaEnvelope className="text-[#27D17D]" />
              abc@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#27D17D] text-center py-3 text-sm text-black">
        logoname@{currentYear}. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
