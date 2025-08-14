
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import codeImage from "../assets/code_guy.png"; 

const TrustSection = () => {
  const points = [
    "Client-Centric Approach",
    "Best-In-Class Project Management",
    "Global Quality Standards",
    "Time-Zone Compatibility",
    "Cutting-Edge Infrastructure",
    "Agile Adaptability",
  ];

  return (
    <div className="bg-gradient-to-r from-pink-50 via-white to-pink-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src={codeImage}
            alt="Coding Illustration"
            className="max-w-md w-full"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Top Companies Trust ValueCoders <br /> For Hiring Software
            Developers
          </h2>
          <p className="text-gray-500 mt-4 text-sm leading-relaxed">
            Leading enterprises and startups across the globe rely on
            ValueCoders for building high-performing development teams. With
            proven expertise, strict quality standards, and a customer-first
            approach, we deliver reliable and scalable software solutions that
            drive business growth.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-500" />
                <span className="text-gray-700 text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
