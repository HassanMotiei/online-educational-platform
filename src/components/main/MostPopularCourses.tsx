import Link from "next/link";
import Card from "./Card";
import { ArrowRight } from "lucide-react";

const MostPopularCourses = () => {
	return (
		<div className="mt-48">
			<div className="flex justify-between">
				<div>
					<p className="text-2xl">Last Courses</p>
					<p className="text-xl">Your platform towards success</p>
				</div>
				<Link href="/" className="text-l flex items-center">
					View allCourses <ArrowRight size={20} strokeWidth={1.5} />
				</Link>
			</div>
			<div className="flex justify-between flex-wrap mt-10">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default MostPopularCourses;
