import { useState } from "react";
import { FaUserGroup } from "react-icons/fa6";
import { IoMdExit } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";

const TabsList = [
  {
    id: 1,
    items: 32,
    name: "All Posts",
    label: "all-posts",
    showOnMobile: true,
  },
  {
    id: 2,
    items: 0,
    name: "Article",
    label: "article",
    showOnMobile: false,
  },
  {
    id: 3,
    items: 0,
    name: "Event",
    label: "event",
    showOnMobile: false,
  },
  {
    id: 4,
    items: 0,
    name: "Education",
    label: "education",
    showOnMobile: false,
  },
  {
    id: 5,
    items: 0,
    name: "Job",
    label: "job",
    showOnMobile: false,
  },
];

const PostsSectionHeader = () => {
  const [activeTab, setActiveTab] = useState("all-posts");
  const [isJoinedGroup, setIsJoinedGroup] = useState(false);

  return (
    <div className="w-full flex items-center justify-between border-b border-gray-400">
      {/* Tabs */}
      <div className="flex items-center h-full gap-6">
        {TabsList.map((item) => (
          <div
            key={item.id}
            className={`flex items-center gap-1 cursor-pointer text-sm md:text-lg pb-6 md:pb-4 border-b-2 ${
              activeTab === item.label
                ? "text-black  border-black"
                : "text-gray-400 border-transparent"
            }
            ${!item.showOnMobile && "hidden md:block"}
            `}
            onClick={() => setActiveTab(item.label)}
          >
            <p>{item.name}</p>
            {item.items > 0 && <span>({item.items})</span>}
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex h-full items-center gap-4 ">
        <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-sm bg-gray-200 font-semibold text-sm">
          <p>Write a Post</p>
          <MdOutlineArrowDropDown size={18} />
        </button>
        {isJoinedGroup ? (
          <button
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-sm   border border-gray-400 text-gray-500 font-semibold text-sm"
            onClick={() => setIsJoinedGroup(false)}
          >
            <IoMdExit  size={18} />
            <p>Leave Group</p>
          </button>
        ) : (
          <button
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-sm bg-blue-600 text-white font-semibold text-sm"
            onClick={() => setIsJoinedGroup(true)}
          >
            <FaUserGroup size={18} />
            <p>Join Group</p>
          </button>
        )}
        <button className="flex md:hidden items-center gap-2 px-4 py-2 rounded-sm bg-gray-200 font-semibold text-sm">
          <p>Filter</p>
          <MdOutlineArrowDropDown size={18} />
        </button>
      </div>
    </div>
  );
};

export default PostsSectionHeader;
