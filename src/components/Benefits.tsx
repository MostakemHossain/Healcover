import { benefits } from "../constant/service";

const Benefits = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 mb-48">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Why Choose Insurea for Your Insurance Needs?
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          With over a decade of experience, we've helped thousands of customers
          find the perfect insurance solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="text-center">
            <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-600 text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
