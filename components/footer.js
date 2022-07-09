import { ImFacebook } from "react-icons/im";
import { ImYoutube } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import Link from "next/link";
import Newsletter from "./child/newsletter";

export const footer = () => {
    const bg = {
        backgroundImage: "url('./footer.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom left"
    }
  return (
    <footer className="bg-gray-50" style={bg}>
      <Newsletter></Newsletter>

      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href={"/"}>
              <a>
                <ImFacebook color="#888888" />
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <ImYoutube color="#888888" />
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <ImTwitter color="#888888" />
              </a>
            </Link>
          </div>

          <p className="py-5 text-gray-400">
            Copyright &copy;2022 All rights reserved | Sajana Wijesinghe
          </p>
          <p className="text-gray-400 text-center">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
