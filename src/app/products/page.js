import ProductCard from "@/component/FeaturedProducts/ProductCard";
import SearchFilter from "@/component/SearchFilter/SearchFilter";
import React from "react";

const Products = async () => {
	const res = await fetch("http://localhost:3000/products.json");
	const products = await res.json();

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
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Products;
