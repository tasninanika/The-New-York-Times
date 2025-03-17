const LeftSports = ({ sport }) => {
  const { author, title, image_url } = sport;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img
            src={image_url}
            alt="Shoes"
            className="w-[267px] h-[150px] mb-3"
          />
        </figure>
        <div className="">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions flex justify-between">
            <div className="badge badge-outline">Sports</div>
            <div className="text-sm text-[#9F9F9F]">Jan 4, 2025</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSports;
