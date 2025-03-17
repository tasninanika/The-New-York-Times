import { FaRegEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import moment from "moment";
import { CiShare2 } from "react-icons/ci";
import { BsBookmark } from "react-icons/bs";

const NewsCard = (props = {}) => {
  const { news } = props || {};

  return (
    <div className=" bg-white rounded-lg mx-10 border-gray-100 border-2 mb-10">
      {/* Author Information */}
      <div className="flex items-center mb-4 py-4 px-4 bg-[#F3F3F3]">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="font-semibold">{news.author.name}</p>
          <p className="text-sm text-gray-500">
            {moment(news.author.published_date).format("  YYYY-MM-D")}
          </p>
        </div>
        <div className="ml-auto flex gap-2 text-gray-500 text-3xl items-center">
          <BsBookmark className="text-2xl" />
          <CiShare2 />
        </div>
      </div>

      <div className="p-4">
        {/* Title */}
        <h2 className="text-xl font-semibold mb-4">{news.title}</h2>

        {/* Thumbnail Image */}
        <img
          src={news.image_url}
          alt="Thumbnail"
          className="w-full  object-cover rounded-lg mb-6"
        />

        {/* Details */}
        <p className="text-[#706F6F] text-base border-b border-gray-200 pb-4 mb-4">
          {news.details.slice(0, 200)}...{" "}
          <Link to={`/news/${news._id}`} className="text-orange-500">
            Read More
          </Link>
        </p>

        {/* Ratings and Views */}
        <div className="flex items-center justify-between text-gray-600 text-sm">
          {/* Rating */}
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <AiFillStar
                key={i}
                className={`text-orange-500 ${
                  i < Math.round(news.rating.number) ? "" : "opacity-50"
                }`}
              />
            ))}
            <span className="ml-2 font-semibold">{news.rating.number}</span>
          </div>

          {/* Views */}
          <div className="flex items-center">
            <FaRegEye className="mr-1" />
            <span>{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
