import {
  FaServer,
  FaLaptopCode,
  FaMobileAlt,
  FaCube,
  FaCogs,
  FaShoppingCart,
} from "react-icons/fa";
import arrowImg from "../assets/arrow.png"; 



const techData = [
  {
    icon: <FaServer className="text-4xl text-gray-700" />,
    title: "Backend Development",
    techs: [
      ".NET",
      "C/C++",
      "DJANGO",
      "Firebase",
      "GOLANG",
      "SYMFONY",
      "LARAVEL",
      "NODE",
      "PHP",
      "PYTHON",
      "RUBY ON RAILS",
      "JAVA",
    ],
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-300",
  },
  {
    icon: <FaLaptopCode className="text-4xl text-gray-700" />,
    title: "Frontend Development",
    techs: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vue",
      "Angular",
      "Svelte",
      "Next.js",
      "Nuxt.js",
      "Bootstrap",
      "TailwindCSS",
      "TypeScript",
    ],
    bgColor: "bg-orange-50",
    borderColor: "border-orange-300",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-gray-700" />,
    title: "Mobile Development",
    techs: [
      "Flutter",
      "React Native",
      "Swift",
      "Kotlin",
      "Java",
      "Xamarin",
      "Ionic",
    ],
    bgColor: "bg-pink-50",
    borderColor: "border-pink-300",
  },
  {
    icon: <FaCube className="text-4xl text-gray-700" />,
    title: "Blockchain, AI/ML",
    techs: [
      "TensorFlow",
      "PyTorch",
      "Keras",
      "Scikit-learn",
      "Solidity",
      "Web3.js",
      "Rust",
    ],
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-300",
  },
  {
    icon: <FaCogs className="text-4xl text-gray-700" />,
    title: "DevOps & Low-Code",
    techs: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "Terraform",
      "PowerApps",
      "OutSystems",
      "Mendix",
    ],
    bgColor: "bg-lime-50",
    borderColor: "border-yellow-300",
  },
  {
    icon: <FaShoppingCart className="text-4xl text-gray-700" />,
    title: "E-commerce & CMS",
    techs: [
      "WordPress",
      "Shopify",
      "Magento",
      "Drupal",
      "WooCommerce",
      "PrestaShop",
    ],
    bgColor: "bg-rose-50",
    borderColor: "border-rose-300",
  },
];

const TechnologyCompetency = () => {
  return (
    <section
      id="technology"
      className="bg-gradient-to-r from-pink-50 via-white to-green-50 py-12 px-6"
    >
     
<img src={arrowImg} alt="Arrow" className="w-25 mb-4" />

      <div className="text-center">
  <h2 className="text-3xl font-bold text-gray-800">
    Our Diverse Technology Competency
  </h2>
  <p className="text-gray-500 mt-2">
    Our team brings expertise across modern technologies—from web and mobile
    development to cloud, AI, and enterprise solutions. We ensure every project
    is built with scalability, security, and innovation at its core.
  </p>
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ">
        {techData.map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} border-b-4 ${item.borderColor} rounded-md p-6 shadow-sm`}
          >
            <div className="mb-3">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
            <div className="flex flex-wrap text-sm text-gray-600 divide-x divide-gray-400">
              {item.techs.map((tech, idx) => (
                <span key={idx} className="px-2">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologyCompetency;
