import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-white  flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-extrabold text-teal-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold  mb-2">Page Not Found</h2>
        <p className="text-gray-600  mb-6">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
