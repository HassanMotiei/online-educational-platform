import RoadMapCard from "./RoadMapCard";

const RoadMap = () => {
	return (
		<div className="mt-24">
			<div>
				<p className="text-2xl">Road Map</p>
				<p className="text-xl">
					Roadmaps to start the basics of learning
				</p>
			</div>
			<div className="flex justify-between flex-wrap mt-10">
				<RoadMapCard />
				<RoadMapCard />
				<RoadMapCard />
				<RoadMapCard />
			</div>
		</div>
	);
};

export default RoadMap;
