import PostCard from "../components/PostCard";
import PostsSectionHeader from "../components/PostsSectionHeader";
import RecommendationBox from "../components/RecommendationBox";
import { PostData } from "../data/data";

const PostSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-2 sm:px-4 ">
      <PostsSectionHeader />

      <div className="w-full flex flex-col md:grid md:grid-cols-[3fr_1.3fr] lg:grid-cols-[3fr_1fr] md:gap-8">
        {/* Posts container */}
        <div className="w-full flex flex-col gap-2 mt-6 md:pr-8">
          {PostData.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Recommendation Container */}
        <div className="mt-6 max-w-lg mx-auto hidden md:block">
          <RecommendationBox />
        </div>
      </div>
    </section>
  );
};

export default PostSection;
