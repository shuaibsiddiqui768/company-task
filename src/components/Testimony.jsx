 import { HiArrowUpRight } from "react-icons/hi2";
import personStand from "../assets/person-stand.png"; 

const points = [
  { text: "English Speaking Programmers", link: "#" },
  { text: "Flexible Work Hours", link: "#" },
  { text: "Rapid Onboarding Process", link: "#" },
  { text: "Expertise In Top Technologies", link: "#" },
  { text: "Reliable Partner Credentials", link: "#" },
];

const Testimony = () => {
  return (
    <div className="relative bg-[#0B0E3F] text-white overflow-hidden">
      <img
        src={personStand}
        alt="Person Standing"
        className="absolute bottom-0 left-0 w-[22rem] md:w-[35rem] lg:w-[40rem] pointer-events-none select-none"
        style={{ maxWidth: "none" }}
      />

      <div className="relative max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold leading-snug">
            Why Hire Software Developers
            <br /> In India?
          </h2>
        </div>

        <div className="space-y-6">
          {points.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center border-b border-gray-700 pb-2"
            >
              <span>{item.text}</span>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <HiArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimony;
