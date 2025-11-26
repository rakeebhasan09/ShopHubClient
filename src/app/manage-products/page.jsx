"use client";
import useAuth from "@/hooks/useAuth";
import useAxios from "@/hooks/useAxios";
import { Eye, Plus, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageProducts = () => {
	const { user, loading } = useAuth();
	const router = useRouter();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		if (!loading && !user) {
			return router.push("/login");
		}
	}, [user, router, loading]);

	const axiosInstance = useAxios();
	axiosInstance
		.get(
			`${process.env.NEXT_PUBLIC_SITE_URL}/products?email=${user?.email}`
		)
		.then((data) => {
			setProducts(data.data);
		})
		.catch((error) => {
			console.log(error);
		});

	// Delete Handler
	const deleteProduct = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Delete",
		}).then((result) => {
			if (result.isConfirmed) {
				axiosInstance
					.delete(`/products/${id}`)
					.then(() => {
						Swal.fire({
							title: "Deleted!",
							text: "Your Product has been deleted.",
							icon: "success",
						});
					})
					.catch((error) => {
						console.log(error);
					});
			}
		});
	};

	return (
		<section className="py-16 inter">
			<div className="container">
				{/* Page Title */}
				<div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
					<div>
						<h1 className="text-3xl md:text-4xl font-bold mb-2">
							Manage Products
						</h1>
						<p className="text-muted">
							View, edit, and manage all your products
						</p>
					</div>
					<Link
						className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-primary text-background hover:bg-primary/90 h-10 px-4 py-2"
						href="/add-product"
					>
						<Plus className="mr-2 h-4 w-4" />
						Add Product
					</Link>
				</div>

				{/* Products Table */}
				<div className="rounded-lg border border-border bg-background text-foreground shadow-sm">
					<div className="p-6 pt-6">
						<div className="overflow-x-auto">
							<table className="table">
								{/* head */}
								<thead>
									<tr>
										<th>Image</th>
										<th>Title</th>
										<th>Category</th>
										<th>Price</th>
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
									{/* row 1 */}
									{products.map((product) => (
										<tr key={product._id}>
											<td>
												<div className="flex items-center gap-3">
													<div className="avatar">
														<div className="mask mask-squircle h-12 w-12">
															<Image
																width={100}
																height={100}
																src={
																	product.photo
																}
																alt={
																	product.title
																}
															/>
														</div>
													</div>
												</div>
											</td>
											<td className="whitespace-nowrap">
												{product.title}
											</td>
											<td className="whitespace-nowrap">
												{product.category}
											</td>
											<td className="whitespace-nowrap">
												${product.price}
											</td>
											<th>
												<button className="py-2 px-2 border border-border rounded">
													<Link
														href={`/products/${product._id}`}
													>
														<Eye />
													</Link>
												</button>
												<button
													onClick={() =>
														deleteProduct(
															product._id
														)
													}
													className="py-2 ml-2.5 px-2 border border-border rounded"
												>
													<Trash />
												</button>
											</th>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ManageProducts;
