import Head from "next/head";
import Image from "next/image";
import Format from "../layout/format";

// Components
import Trending from "../components/trending";
import Latest from "../components/latest";
import Popular from "../components/popular";

export default function Home() {
  return (
    <Format>
      <Trending></Trending>
      <Latest></Latest>
      <Popular></Popular>
    </Format>
  );
}
