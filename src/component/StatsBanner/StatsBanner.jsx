import { Package, Star, TrendingUp } from "lucide-react";

const StatsBanner = () => {
	return (
		<section className="py-16 inter bg-primary text-background">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
					<div>
						<div className="flex items-center justify-center mb-2">
							<TrendingUp className="h-8 w-8 mr-2" />
							<p className="text-4xl md:text-5xl font-bold">
								10k+
							</p>
						</div>
						<p className="text-background/90">Happy Customers</p>
					</div>
					<div>
						<div className="flex items-center justify-center mb-2">
							<Package className="h-8 w-8 mr-2" />
							<p className="text-4xl md:text-5xl font-bold">
								500+
							</p>
						</div>
						<p className="text-background/90">Products Available</p>
					</div>
					<div>
						<div className="flex items-center justify-center mb-2">
							<Star className="h-8 w-8 mr-2" />
							<p className="text-4xl md:text-5xl font-bold">
								4.9
							</p>
						</div>
						<p className="text-background/90">Average Rating</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StatsBanner;
