"use client";

import { useState } from "react";

export default function NewsletterSection() {
	const [email, setEmail] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email) return;
		setSubmitted(true);
		setEmail("");
	};

	return (
		<section className="w-full py-16 bg-gray-50">
			<div className="max-w-4xl mx-auto px-4 text-center">
				<h2 className="text-3xl font-bold mb-3">Join Our Newsletter</h2>
				<p className="text-gray-600 mb-8">
					Subscribe to get updates on new products, exclusive deals,
					and more.
				</p>

				{submitted ? (
					<p className="text-green-600 font-medium text-lg">
						🎉 Thanks for subscribing!
					</p>
				) : (
					<form
						onSubmit={handleSubmit}
						className="flex flex-col sm:flex-row gap-3 justify-center"
					>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Enter your email"
							className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-80"
							required
						/>

						<button
							type="submit"
							className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
						>
							Subscribe
						</button>
					</form>
				)}

				<p className="text-gray-500 text-sm mt-4">
					We care about your privacy. No spam ever.
				</p>
			</div>
		</section>
	);
}
