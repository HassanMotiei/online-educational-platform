import Link from "next/link";
import MostPopularCoursesCard from "./MostPopularCoursesCard";

const MostPopularCourses = () => {
	return (
		<div className="mt-48">
			<div className="flex justify-between">
				<div>
					<p className="text-2xl">Last Courses</p>
					<p className="text-xl">Your platform towards success</p>
				</div>
				<Link href="/" className="text-xl">
					View allCourses
				</Link>
			</div>
			<div className="flex justify-between flex-wrap mt-10">
				<MostPopularCoursesCard />
				<MostPopularCoursesCard />
				<MostPopularCoursesCard />
				<MostPopularCoursesCard />
				<MostPopularCoursesCard />
				<MostPopularCoursesCard />
				<MostPopularCoursesCard />
				<MostPopularCoursesCard />
			</div>
		</div>
	);
};

export default MostPopularCourses;
