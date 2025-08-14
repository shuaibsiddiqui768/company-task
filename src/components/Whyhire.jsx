import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import dev1 from "../assets/dev1.png";
import dev2 from "../assets/dev2.png";
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import bg4 from "../assets/bg4.png";

export default function Whyhire() {
  return (
    <section id="services" className="relative bg-white py-12 px-6 md:px-16">
      <img
        src={bg2}
        alt="bg1"
        className="absolute top-0 left-0 w-140 brightness-50"
      />
      <img
        src={bg3}
        alt="bg2"
        className="absolute top-0 right-0 w-140 brightness-50"
      />
      <img
        src={bg1}
        alt="bg3"
        className="absolute top 0bottom-0 left-0 w-1080 "
      />
      <img src={bg4} alt="bg4" className="absolute bottom-130 right-0 w-20 " />

      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Hire Developers From Our Name
        </h2>
        <p className="mt-4 text-gray-500">
          We connect businesses with highly skilled developers who bring
          technical expertise, innovation, and reliability. Our team ensures
          cost-effective solutions without compromising on quality, helping you
          scale faster and stay ahead in today’s competitive market.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src={dev1}
            alt="Developer"
            className=" width-[1000px] height-[1000px] z-10"
          />
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6">High Quality/Cost Ratio</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <CheckCircleIcon className="w-6 h-6 text-green-500" />
              <div>
                <p className="font-semibold">
                  Hire Silicon Valley Caliber At Half The Cost
                </p>
                <p className="text-gray-500 text-sm">
                  Hire the top 1% of 1.5 million+ developers from 150+ countries
                  who have applied to Turing.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <XCircleIcon className="w-6 h-6 text-red-500" />
              <div>
                <p className="font-semibold">100+ Skills Available</p>
                <p className="text-gray-500 text-sm">
                  Hire the top 1% of 1.5 million+ developers from 150+ countries
                  who have applied to Turing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
        <div>
          <h3 className="text-2xl font-bold mb-6">Rigorous Vetting</h3>
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <CheckCircleIcon className="w-6 h-6 text-green-500" />
              <div>
                <p className="font-semibold">
                  5+ Hours Of Tests And Interviews
                </p>
                <p className="text-gray-500 text-sm">
                  Hire the top 1% of 1.5 million+ developers from 150+ countries
                  who have applied to Turing.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <XCircleIcon className="w-6 h-6 text-red-500" />
              <div>
                <p className="font-semibold">Seniority Tests</p>
                <p className="text-gray-500 text-sm">
                  Hire the top 1% of 1.5 million+ developers from 150+ countries
                  who have applied to Turing.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={dev2}
            alt="Developer"
            className="width-[1000px] height-[1000px]"
          />
        </div>
      </div>
    </section>
  );
}
