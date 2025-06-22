import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { socialLinks } from "../constant/social";
import { services } from "../constant/services";
import { PiPhone } from "react-icons/pi";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { time } from "./time";
import { BiMicrophone } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full relative">
      <div className="absolute md:-top-40 md:left-1/2 transform md:-translate-x-1/2 w-full max-w-7xl z-20 hidden md:block">
        <div className="bg-teal-600 py-16 px-4 rounded-md">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to go{" "}
              <span className="text-yellow-500">Insurance Health!</span>
            </h2>
            <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
              Most of us know our driving record affects our car insurance rates
              Insurance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
              >
                Let's Talk
                <div className="w-6 h-6 rounded-full flex items-center justify-center">
                  <BiMicrophone className="size-5"/>
                </div>
              </Link>
              <Link
                to="/quote"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
              >
                Request free Trial
                <div className="w-6 h-6  rounded-full flex items-center justify-center">
                  <BsArrowRight className="size-5"/>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white md:pt-[250px] pt-10 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                  🏥
                </div>
                <span className="text-xl font-bold">Heal Nexus</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Working with a life coach is like ensure hanging out with a
                really honest friend who believes in your dreams always.
              </p>

              <div className="flex gap-4">
                {socialLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-teal-600 rounded-full flex items-center justify-center transition-colors text-white text-lg"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Our Services</h3>
              <ul className="space-y-4">
                {services.map(([text, link], i) => (
                  <li key={i}>
                    <Link
                      to={link}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex  gap-3">
                  <FaLocationCrosshairs className="text-teal-500 size-4 mt-4" />
                  <div>
                    <p className="text-white font-medium">Dhaka,Bangladesh</p>
                    <p className="text-gray-400">31B,Gulshan,1216</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <PiPhone className="text-teal-500 size-5" />
                  <p className="text-gray-400">+88018-49545637</p>
                </div>
                <div className="flex items-center gap-3">
                  <MdOutlineEmail className="text-teal-500 size-5" />
                  <p className="text-gray-400">healnexus@gmail.com</p>
                </div>
              </div>
            </div>

          
            <div>
              <h3 className="text-xl font-bold mb-6">Schedule Hours</h3>
              <div className="space-y-3">
                {time.map(([day, time], i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-gray-400">{day}</span>
                    <span className="text-white">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
