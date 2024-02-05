import Link from "next/link";
import LastCategoryCard from "./LastCategoryCard";
import { ArrowRight } from "lucide-react";

const LastCategory = () => {
	return (
		<div className="mt-48">
			<div className="flex justify-between">
				<div>
					<p className="text-2xl">Last Category</p>
					<p className="text-xl">Current programming articles</p>
				</div>
				<Link href="/" className="text-l flex items-center">
					View allCategory <ArrowRight size={20} strokeWidth={1.5} />
				</Link>
			</div>
			<div className="flex justify-between flex-wrap mt-10">
				<LastCategoryCard />
				<LastCategoryCard />
				<LastCategoryCard />
				<LastCategoryCard />
			</div>
		</div>
	);
};

export default LastCategory;
