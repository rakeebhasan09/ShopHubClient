import Social from "@/component/Social/Social";
import { Package } from "lucide-react";
import Link from "next/link";
import React from "react";

const Login = () => {
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
							Welcome back
						</h3>
						{/* Tag Line */}
						<p className="text-sm text-muted text-center">
							Enter your credentials to access your account
						</p>
					</div>
					{/* Form Area */}
					<div className="p-6 pt-0 space-y-4">
						<form className="space-y-4">
							{/* Email */}
							<div className="space-y-2">
								<label className="text-sm block font-medium">
									Email
								</label>
								<input
									type="email"
									placeholder="john@example.com"
									className="flex h-10 w-full rounded-md border border-border outline-0 bg-background px-3 py-2 text-base placeholder:text-muted md:text-sm"
								/>
							</div>
							{/* Email */}
							<div className="space-y-2">
								<label className="text-sm block font-medium">
									Password
								</label>
								<input
									type="password"
									placeholder="*******"
									className="flex h-10 w-full rounded-md border border-border outline-0 bg-background px-3 py-2 text-base placeholder:text-muted md:text-sm"
								/>
							</div>
							{/* Forget Password */}
							<div className="flex items-center justify-end">
								<Link
									className="text-sm text-primary hover:underline"
									href="/login"
								>
									Forgot password?
								</Link>
							</div>
							<button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors bg-primary text-background hover:bg-primary/90 h-10 px-4 py-2 w-full">
								Sign In
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

export default Login;
