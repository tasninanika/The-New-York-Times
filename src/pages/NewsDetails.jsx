import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../components/layout-component/RightNavbar";
import { FaArrowLeftLong } from "react-icons/fa6";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  return (
    <div>
      <header className="my-10">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-10">
          <h2 className="font-semibold mb-3"> News</h2>
          <div className="card bg-base-100 border-gray-200 border">
            <figure className="px-10 pt-10">
              <img src={news?.image_url} alt="news" className="rounded-xl" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-3xl font-bold my-4">
                {news?.title}
              </h2>
              <p className="text-[#706F6F] mb-5">{news?.details}</p>
              <div className="card-actions">
                <Link
                  to={`/category/${news?.category_id}`}
                  className="btn bg-[#D72050] text-white"
                >
                  <FaArrowLeftLong />
                  All news in this category{" "}
                </Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-2">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
