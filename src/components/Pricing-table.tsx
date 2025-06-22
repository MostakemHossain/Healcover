import { useState } from "react";
import { Link } from "react-router-dom";
import { pricingPlans } from "../constant/pricing-plan";
import { HiCheck } from "react-icons/hi";

const PricingTable = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-16 px-4 bg-gray-50 mt-10 mb-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div className="mb-6 lg:mb-0">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Pricing Plan
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-2xl">
              Choose the plan that fits your lifestyle and <span className="bg-yellow-200 ">health needs</span>.
            </h2>
          </div>
          <div className="flex-shrink-0">
            <Link
              to="/quote"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
            >
              Get Started Plan
              <div className="w-6 h-6  rounded-full flex items-center justify-center">
                <HiCheck />
              </div>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mb-12">
          <span
            className={`text-lg font-medium ${
              !isAnnual ? "text-gray-900" : "text-gray-500"
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
              isAnnual ? "bg-teal-600" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isAnnual ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span
            className={`text-lg font-medium ${
              isAnnual ? "text-gray-900" : "text-gray-500"
            }`}
          >
            Annual
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl ${
                plan.featured
                  ? "bg-teal-600 text-white scale-105 lg:scale-110"
                  : "bg-white text-gray-900 hover:scale-105"
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-4 ${
                  plan.featured ? "text-white" : "text-gray-900"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  plan.featured ? "text-teal-100" : "text-gray-600"
                }`}
              >
                Free 7 day trial. No credit card required.
                <br />
                Cancel Anytime
              </p>
              <div className="mb-8">
                <span
                  className={`text-4xl font-bold ${
                    plan.featured ? "text-white" : "text-gray-900"
                  }`}
                >
                  ${isAnnual ? plan.price.annual : plan.price.monthly}.00
                </span>
                <span
                  className={`text-lg ${
                    plan.featured ? "text-teal-100" : "text-gray-600"
                  }`}
                >
                  /{isAnnual ? "year" : "month"}
                </span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.featured ? "bg-white" : "bg-teal-100"
                      }`}
                    >
                      <HiCheck className="text-teal-500" />
                    </div>
                    <span
                      className={`text-sm ${
                        plan.featured ? "text-teal-50" : "text-gray-700"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 ${
                  plan.featured
                    ? "bg-white text-teal-600 hover:bg-gray-100"
                    : "bg-teal-600 text-white hover:bg-teal-700"
                }`}
              >
                Try Free for 7 Days
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    plan.featured ? "bg-teal-600 text-white" : ""
                  }`}
                >
                  <HiCheck />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
