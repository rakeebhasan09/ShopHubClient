"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
	const { _id, photo, title, shortDescription, price, category } = product;

	return (
		<div className="h-full border border-border rounded-lg flex flex-col card-hover overflow-hidden group">
			<div className="relative overflow-hidden">
				<Image
					src={photo}
					width={500}
					height={200}
					alt=""
					className="object-cover w-full h-62.5 transition-transform duration-300 group-hover:scale-105"
				/>
				{category && (
					<span className="absolute top-3 right-3 bg-primary text-background px-2.5 py-0.5 text-xs font-semibold rounded-full">
						{category}
					</span>
				)}
			</div>
			<div className="inter flex flex-col grow px-4 py-5">
				<div className="pb-4 grow">
					<h3 className="font-display font-semibold text-lg mb-2 line-clamp-1">
						{title}
					</h3>
					<p className="text-sm text-muted-foreground line-clamp-2 mb-3">
						{shortDescription}
					</p>
					<p className="text-2xl font-bold text-primary">${price}</p>
				</div>
				<Link
					href={`/products/${_id}`}
					className="w-full flex items-center justify-center whitespace-nowrap rounded-md bg-primary text-background h-10 py-2 text-sm "
				>
					View Details
				</Link>
			</div>
		</div>
	);
};

export default ProductCard;
