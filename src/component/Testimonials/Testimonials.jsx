import { Star } from "lucide-react";

const Testimonials = () => {
	const testimonials = [
		{
			name: "Sarah Johnson",
			role: "Verified Customer",
			content:
				"Amazing quality and fast delivery! Will definitely order again.",
			rating: 5,
		},
		{
			name: "Michael Chen",
			role: "Verified Customer",
			content:
				"Best shopping experience I've had online. Highly recommended!",
			rating: 5,
		},
		{
			name: "Emily Davis",
			role: "Verified Customer",
			content:
				"Great products and excellent customer service. Very satisfied!",
			rating: 5,
		},
	];
	return (
		<section className="py-16 inter">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						What Our Customers Say
					</h2>
					<p className="text-muted  max-w-2xl mx-auto">
						Real reviews from real customers
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="card-hover inter rounded-lg border border-border bg-card text-foreground shadow-sm p-5 lg:p-10"
						>
							<div>
								<div className="flex mb-4">
									{[...Array(testimonial.rating)].map(
										(_, i) => (
											<Star
												key={i}
												className="h-5 w-5 fill-[#F59F0A] text-[#F59F0A]"
											/>
										)
									)}
								</div>
								<p className="text-muted mb-4">
									{testimonial.content}
								</p>
								<div>
									<p className="font-semibold">
										{testimonial.name}
									</p>
									<p className="text-sm text-muted">
										{testimonial.role}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
