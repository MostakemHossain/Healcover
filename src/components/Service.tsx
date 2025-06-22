import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Service = () => {
  const services = [
    {
      title: "Home Insurance",
      description:
        "Our staff has been working in the industry for many years. We offer guidance and help you make the right decisions",
      image: "../../public/home.jpg",
      link: "/services/home",
    },
    {
      title: "Auto Insurance",
      description:
        "Our staff has been working in the industry for many years. We offer guidance and help you make the right decisions",
      image: "../../public/auto.png",
      link: "/services/auto",
    },
    {
      title: "Health Insurance",
      description:
        "Our staff has been working in the industry for many years. We offer guidance and help you make the right decisions",
      image: "../../public/health.jpg",
      link: "/services/health",
    },
    {
      title: "Business Insurance",
      description:
        "Our staff has been working in the industry for many years. We offer guidance and help you make the right decisions",
      image: "../../public/business.jpg",
      link: "/services/business",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div className="mb-6 lg:mb-0">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Our Services
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-2xl">
              We offer guidance help you make the right{" "}
              <span className="bg-yellow-200">decisions</span> for{" "}
              <span className="bg-yellow-200">yourself</span>.
            </h2>
          </div>

          <div className="flex-shrink-0">
            <Link
              to="/services"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
            >
              View More Services
              <div className="w-6 h-6  rounded-full flex items-center justify-center">
                <BsArrowRight />
              </div>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl p-6  hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="mb-6 w-full h-32 flex items-center justify-center rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-contain"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <Link
                to={service.link}
                className="inline-flex items-center gap-2 text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200 group-hover:text-teal-600"
              >
                Read More
                <BsArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
