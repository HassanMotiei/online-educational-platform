import HelperWeCard from "./HelperWeCard";

const HelperWe = () => {
	return (
		<div className="mt-24">
			<div>
				<p className="text-2xl">How can we help you?</p>
				<p className="text-xl">
					Since the Sabzleran educational academy is a private academy
				</p>
			</div>
			<div className="flex justify-between flex-wrap mt-10">
                <HelperWeCard/>
                <HelperWeCard/>
                <HelperWeCard/>
                <HelperWeCard/>
            </div>
		</div>
	);
};

export default HelperWe;
