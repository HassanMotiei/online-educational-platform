import Link from "next/link";
// import {AlgoliaSearch} from "./AlgoliaSearch";

const Navbar = () => {
	return (
		<div className="navbar bg-base-100 min-h-24">
			<div className="flex-1">
				<Link href="/" className="btn btn-ghost text-xl">
					daisyUI
				</Link>
				<ul className="menu menu-horizontal px-1">
					<li>
						<details>
							<summary>Parent 1</summary>
							<ul className="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<details>
							<summary>Parent 2</summary>
							<ul className="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<details>
							<summary>Parent 3</summary>
							<ul className="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<details>
							<summary>Parent 4</summary>
							<ul className="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<details>
							<summary>Parent 5</summary>
							<ul className="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<details>
							<summary>Parent 6</summary>
							<ul className="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</details>
					</li>
				</ul>
			</div>
			<div className="flex-none gap-2">
				<div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs" />
                </div>
				{/* <AlgoliaSearch /> */}
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn m-1">
						Theme
						<svg
							width="12px"
							height="12px"
							className="h-2 w-2 fill-current opacity-60 inline-block"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 2048 2048"
						>
							<path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-48"
					>
						<li>
							<input
								type="radio"
								name="theme-dropdown"
								className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
								aria-label="Default"
								value="default"
							/>
						</li>
						<li>
							<input
								type="radio"
								name="theme-dropdown"
								className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
								aria-label="Dark"
								value="dark"
							/>
						</li>
						<li>
							<input
								type="radio"
								name="theme-dropdown"
								className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
								aria-label="Light"
								value="light"
							/>
						</li>
						<li>
							<input
								type="radio"
								name="theme-dropdown"
								className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
								aria-label="Synthwave"
								value="synthwave"
							/>
						</li>
						<li>
							<input
								type="radio"
								name="theme-dropdown"
								className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
								aria-label="Bumblebee"
								value="bumblebee"
							/>
						</li>
						<li>
							<input
								type="radio"
								name="theme-dropdown"
								className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
								aria-label="Halloween"
								value="halloween"
							/>
						</li>
						<li>
							<input
								type="radio"
								name="theme-dropdown"
								className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
								aria-label="Luxury"
								value="luxury"
							/>
						</li>
						<li>
							<input
								type="radio"
								name="theme-dropdown"
								className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
								aria-label="Night"
								value="night"
							/>
						</li>
					</ul>
				</div>
				<div className="dropdown dropdown-end">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost btn-circle avatar"
					>
						<div className="w-10 rounded-full">
							<img
								alt="Tailwind CSS Navbar component"
								src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
							/>
						</div>
					</div>
					<ul
						tabIndex={0}
						className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
					>
						<li>
							<a className="justify-between">
								Profile
								<span className="badge">New</span>
							</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
