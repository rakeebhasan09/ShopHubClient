import { Package, Shield, Truck, HeadphonesIcon } from "lucide-react";
const Features = () => {
	const features = [
		{
			icon: <Truck className="h-8 w-8 text-primary" />,
			title: "Free Shipping",
			description: "On orders over $50",
		},
		{
			icon: <Shield className="h-8 w-8 text-primary" />,
			title: "Secure Payment",
			description: "100% protected checkout",
		},
		{
			icon: <HeadphonesIcon className="h-8 w-8 text-primary" />,
			title: "24/7 Support",
			description: "Dedicated customer service",
		},
		{
			icon: <Package className="h-8 w-8 text-primary" />,
			title: "Easy Returns",
			description: "30-day return policy",
		},
	];
	return (
		<section className="py-16 inter bg-[#FAFBFD]">
			<div className="container">
				<div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
					{features.map((feature, idx) => (
						<div key={idx} className="flex flex-col items-center">
							<div className="flex justify-center mb-4">
								{feature.icon}
							</div>
							<h3 className="font-semibold text-lg mb-2">
								{feature.title}
							</h3>
							<p className="text-sm text-muted">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
