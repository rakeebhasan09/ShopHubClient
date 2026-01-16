import CallToAction from "@/component/CallToAction/CallToAction";
import FeaturedProducts from "@/component/FeaturedProducts/FeaturedProducts";
import Features from "@/component/Features/Features";
import HeroBanner from "@/component/HeroBanner/HeroBanner";
import NewsletterSection from "@/component/NewsletterSection/NewsletterSection";
import StatsBanner from "@/component/StatsBanner/StatsBanner";
import Testimonials from "@/component/Testimonials/Testimonials";

export default function Home() {
	return (
		<>
			<HeroBanner />
			<Features />
			<FeaturedProducts />
			<StatsBanner />
			<Testimonials />
			<CallToAction />
			<NewsletterSection />
		</>
	);
}
