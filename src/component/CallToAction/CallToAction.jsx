import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const CallToAction = () => {
	return (
		<section className="py-16 bg-[#FAFBFD] inter">
			<div className="container mx-auto px-4">
				<div className="bg-linear-to-r from-primary to-primary/80 border-0 text-background rounded-2xl px-5">
					<div className="py-12 text-center">
						<h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
							Ready to Start Shopping?
						</h2>
						<p className="text-lg mb-8 text-background/90 max-w-2xl mx-auto">
							Join thousands of satisfied customers and discover
							your perfect products today
						</p>
						<button>
							<Link
								href="/products"
								className="flex items-center bg-background text-foreground h-11 rounded-md px-8"
							>
								Explore Products{" "}
								<ArrowRight className="ml-2 h-5 w-5" />
							</Link>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CallToAction;
