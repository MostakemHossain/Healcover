"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight, BsTelephoneFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { categories, services } from "../constant/service";
import Benefits from "./Benefits";

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((service) => {
          if (selectedCategory === "health") {
            return service.category === "health" || service.category === "life";
          }
          return service.category === selectedCategory;
        });

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-white max-w-7xl mx-auto mt-5">
        <section
          className="bg-gradient-to-br from-teal-600 to-green-600 py-20 px-4 rounded-md"
          data-aos="fade-down"
        >
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Comprehensive Insurance Solutions for Every Need
            </h1>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              From protecting your home and family to securing your business and
              future, we offer a complete range of insurance services tailored
              to your unique requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium flex items-center justify-center gap-2"
              >
                Get Free Quote <BsArrowRight />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-medium flex items-center justify-center gap-2"
              >
                Speak with Expert <BsTelephoneFill />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-gray-50" data-aos="fade-up">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? "bg-teal-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category.name}
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    selectedCategory === category.id
                      ? " bg-opacity-20 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden relative border border-gray-100"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                      Popular
                    </span>
                  </div>
                )}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-xs text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <span className="text-lg font-bold text-teal-600">
                      {service.price}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      to={service.link}
                      className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg font-medium text-sm text-center"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/quote"
                      className="flex-1 border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white py-2 px-4 rounded-lg font-medium text-sm text-center"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <div data-aos="fade-up">
          <Benefits />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
