"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children, exact = false }) {
	const pathname = usePathname();

	// exact match for '/', else startsWith for group routes like '/products'
	const isActive = exact
		? pathname === href
		: pathname === href || (href !== "/" && pathname.startsWith(href));

	const base =
		"font-semibold transition-colors duration-200 hover:bg-transparent";
	const activeClass = "text-primary"; // change to whatever active styles you want
	const inactiveClass = "text-secondary hover:text-primary";

	return (
		<Link
			href={href}
			className={`${base} ${isActive ? activeClass : inactiveClass}`}
		>
			{children}
		</Link>
	);
}
