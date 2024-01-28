import Header from "@/components/main/Header";
import LatestCourses from "@/components/main/LatestCourses";
import RoadMap from "@/components/main/RoadMap";

export default function Home() {
  return (
		<main>
			<Header />
			<LatestCourses />
			<RoadMap />
		</main>
  );
}
