import moment from "moment";

const Header = () => {
  return (
    <div className="flex flex-col items-center gap-2 mb-10">
      <h2 className="text-6xl font-unifrakturmaguntia">The New York Times</h2>
      <p className="text-[#706F6F] ">Journalism Without Fear or Favour</p>
      <p className="text-[#403F3F] font-medium">
        {moment().format("dddd, MMMM D, YYYY")}
      </p>
    </div>
  );
};

export default Header;
