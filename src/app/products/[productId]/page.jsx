import { ArrowLeft, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleProduct = async ({ params }) => {
	const { productId } = await params;
	return (
		<section className="py-16 inter">
			<div className="container">
				{/* Back Button */}
				<div className="mb-6">
					<Link
						className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-primary hover:bg-primary/80 text-background h-10 px-4 py-2"
						href="/products"
					>
						<ArrowLeft />
						Back to Products
					</Link>
				</div>
				single product here {productId}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
					{/* Image */}
					<div>
						<Image
							width={100}
							height={100}
							className="w-full rounded-lg"
							src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80"
							alt=""
						/>
					</div>
					{/* Description */}
					<div>
						{/* Category */}
						<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors  border-transparent bg-primary text-background hover:bg-primary/80 mb-3">
							Electronics
						</div>
						{/* Product Title */}
						<h1 className="text-3xl md:text-4xl font-bold mb-4">
							Premium Wireless Watch
						</h1>
						{/* Price */}
						<p className="text-4xl font-bold text-primary mb-6">
							$299
						</p>
						{/* Divider */}
						<div className="divider"></div>
						{/* Some Information */}
						<div className="space-y-4">
							<div className="flex items-center justify-between text-sm">
								<span className="text-muted-foreground">
									SKU:
								</span>
								<span className="font-medium">WW-PRO-001</span>
							</div>
							<div className="flex items-center justify-between text-sm">
								<span className="text-muted-foreground">
									Brand:
								</span>
								<span className="font-medium">
									ShopHub Elite
								</span>
							</div>
							<div className="flex items-center justify-between text-sm">
								<span className="text-muted-foreground">
									Availability:
								</span>
								<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-primary text-background hover:bg-primary/80">
									In Stock
								</div>
							</div>
						</div>
						{/* Divider */}
						<div className="divider"></div>
						{/* Buttons */}
						<div className="space-y-3">
							{/* Add to Cart */}
							<button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors bg-primary text-background hover:bg-primary/90 h-11 rounded-md px-8 w-full">
								<ShoppingCart className="mr-2 h-5 w-5" />
								Add to Cart
							</button>

							{/* Buy Now */}
							<button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors duration-200 border border-border bg-background hover:bg-primary hover:text-background h-11 rounded-md px-8 w-full">
								Buy Now
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SingleProduct;
