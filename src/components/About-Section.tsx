import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HiCheck } from "react-icons/hi";
import aboutImage from "../../public/insurence.jpg";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: "ease-in-out" });
  }, []);

  const insuranceTypes = [
    "Health Insurance",
    "Education Insurance",
    "Auto Insurance",
    "Home Insurance",
  ];

  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className="flex items-center justify-center order-2 lg:order-1"
            data-aos="zoom-in"
          >
            <img
              src={aboutImage}
              className="rounded-md h-full"
              alt="About Us"
            />
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
              data-aos="fade-up"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              About Us
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Our staff has been working in the industry for{" "}
              <span className="bg-yellow-200">many years</span>.
            </h2>

            <div className="space-y-4">
              <p
                className="text-gray-600 text-lg leading-relaxed"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                Most of us know our driving record affects our car insurance
                rates. But, do you know that your region and even your
                neighborhood impacts your home, business, and car insurance
                rates Marin County.
              </p>

              <p
                className="text-gray-600 text-lg leading-relaxed"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                Our staff has been working in the industry for many years. We
                offer guidance and help you make the right decisions for
                yourself.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {insuranceTypes.map((type, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                  data-aos="fade-right"
                  data-aos-delay={400 + index * 100}
                >
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{type}</span>
                </div>
              ))}
            </div>

            <div
              className="flex items-center gap-4"
              data-aos="flip-left"
              data-aos-delay={800}
            >
              <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center">
                <HiCheck />
              </div>
              <div>
                <p className="text-gray-500 text-sm">Call Anytime</p>
                <p className="text-gray-900 text-xl font-bold">
                  <a
                    href="tel:496-525-9376"
                    className="hover:text-teal-600 transition-colors"
                  >
                    496-525-9376
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

export default AboutSection;
