import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { RecommendedUsers } from "../data/data";
import RecommendedUser from "./RecommendedUser";

const RecommendationBox = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      {/* Search Location Bar */}
      <div className="w-full flex items-center gap-2 border-b border-gray-400 pb-2">
        <IoLocationOutline size={16} />
        <input
          type="search"
          name="searchLocation"
          placeholder="Enter your location"
          className="outline-none grow text-sm"
        />
      </div>

      {/* Notice */}
      <div className="w-full flex items-start gap-2 text-gray-500">
        <IoIosInformationCircleOutline className="size-8 md:size-6" />
        <p className="text-xs">
          Your location will help us serve better and extend a personalised
          experience.
        </p>
      </div>

      {/* Recommended Groups */}
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex gap-2 items-center">
          <FaThumbsUp size={14} />
          <p className="uppercase text-sm tracking-wide">Recommended Groups</p>
        </div>

        <div className="w-full flex flex-col gap-4">
          {RecommendedUsers.map((user) => (
            <RecommendedUser user={user} key={user.id} />
          ))}
        </div>

        <p className="text-right text-blue-500 text-sm mt-4 font-semibold">
          See More...
        </p>
      </div>
    </div>
  );
};

export default RecommendationBox;
