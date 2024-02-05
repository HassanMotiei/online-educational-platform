"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

// import {AlgoliaSearch} from "./AlgoliaSearch";

const Navbar = () => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="navbar bg-base-100 min-h-24">
			<div className="flex-1">
				<Link href="/">
					<Image
						src={"/images/navbar/logo.png"}
						alt="Logo"
						width={80}
						height={40}
					/>
				</Link>
				<div
					className={`dropdown dropdown-hover ${
						isHovered ? "hovered" : ""
					}`}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost m-1"
					>
						Hover
						{isHovered ? <ChevronUp /> : <ChevronDown />}
					</div>
					<ul
						tabIndex={0}
						className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a>Item 1</a>
						</li>
						<li>
							<a>Item 2</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="flex-none gap-2">
				<div className="form-control">
					<input
						type="text"
						placeholder="Search"
						className="input input-bordered w-full max-w-xs"
					/>
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
								alt="user image"
								src="/images/navbar/profile.png"
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
