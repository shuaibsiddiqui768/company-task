import { FaUserCircle, FaCode, FaUsers, FaExpand } from "react-icons/fa";
import bgImage from "../assets/processBg.png"; 

const steps = [
  {
    id: 1,
    title: "INQUIRY",
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    icon: <FaUserCircle size={40} />,
  },
  {
    id: 2,
    title: "SELECT DEVELOPERS",
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    icon: <FaCode size={40} />,
  },
  {
    id: 3,
    title: "TEAM INTEGRATION",
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    icon: <FaUsers size={40} />,
  },
  {
    id: 4,
    title: "TEAM SCALING",
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
    icon: <FaExpand size={40} />,
  },
];

const HiringProcess = () => {
  return (
    <div
      className="relative bg-gradient-to-r from-[#E3F2F1] to-[#FCE9E9] py-16 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      

      <div className="text-center mb-14 relative z-10">
        <h2 className="text-3xl font-bold text-gray-800">Our Hiring Process</h2>
        <p className="text-gray-600 max-w-xl mx-auto mt-3">
          Take A Look At Our Simple And Straightforward Process To Hire Software
          Developers From ValueCoders.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto px-6 relative z-10">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="flex flex-col items-center text-center relative group"
          >
            <div className="relative w-36 h-36 flex items-center justify-center rounded-full border-4 border-green-500 bg-white shadow-lg transition-transform duration-300 group-hover:scale-110">
              {step.icon}

              <div className="absolute -top-3 -right-3 bg-[#FF8E8E] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                {step.id}
              </div>
            </div>

             <h3 className="mt-5 text-lg font-semibold text-gray-800">
              {step.title}
            </h3>

             <p className="text-gray-500 text-sm mt-2 max-w-[220px]">
              {step.desc}
            </p>

             {index !== steps.length - 1 && (
              <div className="hidden md:block absolute top-16 -right-16 text-gray-400">
                ➡
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HiringProcess;
