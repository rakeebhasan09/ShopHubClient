"use client";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import useAxios from "@/hooks/useAxios";

const FeaturedProducts = () => {
	const [products, setProducts] = useState([]);
	const axiosInstance = useAxios();

	useEffect(() => {
		axiosInstance
			.get(`${process.env.NEXT_PUBLIC_SITE_URL}/products/latest`)
			.then((res) => setProducts(res.data))
			.catch((error) => {
				console.log(error);
			});
	}, [axiosInstance]);
	return (
		<section className="py-16">
			<div className="container inter">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Featured Products
					</h2>
					<p className="text-muted max-w-2xl mx-auto">
						Handpicked selection of our most popular items
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-8">
					{products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</div>
				<div className="text-center">
					<Link
						className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors border border-border bg-background hover:bg-primary hover:text-background h-11 rounded-md px-8"
						href="/products"
					>
						View All Products <ArrowRight />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default FeaturedProducts;
