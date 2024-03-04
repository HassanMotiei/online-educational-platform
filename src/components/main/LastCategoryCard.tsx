import { ArrowRightCircle, Calendar, UserRound } from "lucide-react";
import Link from "next/link";

const LastCategoryCard = () => {
	return (
		<div className="card card-compact w-[18.5rem] bg-base-100 shadow-xl m-2.5">
			<figure>
				<img
					src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
					alt="Shoes"
				/>
			</figure>
			<div className="card-body">
				<Link href="/">
					Implementation of professional dashboards with CSS and JS
				</Link>
				<p className="text-sm">
					If a dog chews shoes whose shoes does he choose?
				</p>
				<div className="flex justify-between">
					<div className="flex gap-4">
						<Link
							href="/"
							className="text-sm flex items-center gap-1"
						>
							<UserRound size={20} />
							Hassan Motiei
						</Link>
						<p className="text-sm flex items-center gap-1">
							<Calendar size={20} />
							02/05/2024
						</p>
					</div>
				</div>
				<hr />
				<div className="flex justify-center">
					<div>
						<p className="text-sm flex items-center gap-1">
							Study Article
							<ArrowRightCircle size={20} />
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LastCategoryCard;
