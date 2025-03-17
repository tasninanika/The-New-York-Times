import moment from "moment";
import { SlCalender } from "react-icons/sl";

const LeftSports = ({ sport }) => {
  const { title, image_url } = sport;
  return (
    <div>
      <div className="card my-10">
        <figure>
          <img
            src={image_url}
            alt="Shoes"
            className="w-[267px] h-[150px] mb-3 rounded-sm"
          />
        </figure>
        <div className="">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions flex justify-between mt-4">
            <div className="text-[#403F3F] font-semibold text-xs">Sports</div>
            <div className="text-xs font-semibold text-[#9F9F9F] flex items-center gap-2">
              <p>
                <SlCalender />
              </p>
              <p>{moment().format(" MMMM D, YYYY")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSports;
