// Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-10 text-white md:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
        {/* Bio Section */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-semibold">Your Name</h2>
          <p className="mt-2 text-sm">
            A passionate developer and designer focused on creating impactful
            web experiences.
          </p>
          <div className="mt-4 flex space-x-4">
            {/* Social Icons */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/github.svg"
                alt="GitHub"
                className="h-6 transform transition hover:scale-110"
              />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                className="h-6 transform transition hover:scale-110"
              />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/twitter.svg"
                alt="Twitter"
                className="h-6 transform transition hover:scale-110"
              />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start">
          <h3 className="mb-3 text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#about"
                className="transition-colors hover:text-gray-200"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="transition-colors hover:text-gray-200"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition-colors hover:text-gray-200"
              >
                Contact
              </a>
            </li>
            <li>
              <a href="#blog" className="transition-colors hover:text-gray-200">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-start">
          <h3 className="mb-3 text-xl font-semibold">Stay Updated</h3>
          <p className="mb-4 text-sm">
            Subscribe to my newsletter for the latest updates and articles.
          </p>
          <form className="flex w-full flex-col gap-2 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <button
              type="submit"
              className="rounded-md bg-white px-4 py-2 text-indigo-600 transition hover:bg-gray-100"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-white/10 pt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
