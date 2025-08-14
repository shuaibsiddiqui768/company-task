import React, { useState } from "react";

export default function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    project: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted ✅", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      project: "",
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-[#e3f2fd] to-[#fdecea] p-6 overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-dotted border-[#b2dfdb] opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-40 h-1 bg-gradient-to-r from-[#fdecea] to-[#ffccbc] opacity-50"></div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center relative z-10">
        <div>
          <h2 className="text-green-500 font-semibold text-4xl flex items-center gap-4">
            HIRE DEDICATED
            <span className="flex-1 h-[2px] bg-green-500"></span>
          </h2>
          <h1 className="text-6xl font-extrabold text-gray-900 mt-2 tracking-tight">
            DEVELOPERS
          </h1>
          <p className="text-gray-600 mt-4 font-medium">
            Build high-performing teams with the top 1% pre-vetted software
            engineers.
          </p>
          <p className="text-gray-500 mt-3 leading-relaxed">
            Whether you need a single developer or a complete engineering team,
            we provide experienced professionals who integrate seamlessly with
            your business. Our developers specialize in web, mobile, AI/ML, and
            DevOps, ensuring you get scalable, future-ready solutions delivered
            on time and within budget.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="/view-more"
              className="bg-[#ff6f61] text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-[#ff5a4d] transition"
            >
              View More <span>↗</span>
            </a>
            <a
              href="/contact"
              className="border border-green-500 text-gray-800 px-6 py-3 rounded-md flex items-center gap-2 hover:bg-green-50 transition"
            >
              Get In Touch <span>↗</span>
            </a>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 text-center">
            Create Your Team
          </h3>
          <p className="text-gray-400 text-sm text-center mt-1">
            Share your requirements and we’ll connect you with the right
            experts.
          </p>

          {/* Form */}
          {!submitted ? (
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    className="border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:border-green-500 w-full"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    className="border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:border-green-500 w-full"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="text"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Your Phone Number"
                    className="border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:border-green-500 w-full"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Country
                  </label>
                  <input
                    id="country"
                    type="text"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Enter Your Country"
                    className="border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:border-green-500 w-full"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="project"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Project Brief
                </label>
                <textarea
                  id="project"
                  value={formData.project}
                  onChange={handleChange}
                  placeholder="Enter Your Project Brief"
                  className="border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:border-green-500 w-full"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#ff6f61] text-white w-full py-3 rounded-md flex items-center justify-center gap-2 hover:bg-[#ff5a4d] transition"
              >
                Hire Software Developer <span>↗</span>
              </button>
            </form>
          ) : (
            <div className="text-center mt-6">
              <h4 className="text-lg font-semibold text-green-600">
                🎉 Thank you! Your request has been submitted.
              </h4>
              <p className="text-gray-500 mt-2">
                We’ll reach out to you shortly with the next steps.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
