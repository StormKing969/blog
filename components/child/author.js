import Image from "next/image";
import Link from "next/link";

export const author = () => {
  return (
    <div className="author flex py-5">
      <Image
        src={"/images/fluency/author.jpg"}
        width={60}
        height={60}
        className="rounded-full"
        alt="author"
      />
      <div className="flex flex-col justify-center px-4">
        <Link href={"/"}>
          <a className="text-md font-bold text-gray-800 hover:text-gray-600">
            Sajana Wijesinghe
          </a>
        </Link>
        <span className="text-sm text-gray-500">CEO and Founder</span>
      </div>
    </div>
  );
};

export default author;
