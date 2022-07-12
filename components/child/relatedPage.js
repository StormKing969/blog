import Image from "next/image";
import Link from "next/link";
import Author from "./author";

function Post() {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={"/"}>
          <a>
            <Image
              src={"/images/blogPostImg/fluency.jpg"}
              width={300}
              height={200}
              alt="Trending Post Image"
              className="rounded"
            />
          </a>
        </Link>
      </div>

      <div className="info flex justify-center flex-col">
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

        <Author></Author>
      </div>
    </div>
  );
}

export const relatedPage = () => {
  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10">Related Blog Posts</h1>

      <div className="flex flex-col gap-10">
      {Post()}
      {Post()}
      {Post()}
      </div>
    </section>
  );
};

export default relatedPage;
