"use client";

import Social from "@/component/Social/Social";
import useAuth from "@/hooks/useAuth";
import { Package } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Register = () => {
	const { emailPasswordRegistration, setUser, updateUserProfile } = useAuth();
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const handleRegistration = (data) => {
		emailPasswordRegistration(data.email, data.password)
			.then((result) => {
				if (result.user) {
					updateUserProfile({
						displayName: data.name,
						photoURL: data.photo,
					});
					result.user.displayName = data.name;
					result.user.photoURL = data.photo;
					setUser(result.user);
					reset();
					router.push("/");
					Swal.fire({
						position: "center",
						icon: "success",
						title: "Registration Successfull.",
						showConfirmButton: false,
						timer: 1500,
					});
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<section className="py-12 inter">
			<div className="container">
				<div className="rounded-lg max-w-md border border-border mx-auto bg-background text-foreground shadow-sm ">
					{/* Welcome div */}
					<div className="flex flex-col p-6 space-y-1">
						{/* Icon */}
						<div className="flex justify-center mb-4">
							<div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
								<Package className="h-6 w-6 text-primary" />
							</div>
						</div>
						{/* Title */}
						<h3 className="font-semibold tracking-tight text-2xl text-center">
							Create an account
						</h3>
						{/* Tag Line */}
						<p className="text-sm text-muted text-center">
							Enter your information to get started
						</p>
					</div>
					{/* Form Area */}
					<div className="p-6 pt-0 space-y-4">
						<form
							onSubmit={handleSubmit(handleRegistration)}
							className="space-y-4"
						>
							{/* Name */}
							<div className="space-y-2">
								<label className="text-sm block font-medium">
									Name
								</label>
								<input
									type="text"
									placeholder="Your Name"
									{...register("name", { required: true })}
									className="flex h-10 w-full rounded-md border border-border outline-0 bg-background px-3 py-2 text-base placeholder:text-muted md:text-sm"
								/>
								{errors.name?.type === "required" && (
									<p className="text-red-500 text-xs">
										Name is required
									</p>
								)}
							</div>
							{/* Photo URL */}
							<div className="space-y-2">
								<label className="text-sm block font-medium">
									Photo URL
								</label>
								<input
									type="text"
									placeholder="Photo URL"
									{...register("photo", { required: true })}
									className="flex h-10 w-full rounded-md border border-border outline-0 bg-background px-3 py-2 text-base placeholder:text-muted md:text-sm"
								/>
								{errors.photo?.type === "required" && (
									<p className="text-red-500 text-xs">
										Photo is required
									</p>
								)}
							</div>
							{/* Email */}
							<div className="space-y-2">
								<label className="text-sm block font-medium">
									Email
								</label>
								<input
									type="email"
									placeholder="john@example.com"
									{...register("email", { required: true })}
									className="flex h-10 w-full rounded-md border border-border outline-0 bg-background px-3 py-2 text-base placeholder:text-muted md:text-sm"
								/>
								{errors.email?.type === "required" && (
									<p className="text-red-500 text-xs">
										Email is required
									</p>
								)}
							</div>
							{/* Password */}
							<div className="space-y-2">
								<label className="text-sm block font-medium">
									Password
								</label>
								<input
									type="password"
									{...register("password", {
										required: true,
									})}
									placeholder="*******"
									className="flex h-10 w-full rounded-md border border-border outline-0 bg-background px-3 py-2 text-base placeholder:text-muted md:text-sm"
								/>
								{errors.password?.type === "required" && (
									<p className="text-red-500 text-xs">
										Password is required
									</p>
								)}
							</div>
							<button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-primary text-background hover:bg-primary/90 h-10 px-4 py-2 w-full">
								Sign Up
							</button>
						</form>
						<div className="divider my-8 text-sm">
							Or Continue With
						</div>
						<Social />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Register;
