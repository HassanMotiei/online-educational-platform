import Link from "next/link";
import LatestCoursesCard from "./LatestCoursesCard";

const LatestCourses = () => {
	return (
		<div className="mt-48">
			<div className="flex justify-between">
				<div>
					<p className="text-2xl">Latest Courses</p>
					<p className="text-xl">Your platform towards success</p>
				</div>
				<Link href="/" className="text-xl">
					View allCourses
				</Link>
			</div>
			<div className="flex justify-between flex-wrap mt-10">
				<LatestCoursesCard />
				<LatestCoursesCard />
				<LatestCoursesCard />
				<LatestCoursesCard />
				<LatestCoursesCard />
				<LatestCoursesCard />
				<LatestCoursesCard />
				<LatestCoursesCard />
				<LatestCoursesCard />
				<LatestCoursesCard />
				<LatestCoursesCard />
				<LatestCoursesCard />
			</div>
		</div>
	);
};

export default LatestCourses;
