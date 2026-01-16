"use client";

import ProductCard from "@/component/FeaturedProducts/ProductCard";
import SearchFilter from "@/component/SearchFilter/SearchFilter";
import useAxios from "@/hooks/useAxios";
import React, { useEffect, useState } from "react";

const Products = () => {
	const [products, setProducts] = useState([]);
	const [category, setCategory] = useState("All");
	const [searchText, setSearchText] = useState("");
	const axiosInstance = useAxios();

	console.log("Selected Category", category);

	useEffect(() => {
		axiosInstance
			.get(
				`${process.env.NEXT_PUBLIC_SITE_URL}/products?search=${searchText}`
			)
			.then((res) => setProducts(res.data))
			.catch((error) => {
				console.log(error);
			});
	}, [axiosInstance, searchText]);

	// Filtered Products
	const filterdProducts =
		category === "All"
			? products
			: products.filter((filtered) => filtered.category === category);

	return (
		<section className="py-12">
			<div className="container">
				{/* Page Title */}
				<div className="mb-8 inter">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">
						Our Products
					</h1>
					<p className="text-lg text-muted max-w-2xl">
						Discover our curated collection of premium products
						designed for your lifestyle
					</p>
				</div>
				{/* Search */}
				<SearchFilter
					setSearchText={setSearchText}
					products={products}
					setCategory={setCategory}
				/>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
					{filterdProducts.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Products;
