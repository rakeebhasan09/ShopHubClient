import Link from "next/link";

const HeroBanner = () => {
	return (
		<section className="bg-primary py-20 md:py-32">
			<div className="container">
				<div className="max-w-3xl mx-auto text-center">
					<h1 className="text-4xl md:text-6xl text-background font-bold mb-6 text-balance">
						Discover Premium Products for Your Lifestyle
					</h1>
					<p className="text-lg md:text-xl mb-8 text-background">
						Shop the latest trends with unbeatable prices and
						quality
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 bg-background text-foreground hover:bg-secondary/80 hover:text-background h-11 rounded-md px-8 text-lg"
							href="/products"
						>
							Browse Products{" "}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="lucide lucide-arrow-right ml-2 h-5 w-5"
							>
								<path d="M5 12h14"></path>
								<path d="m12 5 7 7-7 7"></path>
							</svg>
						</Link>
						<Link
							className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium border border-background h-11 rounded-md px-8 text-lg bg-transparent transition-all duration-300 text-background hover:bg-background hover:text-foreground"
							href="/about"
						>
							Learn More
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroBanner;
