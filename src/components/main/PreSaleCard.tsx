import Link from "next/link";

const PreSaleCard = () => {
	return (
		<div className="card card-compact w-[18.5rem] bg-base-100 shadow-xl m-2.5">
			<figure>
				<img
					src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
					alt="Shoes"
				/>
			</figure>
			<div className="card-body">
				<Link href="/" className="btn w-fit">
					FrontEnd
				</Link>
				<Link href="/">FrontEnd</Link>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div className="flex justify-between">
					<div className="flex gap-4">
						<Link href="/">Hassan Motiei</Link>
						<p>61:50</p>
					</div>
					<div>
						<p>5.0</p>
					</div>
				</div>
				<hr />
				<div className="flex justify-between">
					<div>
						<p>325</p>
					</div>
					<div>
						<p>325</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PreSaleCard;