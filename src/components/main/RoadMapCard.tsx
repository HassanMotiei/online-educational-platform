import Link from "next/link";

const RoadMapCard = () => {
	return (
		<div className="card w-[19rem] bg-primary text-primary-content m-2.5">
			<Link href="/" className="card-body">
				<div className="absolute left-3 top-3 rounded-full bg-gray-600 py-0.5 px-1.5">
					<p>12</p>
				</div>
				<div className="flex flex-col justify-center items-center gap-5">
					<p>dog</p>
					<h2 className="card-title">Card title!</h2>
				</div>
			</Link>
		</div>
	);
};

export default RoadMapCard;
