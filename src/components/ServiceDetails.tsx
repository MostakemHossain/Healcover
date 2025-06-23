"use client";

import { useParams } from "react-router-dom";
import { services } from "../constant/service";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ServiceDetail = () => {
  const { id } = useParams();

  const service = services.find((s) => s.id.toString() === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 font-semibold">
        Service Not Found
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-16 mb-52">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <h1 className="text-4xl font-bold text-teal-700 mb-4">
              {service.title}
            </h1>
            <p className="text-gray-700 mb-6 text-lg">{service.description}</p>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Key Features:
              </h2>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="text-2xl font-bold text-teal-600 mb-6">
              {service.price}
            </div>

            <div className="flex gap-4">
              <a
                href="/quote"
                className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
              >
                Get a Quote
              </a>
              <a
                href="/contact"
                className="border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-600 hover:text-white transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
