import { useState } from "react";

const RecommendedUser = ({ user }) => {
  const [isFollowed, setIsFollowed] = useState(user.isFollowed);

  return (
    <div className="w-full flex items-center">
      <div className="flex items-center grow gap-2">
        <img
          src={user.userIcon}
          alt="userIcon"
          className="size-8 rounded-full "
        />
        <p className="text-sm ">{user.name}</p>
      </div>
      <button
        className={`w-24 px-4 py-2 rounded-2xl text-xs font-semibold tracking-wide cursor-pointer transition-all duration-150 ease-in ${
          isFollowed ? "bg-black text-white" : "bg-gray-300 text-black"
        }`}
        onClick={() => setIsFollowed(!isFollowed)}
      >
        {isFollowed ? "Followed" : "Follow"}
      </button>
    </div>
  );
};

export default RecommendedUser;
