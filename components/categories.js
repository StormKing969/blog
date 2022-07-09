import Image from "next/image";
import Link from "next/link";
import Author from "./child/author";

function Post() {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={"/"}>
          <a>
            <Image
              src={"/images/fluency/fluency.jpg"}
              width={300}
              height={250}
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

export const categories = () => {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl py-12 text-center">Education</h1>

          <div className="flex flex-col gap-6">
            {/* Post */}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
          </div>
        </div>

        <div className="item">
          <h1 className="font-bold text-4xl py-12 text-center">Violence</h1>
          <div className="flex flex-col gap-6">
            {/* Post */}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default categories;
