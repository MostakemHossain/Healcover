import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { testimonials } from "../constant/testimonials";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="text-yellow-400 text-lg">
        {"★".repeat(rating) + "☆".repeat(5 - rating)}
      </div>
    );
  };

  return (
    <section id="testimonial" className="py-16 px-4 bg-gradient-to-br from-green-400 to-green-500">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div className="mb-6 lg:mb-0">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Testimonial
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl">
              We offer guidance to help you make the right decisions for
              yourself.
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-teal-600 hover:bg-teal-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
              aria-label="Previous testimonials"
            >
              <BsArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white hover:bg-gray-100 text-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
              aria-label="Next testimonials"
            >
              <BsArrowRight />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }, (_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {testimonials
                    .slice(
                      slideIndex * itemsPerSlide,
                      (slideIndex + 1) * itemsPerSlide
                    )
                    .map((testimonial, index) => (
                      <div
                        key={`${slideIndex}-${index}`}
                        className={`relative rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                          testimonial.cardType === "teal"
                            ? "bg-teal-600 text-white"
                            : "bg-white text-gray-900"
                        }`}
                      >
                        <div className="absolute -top-1 z-20 m-2 left-8">
                          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <img
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        <div className="pt-12 mt-2">
                          <p
                            className={`text-sm leading-relaxed mb-8 ${
                              testimonial.cardType === "teal"
                                ? "text-teal-50"
                                : "text-gray-600"
                            }`}
                          >
                            "{testimonial.text}"
                          </p>

                          <div className="space-y-2">
                            <h4
                              className={`font-bold text-lg ${
                                testimonial.cardType === "teal"
                                  ? "text-white"
                                  : "text-gray-900"
                              }`}
                            >
                              {testimonial.name}
                            </h4>
                            <p
                              className={`text-sm ${
                                testimonial.cardType === "teal"
                                  ? "text-teal-100"
                                  : "text-gray-500"
                              }`}
                            >
                              {testimonial.role}
                            </p>
                            <div className="pt-2">
                              {renderStars(testimonial.rating)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                currentSlide === index ? "bg-white" : "bg-white bg-opacity-40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
