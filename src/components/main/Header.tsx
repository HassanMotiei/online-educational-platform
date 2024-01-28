import Image from "next/image";
import Link from "next/link";

const Header = () => {
	return (
		<div className="flex justify-between items-center mt-24">
			<div>
				<Link href="/" className="btn mb-10">
					button
				</Link>
				<div className="mb-10">
					<p className="text-5xl font-bold mb-5">We at any cost</p>
					<p className="text-5xl font-bold mb-7">
						do not produce courses!
					</p>
					<p className="text-2xl">
						Learn programming with ease and progress <br />{" "}
						confidently with private academy SabzLearn
					</p>
				</div>
				<div className="flex gap-2">
					<Link href="/" className="btn">
						button
					</Link>
					<Link href="/" className="btn">
						button
					</Link>
				</div>
			</div>
			<div>
				<Image
					src={"/images/Header/boy.png"}
					width={577}
					height={612}
					alt={"Header Image"}
				/>
			</div>
		</div>
	);
};

export default Header;
