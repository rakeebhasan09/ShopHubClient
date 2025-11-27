"use client";

import ProductCard from "@/component/FeaturedProducts/ProductCard";
import SearchFilter from "@/component/SearchFilter/SearchFilter";
import useAxios from "@/hooks/useAxios";
import React, { useEffect, useState } from "react";

const Products = () => {
	const [products, setProducts] = useState([]);
	const axiosInstance = useAxios();

	useEffect(() => {
		axiosInstance
			.get(`${process.env.NEXT_PUBLIC_SITE_URL}/products`)
			.then((res) => setProducts(res.data))
			.catch((error) => {
				console.log(error);
			});
	}, [axiosInstance]);

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
				<SearchFilter products={products} />
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Products;
