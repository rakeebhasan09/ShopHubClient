import Link from "next/link";
import React from "react";
import { Package, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
	return (
		<footer className="border-t border-t-border bg-[#FAFBFD] py-12 inter">
			<div className="container mx-auhref px-4 ">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="space-y-4">
						<Link
							href="/"
							className="flex items-center gap-2 font-display text-xl font-bold"
						>
							<Package className="h-6 w-6 text-primary" />
							SuperShop
						</Link>
						<p className="text-sm text-muted-foreground">
							Your modern eCommerce solution for discovering and
							managing premium products.
						</p>
						<div className="flex gap-4">
							<Link
								href="#"
								className="text-muted-foreground hover:text-primary transition-colors"
							>
								<Facebook className="h-5 w-5" />
							</Link>
							<Link
								href="#"
								className="text-muted-foreground hover:text-primary transition-colors"
							>
								<Twitter className="h-5 w-5" />
							</Link>
							<Link
								href="#"
								className="text-muted-foreground hover:text-primary transition-colors"
							>
								<Instagram className="h-5 w-5" />
							</Link>
							<Link
								href="#"
								className="text-muted-foreground hover:text-primary transition-colors"
							>
								<Linkedin className="h-5 w-5" />
							</Link>
						</div>
					</div>

					<div>
						<h3 className="font-display font-semibold mb-4">
							Products
						</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/products"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Browse All
								</Link>
							</li>
							<li>
								<Link
									href="/products"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									New Arrivals
								</Link>
							</li>
							<li>
								<Link
									href="/products"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Best Sellers
								</Link>
							</li>
							<li>
								<Link
									href="/products"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Categories
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-display font-semibold mb-4">
							Company
						</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/about"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Contact
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Careers
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Press
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-display font-semibold mb-4">
							Support
						</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Help Center
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Terms of Service
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Shipping Info
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-12 pt-8 border-t border-t-border text-center text-sm text-muted-foreground">
					<p>
						© {new Date().getFullYear()} ShopHub. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
