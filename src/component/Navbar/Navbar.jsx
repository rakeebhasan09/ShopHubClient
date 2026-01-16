"use client";

import Link from "next/link";
import React from "react";
import NavLink from "../NavLink/NavLink";
import Image from "next/image";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
	const { user, logOut } = useAuth();
	const handleLogOut = () => {
		logOut()
			.then(() => {
				toast.success("Logout Successfull!");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const links = (
		<>
			<li>
				<NavLink href="/">Home</NavLink>
			</li>
			<li>
				<NavLink href="/products" exact>
					Products
				</NavLink>
			</li>
			<li>
				<NavLink href="/about">About</NavLink>
			</li>
			<li>
				<NavLink href="/contact">Contact</NavLink>
			</li>
		</>
	);
	return (
		<section className="shadow-sm py-4 sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
			<div className="container">
				<div className="navbar inter p-0 min-h-0">
					{/* Navbar Start */}
					<div className="navbar-start">
						<div className="dropdown">
							<div
								tabIndex={0}
								role="button"
								className="lg:hidden"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-10 w-10 mr-2.5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>
								</svg>
							</div>
							<ul
								tabIndex="-1"
								className="menu menu-sm dropdown-content bg-base-100 gap-y-2 rounded-box z-1 mt-3 w-52 p-3 shadow"
							>
								{links}
							</ul>
						</div>
						{/* Icon */}
						<Link
							className="flex items-center gap-2 font-display text-xl font-bold"
							href="/"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-package h-6 w-6 text-primary"
							>
								<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
								<path d="M12 22V12"></path>
								<path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path>
								<path d="m7.5 4.27 9 5.15"></path>
							</svg>
							SuperShop
						</Link>
					</div>
					{/* Navbar Center */}
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal p-0">{links}</ul>
					</div>
					{/* Navbar End */}
					<div className="navbar-end">
						{user ? (
							<div className="dropdown dropdown-end">
								<div
									tabIndex={0}
									role="button"
									className="btn btn-ghost btn-circle avatar"
								>
									<div className="w-10 rounded-full">
										<Image
											width={500}
											height={500}
											alt={user.displayName}
											src={user.photoURL}
										/>
									</div>
								</div>
								<ul
									tabIndex="-1"
									className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3  p-2 shadow"
								>
									<li className="p-2">{user.displayName}</li>
									<li className="px-2 pb-1">{user.email}</li>
									<li>
										<Link href="/add-product">
											Add Product
										</Link>
									</li>
									<li>
										<Link href="/manage-products">
											Manage Products
										</Link>
									</li>
									<li>
										<button onClick={handleLogOut}>
											Logout
										</button>
									</li>
								</ul>
							</div>
						) : (
							<div className="flex items-center gap-2.5">
								<Link
									href="/login"
									className="px-5 py-1.5 border border-secondary rounded-md font-semibold"
								>
									Login
								</Link>
								<Link
									href="/register"
									className="hidden sm:block px-5 py-2 bg-primary text-white rounded-md font-semibold"
								>
									Register
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Navbar;
