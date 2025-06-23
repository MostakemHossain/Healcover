import { useForm } from "react-hook-form";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";

type FormData = {
  firstName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const ContactSection = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Submitted:", data);
    reset();
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 mb-32">
      <div className="max-w-7xl mx-auto">
        <div
          className="grid grid-cols-1 items-center justify-between lg:grid-cols-2 gap-12 lg:gap-20"
          data-aos="fade-up"
        >
          <div
            className="bg-white p-8 rounded-lg shadow-sm"
            data-aos="fade-right"
          >
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Contact Us
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              We offer guidance to help you make the{" "}
              <span className="bg-yellow-200 px-2 py-1 rounded">
                {" "}
                right decisions
              </span>
              .
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Most of us know our driving record affects our car insurance
              rates. But do you know that your region and even your neighborhood
              impacts it?
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  {...register("firstName", { required: true })}
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
                  data-aos="fade-up"
                  data-aos-delay="100"
                />
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
                  data-aos="fade-up"
                  data-aos-delay="200"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone"
                  {...register("phone")}
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
                  data-aos="fade-up"
                  data-aos-delay="300"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  {...register("subject")}
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
                  data-aos="fade-up"
                  data-aos-delay="400"
                />
              </div>

              <textarea
                rows={4}
                placeholder="Message"
                {...register("message", { required: true })}
                className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white resize-none"
                data-aos="fade-up"
                data-aos-delay="500"
              ></textarea>

              <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Send Us Message
                <FaPaperPlane className="text-white" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8" data-aos="fade-left">
            {/* Location */}
            <div
              className="flex items-start gap-4 shadow-md p-2 rounded-md"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center">
                <FaMapMarkerAlt className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Office Location
                </h3>
                <p className="text-gray-600 font-medium">Dhaka, Bangladesh</p>
                <p className="text-gray-600">31B, Gulshan, 1216</p>
              </div>
            </div>

            {/* Email */}
            <div
              className="flex items-start gap-4 shadow-md p-2 rounded-md"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center">
                <MdOutlineMarkEmailRead className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Email Address
                </h3>
                <p className="text-gray-600">
                  <a
                    href="mailto:healcare324@gmail.com"
                    className="hover:text-teal-600"
                  >
                    healcare324@gmail.com
                  </a>
                </p>
                <p className="text-gray-600">
                  <a
                    href="mailto:healcare325@gmail.com"
                    className="hover:text-teal-600"
                  >
                    healcare325@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Phone */}
            <div
              className="flex items-start gap-4 shadow-md p-2 rounded-md"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center">
                <FaPhoneAlt className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Phone Number
                </h3>
                <p className="text-gray-600">
                  <a href="tel:01849545637" className="hover:text-teal-600">
                    01849545637
                  </a>
                </p>
                <p className="text-gray-600">
                  <a href="tel:01608432572" className="hover:text-teal-600">
                    01608432572
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
