import Link from "next/link";
import LastCoursesCard from "./LastCoursesCard";

const LastCourses = () => {
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
				<LastCoursesCard />
				<LastCoursesCard />
				<LastCoursesCard />
				<LastCoursesCard />
				<LastCoursesCard />
				<LastCoursesCard />
				<LastCoursesCard />
				<LastCoursesCard />
				<LastCoursesCard />
				<LastCoursesCard />
				<LastCoursesCard />
				<LastCoursesCard />
			</div>
		</div>
	);
};

export default LastCourses;
