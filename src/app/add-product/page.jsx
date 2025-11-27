"use client";

import useAuth from "@/hooks/useAuth";
import useAxios from "@/hooks/useAxios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddProduct = () => {
	const { user, loading } = useAuth();
	const router = useRouter();

	const axiosInstance = useAxios();

	useEffect(() => {
		if (!loading && !user) {
			return router.push("/login");
		}
	}, [user, router, loading]);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const handleAddProduct = (data) => {
		const formData = data;
		formData.name = user.displayName;
		formData.email = user.email;
		axiosInstance
			.post("/products", formData)
			.then((data) => {
				if (data.data.insertedId) {
					reset();
					router.push("/manage-products");
					Swal.fire({
						position: "center",
						icon: "success",
						title: "Your Product has been saved",
						showConfirmButton: false,
						timer: 1500,
					});
				}
			})
			.catch((error) => console.log(error));
	};

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
						<form
							onSubmit={handleSubmit(handleAddProduct)}
							className="space-y-6"
						>
							{/* Title */}
							<div className="space-y-2">
								<label className="text-sm font-medium leading-none block">
									Product Title *
								</label>
								<input
									type="text"
									className="flex h-10 w-full rounded-md border border-border outline-0 bg-background px-3 py-2 text-base md:text-sm"
									{...register("title", { required: true })}
									placeholder="Premium Wireless Watch"
								/>
								{errors.title?.type === "required" && (
									<p className="text-red-500 text-xs">
										Product title is required
									</p>
								)}
							</div>
							{/* Short Description */}
							<div className="space-y-2">
								<label className="text-sm font-medium leading-none block">
									Short Description *
								</label>
								<input
									type="text"
									className="flex h-10 w-full rounded-md border border-border outline-0 bg-background px-3 py-2 text-base md:text-sm"
									{...register("shortDescription", {
										required: true,
									})}
									placeholder="Brief product description (1-2 lines)"
								/>
								{errors.shortDescription?.type ===
									"required" && (
									<p className="text-red-500 text-xs">
										Short Description is required
									</p>
								)}
							</div>
							{/* Short Description */}
							<div className="space-y-2">
								<label className="text-sm font-medium leading-none block">
									Full Description *
								</label>
								<textarea
									{...register("description", {
										required: true,
									})}
									className="flex w-full rounded-md border border-border outline-0 bg-background px-3 py-2 text-base md:text-sm"
									placeholder="Detailed product description including features, specifications, and benefits..."
									rows={10}
								></textarea>
								{errors.description?.type === "required" && (
									<p className="text-red-500 text-xs">
										Description is required
									</p>
								)}
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
										{...register("price", {
											required: true,
										})}
										placeholder="299"
									/>
									{errors.price?.type === "required" && (
										<p className="text-red-500 text-xs">
											Price is required
										</p>
									)}
								</div>
								{/* Category */}
								<div className="space-y-2">
									<label className="text-sm font-medium leading-none block">
										Category *
									</label>
									<select
										defaultValue="Select category"
										{...register("category", {
											validate: (v) =>
												v !== "Select category" ||
												"Category is required",
										})}
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
									{errors.category && (
										<p className="text-red-500 text-xs">
											{errors.category.message}
										</p>
									)}
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
									{...register("photo", { required: true })}
									placeholder="https://example.com/image.jpg"
								/>
								{errors.photo?.type === "required" && (
									<p className="text-red-500 text-xs">
										Photo URL is required
									</p>
								)}
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
