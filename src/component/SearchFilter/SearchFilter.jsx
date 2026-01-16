"use client";

import { Search } from "lucide-react";
import React from "react";

const SearchFilter = ({ products, setCategory, setSearchText }) => {
	const categories = Array.from(new Set(products.map((p) => p.category)));

	return (
		<div className="flex flex-col md:flex-row inter gap-4 mb-8">
			{/* Search Input */}
			<div className="relative flex-1 ">
				<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
				<input
					onChange={(e) => setSearchText(e.target.value)}
					type="text"
					placeholder="Search products..."
					className="pl-10 w-full rounded-md border border-border outline-0 bg-background px-3 py-2"
				/>
			</div>
			{/* Select */}
			<select
				defaultValue="All Categories"
				className="select ring-0 outline-0 border-border"
				onChange={(e) => setCategory(e.target.value)}
			>
				<option value={"All"}>All Categories</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
		</div>
	);
};

export default SearchFilter;
