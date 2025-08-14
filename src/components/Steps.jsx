import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import devImage from "../assets/stepsImg.png"; 
const tabs = [
  {
    title: "Benefits Of Hiring Developers",
    content: {
      heading: "Benefits Of Hiring Developers",
      description:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.",
      points: [
        "Client-Centric Approach",
        "Best-In-Class Project Management",
        "Global Quality Standards",
        "Time-Zone Compatibility",
        "Cutting-Edge Infrastructure",
        "Agile Adaptability",
      ],
    },
  },
  {
    title: "Key Factors To Consider While Hiring",
    content: {
      heading: "Key Factors To Consider While Hiring",
      description:
        "When hiring developers, you must assess skills, cultural fit, and cost-effectiveness to ensure smooth project execution and success.",
      points: [
        "Relevant Technical Skills",
        "Cultural Compatibility",
        "Scalability",
        "Budget Alignment",
        "Security Awareness",
        "Long-Term Commitment",
      ],
    },
  },
  {
    title: "Defining Your Project Requirements",
    content: {
      heading: "Defining Your Project Requirements",
      description:
        "Clear and detailed project requirements help developers deliver precisely what you need, reducing miscommunication and delays.",
      points: [
        "Scope Clarity",
        "Feature List",
        "UI/UX Guidelines",
        "Tech Stack Decisions",
        "Timeline Estimates",
        "Success Metrics",
      ],
    },
  },
  {
    title: "Choosing The Right Development Model",
    content: {
      heading: "Choosing The Right Development Model",
      description:
        "The right development model depends on your goals, budget, and flexibility needs.",
      points: [
        "Agile Development",
        "Waterfall Approach",
        "Dedicated Teams",
        "Fixed Price",
        "Time & Material",
        "Hybrid Model",
      ],
    },
  },
  {
    title: "Typical Challenges For Hiring Developers",
    content: {
      heading: "Typical Challenges For Hiring Developers",
      description:
        "From skill gaps to time zone issues, hiring developers comes with unique challenges that need proactive solutions.",
      points: [
        "Skill Shortages",
        "High Attrition Rates",
        "Communication Barriers",
        "Budget Constraints",
        "Timeline Delays",
        "Quality Concerns",
      ],
    },
  },
  {
    title: "Hiring Freelancers Vs. Dedicated Developers",
    content: {
      heading: "Hiring Freelancers Vs. Dedicated Developers",
      description:
        "Understand the pros and cons of freelancers vs. dedicated teams to make the right choice.",
      points: [
        "Flexibility",
        "Cost Differences",
        "Commitment Levels",
        "Quality Control",
        "Scalability",
        "Long-Term Availability",
      ],
    },
  },
  {
    title: "Communication With Remote Developers",
    content: {
      heading: "Communication With Remote Developers",
      description:
        "Effective communication ensures smooth collaboration with remote developers.",
      points: [
        "Clear Channels",
        "Regular Updates",
        "Cultural Sensitivity",
        "Use of Tools",
        "Time Zone Awareness",
        "Feedback Loops",
      ],
    },
  },
];

const HireGuide = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="resources">
    <div className="py-16 bg-gray-50">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-10">
        User Guide To Hire Dedicated Software Developers
      </h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3 border border-gray-200 rounded-md overflow-hidden">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`px-4 py-4 cursor-pointer border-b border-gray-200 ${
                activeTab === index
                  ? "bg-green-500 text-white font-medium"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </div>
          ))}
        </div>

        <div className="w-full md:w-2/3 bg-white p-6 rounded-md shadow-sm">
          <h3 className="text-lg font-bold mb-3">
            {tabs[activeTab].content.heading}
          </h3>
          <p className="text-gray-600 mb-6">
            {tabs[activeTab].content.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {tabs[activeTab].content.points.map((point, i) => (
              <div key={i} className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                <span className="text-gray-800">{point}</span>
              </div>
            ))}
          </div>
          <img src={devImage} alt="Developer" className="w-full rounded-md" />
        </div>
      </div>
    </div>
    </section>
  );
};

export default HireGuide;
