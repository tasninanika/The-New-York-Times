const LeftSports = ({ sport }) => {
  const { author, title, image_url } = sport;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">Sports</div>
            <div className="badge badge-outline">{author.published_date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSports;
