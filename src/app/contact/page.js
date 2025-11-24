import { Clock, Mail, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
	return (
		<section className="py-12 inter">
			<div className="container">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-12">
						<h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
							Get in Touch
						</h1>
						<p className="text-lg text-muted-foreground">
							Have a question? We would love to hear from you.
							Send us a message and we will respond as soon as
							possible.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
						{/* Single Contact Card */}
						<div className="rounded-lg border border-border text-foreground shadow-sm">
							<div className="p-6 pt-6 text-center">
								<div className="flex justify-center mb-4">
									<div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
										<Mail className="h-6 w-6 text-primary" />
									</div>
								</div>
								<h3 className="font-semibold mb-2">Email</h3>
								<p className="text-sm text-muted-foreground">
									support@shophub.com
								</p>
							</div>
						</div>
						{/* Single Contact Card */}
						<div className="rounded-lg border border-border text-foreground shadow-sm">
							<div className="p-6 pt-6 text-center">
								<div className="flex justify-center mb-4">
									<div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
										<Phone className="h-6 w-6 text-primary" />
									</div>
								</div>
								<h3 className="font-semibold mb-2">Phone</h3>
								<p className="text-sm text-muted-foreground">
									+1 (555) 123-4567
								</p>
							</div>
						</div>
						{/* Single Contact Card */}
						<div className="rounded-lg border border-border text-foreground shadow-sm">
							<div className="p-6 pt-6 text-center">
								<div className="flex justify-center mb-4">
									<div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
										<Clock className="h-6 w-6 text-primary" />
									</div>
								</div>
								<h3 className="font-semibold mb-2">Hours</h3>
								<p className="text-sm text-muted-foreground">
									24/7 Support
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
