import Format from "../layout/format";

// Components
import Trending from "../components/trending";
import Articles from "../components/articles";
import Popular from "../components/popular";
import Categories from "../components/categories";

export default function Home() {
  return (
    <Format>
      <Trending></Trending>
      <Articles></Articles>
      <Popular></Popular>
      <Categories></Categories>
    </Format>
  );
}
