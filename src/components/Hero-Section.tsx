import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImage from "../../public/hero.webp";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  return (
    <section className="py-20 lg:py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden mb-10 bg-bl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right" data-aos-delay="200" className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              We give you peace of mind
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Since long, we have been providing group health insurance and{" "}
              <span className="bg-yellow-200">solutions</span>.
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Since our inception, we have worked extensively to build a secure
              network consisting of the world’s highest-rated insurance
              providers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Link
                to="/contact"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-medium transition duration-200 flex items-center gap-3"
              >
                Make an Appointment
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <FaArrowRight className="text-teal-600 text-sm" />
                </div>
              </Link>

              <button className="flex items-center gap-3 text-gray-700 hover:text-teal-600 transition duration-200 group">
                <div className="w-12 h-12 bg-teal-600 hover:bg-teal-700 rounded-full flex items-center justify-center transition duration-200">
                  <FaPlay className="text-white ml-0.5" />
                </div>
                <span className="font-medium">Play Video</span>
              </button>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="500"
            className="flex justify-center items-center"
          >
            <img
              src={heroImage}
              width={1200}
              height={1000}
              alt="Hero"
              className="rounded-3xl shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
