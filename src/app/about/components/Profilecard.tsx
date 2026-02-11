'use client'
import React from "react";
import { FaPaintRoller } from "react-icons/fa6";
const ProfileCard = ({
  imageUrl = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  name = "Sophie Bennett",
  isVerified = true,
  title = "Product Designer who focuses on simplicity & usability.",
  followers = 312,
  projects = 48,
  onFollowClick = () => {},
  isFollowing = false,
  className = "",
}) => {
  return (
    <div className={`w-full max-w-sm mx-auto ${className}`}>
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-[1.02]">
        {/* Image Container */}
        <div className="relative w-full aspect-square bg-gradient-to-br from-blue-50 to-purple-50 p-6 sm:p-8">
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="p-6 sm:p-8">
          {/* Name and Verification */}
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {name}
            </h2>
            {isVerified && (
              <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            )}
          </div>

          {/* Title/Description */}
          <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
            {title}
          </p>

          {/* Stats and Follow Button */}
          <div className="flex items-center justify-between gap-4">
            {/* Stats */}
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Followers */}
              <div className="flex items-center gap-2 text-gray-700">
               <FaPaintRoller />
                <span className="font-semibold text-lg sm:text-xl">
                  {followers.toLocaleString()} years Experience
                </span>
              </div>

              {/* Projects */}
              {/* <div className="flex items-center gap-2 text-gray-700">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <span className="font-semibold text-lg sm:text-xl">
                  {projects}
                </span>
              </div> */}
            </div>

            {/* Follow Button */}
            {/* <button
              onClick={onFollowClick}
              className={`
                px-5 sm:px-6 py-2.5 sm:py-3 
                rounded-xl font-semibold text-base sm:text-lg
                transition-all duration-200
                flex items-center gap-2
                ${
                  isFollowing
                    ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }
              `}
            >
              {isFollowing ? "Following" : "Follow"}
              {!isFollowing && (
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 4v16m8-8H4"></path>
                </svg>
              )}
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
