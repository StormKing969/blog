import Head from "next/head";
import Image from "next/image";
import Format from "../layout/format";

// Components
import Trending from "../components/trending";

export default function Home() {
  return (
    <Format>
      <Trending></Trending>
    </Format>
  );
}
