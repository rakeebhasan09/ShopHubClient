import { Award, Target, TrendingUp, Users } from "lucide-react";
import React from "react";

const About = () => {
	return (
		<section className="py-12 inter">
			<div className="container">
				<div className="max-w-4xl mx-auto">
					{/* Page Title */}
					<div>
						<h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
							About ShopHub
						</h1>
						<p className="text-xl text-muted text-center mb-12">
							Your trusted partner for premium products and
							exceptional shopping experiences
						</p>
					</div>
					{/* Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
						{/* Single Card */}
						<div className="rounded-lg border border-border bg-card text-card-foreground shadow-sm">
							<div className="p-6 pt-6">
								<Target className="h-12 w-12 text-primary mb-4" />
								<h3 className="font-display text-xl font-semibold mb-3">
									Our Mission
								</h3>
								<p className="text-muted-foreground">
									To provide high-quality products at
									competitive prices while delivering
									exceptional customer service and seamless
									shopping experiences.
								</p>
							</div>
						</div>
						{/* Single Card */}
						<div className="rounded-lg border border-border bg-card text-card-foreground shadow-sm">
							<div className="p-6 pt-6">
								<Users className="h-12 w-12 text-primary mb-4" />
								<h3 className="font-display text-xl font-semibold mb-3">
									Our Team
								</h3>
								<p className="text-muted-foreground">
									A dedicated group of professionals
									passionate about curating the best products
									and ensuring customer satisfaction.
								</p>
							</div>
						</div>
						{/* Single Card */}
						<div className="rounded-lg border border-border bg-card text-card-foreground shadow-sm">
							<div className="p-6 pt-6">
								<Award className="h-12 w-12 text-primary mb-4" />
								<h3 className="font-display text-xl font-semibold mb-3">
									Quality First
								</h3>
								<p className="text-muted-foreground">
									Every product is carefully selected and
									tested to meet our high standards of quality
									and durability.
								</p>
							</div>
						</div>
						{/* Single Card */}
						<div className="rounded-lg border border-border bg-card text-card-foreground shadow-sm">
							<div className="p-6 pt-6">
								<TrendingUp className="h-12 w-12 text-primary mb-4" />
								<h3 className="font-display text-xl font-semibold mb-3">
									Growth
								</h3>
								<p className="text-muted-foreground">
									Continuously expanding our catalog and
									improving our services to better serve our
									growing community.
								</p>
							</div>
						</div>
					</div>

					<div className="prose prose-lg max-w-none">
						<h2 className="text-3xl font-bold mb-4">Our Story</h2>
						<p className="text-muted mb-4">
							Founded in 2020, ShopHub started with a simple
							vision: to create an online marketplace where
							quality meets affordability. What began as a small
							selection of handpicked products has grown into a
							comprehensive platform offering hundreds of premium
							items across multiple categories.
						</p>
						<p className="text-muted mb-4">
							We believe that shopping should be enjoyable,
							convenient, and trustworthy. Thats why we have built
							our platform with user experience at the forefront,
							ensuring every interaction is smooth and satisfying.
						</p>
						<p className="text-muted">
							Today, we are proud to serve thousands of customers
							worldwide, maintaining our commitment to quality,
							authenticity, and customer satisfaction in
							everything we do.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
