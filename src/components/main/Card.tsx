import { DollarSign, Clock, Star, UserRound, Users } from "lucide-react";
import Link from "next/link";
import _ from "lodash";

interface  courseDataType  {
	id: number;
	img: string;
	dev: string;
	title: string;
	score: string;
	desc: string;
	user: string;
	time: string;
	price: number;
	numberUsers: number;
};

const Card = (props: courseDataType) => {
	const originalText = props.desc;
	const maxLength = 100;

	const truncatedText = _.truncate(originalText, {
		length: maxLength,
		separator: " ",
	});
	return (
		<div className="card card-compact w-[18.5rem] bg-base-100 shadow-xl m-2.5">
			<figure>
				<Link href={`/courses/${props.id}`}>
					<img src={props.img} alt={props.title} />
				</Link>
			</figure>
			<div className="card-body">
				<Link href="/" className="btn btn-sm w-fit btn-warning">
					{props.dev}
				</Link>
				<Link href={`/courses/${props.id}`}>{props.title}</Link>
				<p className="text-sm">{truncatedText}</p>
				<div className="flex justify-between">
					<div className="flex gap-4">
						<Link
							href="/"
							className="text-sm flex items-center gap-1"
						>
							<UserRound size={20} />
							{props.user}
						</Link>
						<p className="text-sm flex items-center gap-1">
							<Clock size={20} />
							{props.time}
						</p>
					</div>
					<div>
						<p className="text-sm text-yellow-400 flex items-center gap-1">
							<Star size={20} strokeWidth={3} />
							{props.score}
						</p>
					</div>
				</div>
				<hr />
				<div className="flex justify-between">
					<div>
						<p className="text-lime-500 flex items-center">
							{props.price}
							<DollarSign size={20} />
						</p>
					</div>
					<div>
						<p className="text-sm flex items-center gap-1">
							<Users size={20} />
							{props.numberUsers}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
