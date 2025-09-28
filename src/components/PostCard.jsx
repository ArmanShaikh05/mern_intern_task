import { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import { IoMdCalendar, IoMdShare } from "react-icons/io";
import { IoEyeOutline, IoLocationOutline } from "react-icons/io5";
import { TbBriefcase2 } from "react-icons/tb";

const PostCard = ({ post }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className="w-full flex flex-col md:rounded-sm overflow-hidden border border-gray-400 max-w-6xl mx-auto">
      {/* Card Image */}
      <img
        src={post.postImage}
        alt="postImage"
        className="w-full h-[220px] object-cover"
      />

      {/* Card Body */}
      <div className="flex w-full flex-col px-4 mt-2 gap-2">
        <span className="font-semibold text-sm mt-2">{post.tag}</span>

        {/* Card Title */}
        <div className="flex w-full items-start gap-8 relative">
          <h2 className="text-lg font-semibold tracking-tight leading-6 w-full">
            {post.title}
          </h2>
          <FaEllipsisH
            size={16}
            className={`mt-1 w-8 h-6 p-1 rounded-sm  cursor-pointer ${showDropDown && "bg-gray-400/80"}`}
            onClick={()=>setShowDropDown(!showDropDown)}
          />

          {/* Card Dropdown */}
          {showDropDown && (<div className="flex flex-col rounded-sm shadow-[0px_0px_1rem_rgba(0,0,0,0.4)] w-40 gap-2 absolute right-0  top-10 z-25 px-4 bg-white py-1">
                <span className="w-full cursor-pointer py-1 text-sm">Edit</span>
                <span className="w-full cursor-pointer py-1 text-sm">Report</span>
                
          </div>)}
        </div>

        {/* Card Tags */}
        {(post.location || post.date || post.companyName) && (
          <div className="w-full flex items-center gap-10 flex-wrap ">
            {post.date && (
              <div className="flex items-center gap-1 text-xs font-semibold ">
                <IoMdCalendar size={16} />
                <span>{post.date}</span>
              </div>
            )}
            {post.companyName && (
              <div className="flex items-center gap-1 text-xs font-semibold ">
                <TbBriefcase2 size={16} />
                <span>{post.companyName}</span>
              </div>
            )}
            {post.location && (
              <div className="flex items-center gap-1 text-xs font-semibold ">
                <IoLocationOutline size={16} />
                <span>{post.location}</span>
              </div>
            )}
          </div>
        )}

        {/* Card Description */}
        {post.description && (
          <p className="text-sm line-clamp-1 w-full mb-2">{post.description}</p>
        )}

        {/* Card job Button */}
        {post.isJobPost && (
          <button className="w-full py-2 flex items-center justify-center border border-gray-300 text-green-500 mt-4 rounded-sm text-sm font-semibold tracking-tight">
            Apply on Timesjobs
          </button>
        )}

        {/* Card Website Button */}
        {post.haveWebsiteLink && (
          <button className="w-full py-2 flex items-center justify-center border border-gray-300 text-red-500 mt-4 rounded-sm text-sm font-semibold tracking-tight">
            Visit Website
          </button>
        )}
      </div>

      {/* Card Footer */}
      <div className="w-ful flex items-center px-4 my-4">
        <div className="grow flex gap-2 items-center">
          <img
            src={post.userIcon}
            alt="user Photo"
            className="aspect-square w-10 md:w-12 rounded-full"
          />
          <span className="font-medium tracking-tight text-sm ">
            {post.userName}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-xs">
            <IoEyeOutline size={16} />
            <span>{post.views} views</span>
          </div>
          <IoMdShare className="size-7 md:size-9 bg-gray-200 p-[8px] rounded-sm cursor-pointer hover:bg-gray-300 transition-all duration-200 ease-in" />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
