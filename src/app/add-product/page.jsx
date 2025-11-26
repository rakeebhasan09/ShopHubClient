"use client";

import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const AddProduct = () => {
	const { user, loading } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!loading && !user) {
			return router.push("/login");
		}
	}, [user, router, loading]);

	return (
		<section className="py-16 inter">
			<div className="container">
				<div className="rounded-lg max-w-3xl mx-auto border border-border bg-background text-foreground shadow-sm">
					{/* Title Area */}
					<div className="flex flex-col space-y-1.5 p-6">
						<h3 className="font-semibold tracking-tight text-3xl">
							Add New Product
						</h3>
						<p className="text-sm text-muted">
							Fill in the details below to add a new product to
							your store
						</p>
					</div>
					{/* From Area */}
					<div className="p-6 pt-0">
						<form className="space-y-6">
							{/* Title */}
							<div className="space-y-2">
								<label className="text-sm font-medium leading-none block">
									Product Title *
								</label>
								<input
									type="text"
									className="flex h-10 w-full rounded-md border border-border outline-0 bg-background px-3 py-2 text-base md:text-sm"
									name="title"
									placeholder="Premium Wireless Watch"
								/>
							</div>
							{/* Short Description */}
							<div className="space-y-2">
								<label className="text-sm font-medium leading-none block">
									Short Description *
								</label>
								<input
									type="text"
									className="flex h-10 w-full rounded-md border border-border outline-0 bg-background px-3 py-2 text-base md:text-sm"
									name="title"
									placeholder="Brief product description (1-2 lines)"
								/>
							</div>
							{/* Short Description */}
							<div className="space-y-2">
								<label className="text-sm font-medium leading-none block">
									Full Description *
								</label>
								<textarea
									className="flex w-full rounded-md border border-border outline-0 bg-background px-3 py-2 text-base md:text-sm"
									placeholder="Detailed product description including features, specifications, and benefits..."
									rows={10}
								></textarea>
							</div>
							{/* Price & Category */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{/* Price */}
								<div className="space-y-2">
									<label className="text-sm font-medium leading-none block">
										Price *
									</label>
									<input
										type="number"
										className="flex h-10 w-full rounded-md border border-border outline-0 bg-background px-3 py-2 text-base md:text-sm"
										name="title"
										placeholder="299"
									/>
								</div>
								{/* Category */}
								<div className="space-y-2">
									<label className="text-sm font-medium leading-none block">
										Category *
									</label>
									<select
										defaultValue="Select category"
										className="select outline-0 ring-0 border w-full border-border"
									>
										<option disabled={true}>
											Select category
										</option>
										<option value="Electronics">
											Electronics
										</option>
										<option value="Fashion">Fashion</option>
										<option value="Audio">Audio</option>
										<option value="Sports">Sports</option>
										<option value="Beauty">Beauty</option>
										<option value="Home">Home</option>
									</select>
								</div>
							</div>
							{/* Short Description */}
							<div className="space-y-2">
								<label className="text-sm font-medium leading-none block">
									Image URL *
								</label>
								<input
									type="text"
									className="flex h-10 w-full rounded-md border border-border outline-0 bg-background px-3 py-2 text-base md:text-sm"
									name="title"
									placeholder="https://example.com/image.jpg"
								/>
								<p className="text-xs text-muted">
									Enter a direct URL to your product image
								</p>
							</div>
							{/* Buttons */}
							<div className="flex gap-4 pt-4">
								{/* Add Button */}
								<button
									className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-primary text-background hover:bg-primary/90 h-10 px-4 py-2 flex-1"
									type="submit"
								>
									Add Product
								</button>

								{/* Cancle Button */}
								<Link
									href="/manage-products"
									className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium border border-border bg-background hover:bg-accent hover:text-background transition-colors duration-200 h-10 px-4 py-2"
									type="button"
								>
									Cancel
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AddProduct;
