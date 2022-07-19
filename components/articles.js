import Image from "next/image";
import Link from "next/link";
import Author from "./child/author";
import getPost from "../lib/helper";
import fetcher from "../lib/fetcher";

function Post() {
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <a>
            <Image
              src={"/images/blogPostImg/fluency.jpg"}
              width={500}
              height={350}
              className="rounded"
              alt="Trending Post Image"
            />
          </a>
        </Link>
      </div>

      <div className="info flex justify-center flex-col py-4">
        <div className="category">
          <Link href={"/"}>
            <a className="text-orange-600 hover:text-orange-800">Education</a>
          </Link>
          <Link href={"/"}>
            <a className="text-gray-800 hover:text-gray-600"> - July 3, 2016</a>
          </Link>
        </div>

        <div className="title">
          <Link href={"/"}>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
              Fluency
            </a>
          </Link>
        </div>

        <p className="text-gray-900 py-3">
          What do it mean to be fluent in a language? Over the years, the
          language that we speak evolves and adapts to what the masses
        </p>

        <Author></Author>
      </div>
    </div>
  );
}

export const articles = () => {
//   getPost(2).then((post) => {
//     console.log(post);
//   });
const {data, isLoading, isError} = fetcher("api/posts")
console.log(data);

  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-center text-4xl py-12">All Posts</h1>

      {/* Grid Columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
      </div>
    </section>
  );
};

export default articles;
