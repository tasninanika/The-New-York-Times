import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-4 items-center bg-base-200 py-3 px-3">
      <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>
      <Marquee pauseOnHover={true} className="space-x-10">
        <Link to="/news">
          Match Highlights: Germany vs Spain — As it happened! ⚽🔥 | Final
          Score: 2-1 | Top Scorers: Müller ⚽, Morata ⚽ | Next Match: France vs
          Italy 🏆 Stay tuned for more updates!
        </Link>
        <Link to="/news">
          Breaking: Manchester United signs a new star player! ⚽🔥 Transfer
          deal worth €80M confirmed. Fans are excited for the upcoming season!
        </Link>
        <Link to="/news">
          Champions League Thriller! 🏆 Real Madrid secures a last-minute
          victory against PSG with a stunning goal from Vinícius Jr. ⚡ Watch
          the highlights now!
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
