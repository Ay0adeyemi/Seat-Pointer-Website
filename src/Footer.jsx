
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo / About Section */}
        <div>
          <h2 className="text-xl font-semibold text-white">Seatpointer</h2>
          <p className="mt-3 text-sm leading-relaxed">
            We guarantee the authenticity and validity of all tickets purchased
            through our platform. Your satisfaction and peace of mind are our
            top priorities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Events</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Support / Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Need Help?</h3>
          <p className="text-sm">
            Our support team is here before, during, and after your event.
          </p>
          <p className="mt-3 text-sm">
            <span className="font-semibold">Email:</span> support@seatpointer.com
          </p>
          <p className="text-sm">
            <span className="font-semibold">Phone:</span> +1 (555) 123-4567
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
          <p className="text-sm mb-3">
            Subscribe to get the latest event updates and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Seatpointer. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;