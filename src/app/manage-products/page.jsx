"use client";
import useAuth from "@/hooks/useAuth";
import { Eye, Plus, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ManageProducts = () => {
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
									<tr>
										<td>
											<div className="flex items-center gap-3">
												<div className="avatar">
													<div className="mask mask-squircle h-12 w-12">
														<Image
															width={100}
															height={100}
															src="https://img.daisyui.com/images/profile/demo/2@94.webp"
															alt="Avatar Tailwind CSS Component"
														/>
													</div>
												</div>
											</div>
										</td>
										<td className="whitespace-nowrap">
											Zemlak, Daniel and Leannon
										</td>
										<td className="whitespace-nowrap">
											Category
										</td>
										<td className="whitespace-nowrap">
											$233
										</td>
										<th>
											<button className="py-2 px-2 border border-border rounded">
												<Eye />
											</button>
											<button className="py-2 ml-2.5 px-2 border border-border rounded">
												<Trash />
											</button>
										</th>
									</tr>
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
