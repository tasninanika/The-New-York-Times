import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center">
      <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>
      <Marquee>
        <Link to="/news">
          Match Highlights: Germany vs Spain — As it happened! ⚽🔥 | Final
          Score: 2-1 | Top Scorers: Müller ⚽, Morata ⚽ | Next Match: France vs
          Italy 🏆 Stay tuned for more updates!
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
