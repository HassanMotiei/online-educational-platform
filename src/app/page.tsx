import Header from "@/components/main/Header";
import LastCourses from "@/components/main/LastCourses";
import RoadMap from "@/components/main/RoadMap";
import HelperWe from "@/components/main/HelperWe";
import LatestCourses from "@/components/main/LatestCourses";
import LastCategory from "@/components/main/LastCategory";
import PreSale from "@/components/main/PreSale";
import MostPopularCourses from "@/components/main/MostPopularCourses";


export default function Home() {
  return (
		<main>
			<Header />
			<LastCourses />
			<RoadMap />
			<HelperWe />
			<LatestCourses />
			<LastCategory />
			<PreSale />
			<MostPopularCourses />
		</main>
  );
}
