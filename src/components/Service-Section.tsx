import { Link } from "react-router-dom";
import { HiCheck } from "react-icons/hi";
import aboutImg from "../../public/about.avif";
import { AboutValues, achievements } from "../constant/about-values";

const ServiceSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Who we Are
            </div>

            <h2 className="text-2xl md:text-xl lg:text-5xl font-bold text-gray-900 leading-tight">
              We work with a wide range of quality, reliable{" "}
              <span className="bg-yellow-200 px-2 py-1 rounded">
                insurance companies
              </span>
              .
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Most of us know our driving record affects our car insurance
              rates. But, do you know that your region and even your
              neighborhood can influence it too?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HiCheck className="text-green-600 text-xl" />
                  </div>
                  <p className="text-gray-600 text-m leading-relaxed">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/quote"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 w-fit"
              >
                Request a Quote
                <div className="w-6 h-6  rounded-full flex items-center justify-center">
                  <HiCheck />
                </div>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gray-100 rounded-full"></div>

              <div className="relative z-10 p-8 flex items-center justify-center">
                <div className="w-full  rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <img src={aboutImg} width={1000} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {AboutValues.map((value, index) => (
            <div key={index} className="text-center space-y-4 shadow-2xl p-2">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
