"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { AiFillNotification } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import {
  FaHome,
  FaSearch,
  FaMusic,
  FaPlusCircle,
  FaPodcast,
  FaGlobe,
} from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { IoIosExit } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import {
  FiInstagram,
  FiTwitter,
  FiFacebook,
  FiMessageCircle,
} from "react-icons/fi";

const SideNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sideNavRef = useRef<HTMLDivElement>(null);

  // Function to handle click outside of the sidebar
  const handleClickOutside = (event: MouseEvent) => {
    if (
      sideNavRef.current &&
      !sideNavRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  // Effect to add click event listener when component mounts
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      ref={sideNavRef}
      className={`w-64 bg-gray-800 p-4 flex flex-col relative ${
        isOpen ? "block" : "hidden"
      } sm:block`}
    >
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Demo App</h1>
        <button
          className="text-white sm:hidden"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <MdMenu className="h-6 w-6" />
        </button>
      </div>
      <div className="mb-8">
        <ul className="space-y-4">
          <Link
            href="/#"
            className="flex items-center space-x-2 hover:text-gray-300"
          >
            <FaHome className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link
            href="/products"
            className="flex items-center space-x-2 hover:text-gray-300"
          >
            <IoIosExit className="h-5 w-5" />
            <span>Products</span>
          </Link>
          <Link
            href="/updates"
            className="flex items-center space-x-2 hover:text-gray-300"
          >
            <AiFillNotification className="h-5 w-5" />
            <span>Updates</span>
          </Link>
        </ul>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4 border-gray-700 flex flex-col">
        {/* Social Media Icons */}
        <div className="flex items-center space-x-4 mb-4">
          <a
            href="#"
            className="text-white hover:text-gray-300"
            aria-label="Instagram"
          >
            <FiInstagram className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300"
            aria-label="Twitter"
          >
            <FiTwitter className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300"
            aria-label="Facebook"
          >
            <FiFacebook className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-300"
            aria-label="WhatsApp"
          >
            <FiMessageCircle className="h-6 w-6" />
          </a>
        </div>

        {/* Container for Contact Form */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Contact Us</h2>
          <form>
            <textarea
              placeholder="Your message..."
              rows={3} // Specify the number of rows (height) for the textarea
              className="bg-gray-900 text-white border border-gray-700 px-3 py-2 rounded-md w-full resize-none focus:outline-none focus:border-gray-500"
            ></textarea>
            <button
              type="submit"
              className="mt-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md focus:outline-none"
            >
              Send
            </button>
          </form>
        </div>

        {/* Container for Company Details */}
        <div className="mt-8">
          <h2 className="text-lg font-bold text-white mb-4">Company Details</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            ex non lectus convallis rutrum ac nec libero.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
