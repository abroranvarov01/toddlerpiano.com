'use client'
import { Navigation } from "@/components/navigation"
import { FloatingNotes } from "@/components/floating-notes"
import { Star, Quote, ThumbsUp, Calendar, ShoppingCart, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { notFound, useParams } from "next/navigation"
import { useEffect } from "react"

const products = {
	"mukikim-rock-and-roll-piano": {
		name: "MUKIKIM Rock and Roll It Rainbow Piano",
		price: "$57.95",
		rating: 4.2,
		reviewCount: 127,
		image: "https://m.media-amazon.com/images/I/81r69l8pPeL._AC_SX679_.jpg",
		amazonUrl: "https://www.amazon.com/MukikiM-Rock-Roll-play-color/dp/B071HPPSB8",
		description:
			"The MUKIKIM Rock and Roll It Rainbow Piano is a portable, flexible 49-key silicone piano keyboard perfect for kids and beginners. It includes a play-by-color songbook, making it easy to learn and fun to play anywhere.",
		features: [
			"49 flexible silicone keys",
			"Play-by-color songbook included",
			"Portable and roll-up design",
			"Battery or USB powered",
			"Built-in speaker and headphone jack",
			"Safe, durable materials",
		],
		specifications: {
			dimensions: '31.5" x 6.3" x 0.4" (unrolled)',
			weight: "1.2 lbs",
			ageRange: "3 years and up",
			material: "Silicone and plastic",
		},
		reviews: [
			{
				name: "Stephanie",
				rating: 5,
				date: "April 8, 2018",
				text: "Super cool! Love it. My kids have so much fun with this piano, and it's easy to store.",
				avatar: "👩",
				helpful: 10,
				verified: true,
			},
			{
				name: "Daye815",
				rating: 4,
				date: "November 23, 2018",
				text: "Great toy for a 9-year-old. Wish it came with a bigger songbook, but it's still a lot of fun.",
				avatar: "👩‍🦳",
				helpful: 8,
				verified: true,
			},
			{
				name: "Amazon Customer",
				rating: 1,
				date: "December 15, 2019",
				text: "Broke within an hour. Made a loud buzzing noise when two keys were pressed. Disappointing quality.",
				avatar: "👨",
				helpful: 5,
				verified: true,
			},
		],
	},
	"fisher-price-infant-trio": {
		name: "Fisher-Price Classic Infant Trio",
		price: "$29.99",
		rating: 4.8,
		reviewCount: 98,
		image: "https://m.media-amazon.com/images/I/61gg-o7oPML._AC_SX679_.jpg",
		amazonUrl: "https://www.amazon.com/Fisher-Price-Classic-Infant-Trio/dp/B07JGTNRFK",
		description:
			"The Fisher-Price Classic Infant Trio includes a xylophone with 8 colorful metal keys, designed to produce clear, tuned notes. Made with safe, durable materials, it fosters musical creativity and motor skills in young children.",
		features: [
			"8 colorful metal keys",
			"Safe, non-toxic materials",
			"2 mallets included",
			"Encourages musical exploration",
			"Durable design",
			"Easy to clean",
		],
		specifications: {
			dimensions: '12" x 5" x 2"',
			weight: "1.0 lbs",
			ageRange: "12 months - 5 years",
			material: "Plastic and metal",
		},
		reviews: [
			{
				name: "Melissa",
				rating: 5,
				date: "July 4, 2024",
				text: "My son loves this xylophone. He's been playing it since he was 10 months old, and it's still in great shape!",
				avatar: "👩",
				helpful: 12,
				verified: true,
			},
			{
				name: "Parent123",
				rating: 5,
				date: "March 10, 2024",
				text: "Really nice sound and sturdy build. Perfect for introducing my toddler to music.",
				avatar: "👨",
				helpful: 15,
				verified: true,
			},
		],
	},
	"stoies-musical-instruments-set": {
		name: "Kids Musical Instruments Xylophone Set",
		price: "$26.99",
		rating: 4.7,
		reviewCount: 85,
		image: "https://m.media-amazon.com/images/I/71cPoZ9534L._AC_SX679_.jpg",
		amazonUrl: "https://www.amazon.com/Instruments-Toddlers-Xylophone-Tambourine-Educational/dp/B0C1YDMVY9",
		description:
			"This colorful xylophone set includes vibrant, tuned metal keys and other percussion instruments, perfect for toddlers. It encourages musical learning and coordination with its bright, engaging design.",
		features: [
			"8 tuned metal keys",
			"Includes tambourine and maracas",
			"Non-toxic, child-safe materials",
			"Colorful design",
			"Promotes rhythm and coordination",
			"Storage bag included",
		],
		specifications: {
			dimensions: '12" x 6" x 2"',
			weight: "2.0 lbs",
			ageRange: "2 - 5 years",
			material: "Wood, metal, and plastic",
		},
		reviews: [
			{
				name: "ToddlerMom",
				rating: 5,
				date: "July 17, 2025",
				text: "My toddler plays with this every day! The xylophone sounds great, and the extra instruments are a bonus.",
				avatar: "👩‍🦰",
				helpful: 20,
				verified: true,
			},
		],
	},
	"keyboard-xylophone-set": {
		name: "Baby Musical Toys 3-in-1 Drum Set",
		price: "$32.29",
		rating: 4.5,
		reviewCount: 112,
		image: "https://m.media-amazon.com/images/I/71sU6VdZH2L._AC_SX679_.jpg",
		amazonUrl: "https://www.amazon.com/Keyboard-Xylophone-Instrument-Learning-Developmental/dp/B07WNJY42C",
		description:
			"This 3-in-1 musical toy features a piano keyboard, xylophone, and drum set, designed for toddlers to explore various sounds and rhythms. Perfect for fostering creativity and motor skills.",
		features: [
			"3-in-1: piano, xylophone, drums",
			"Colorful and interactive",
			"2 drumsticks included",
			"Battery-powered sound effects",
			"Safe, durable materials",
			"Portable design",
		],
		specifications: {
			dimensions: '15" x 10" x 8"',
			weight: "2.5 lbs",
			ageRange: "1 - 3 years",
			material: "Plastic",
		},
		reviews: [
			{
				name: "GreenToyLover",
				rating: 5,
				date: "July 28, 2025",
				text: "My 17-month-old loves drumming on this! The volume is perfect, and it's very easy to use.",
				avatar: "👨‍🦱",
				helpful: 18,
				verified: true,
			},
			{
				name: "NieceMom",
				rating: 5,
				date: "March 5, 2024",
				text: "This toy does so much! My niece loves it, and I enjoy playing with it too.",
				avatar: "👩",
				helpful: 15,
				verified: true,
			},
		],
	},
	"loog-mini-acoustic-guitar": {
		name: "Loog Mini Acoustic Guitar",
		price: "$89.00",
		rating: 4.6,
		reviewCount: 76,
		image: "https://m.media-amazon.com/images/I/714ZXMfWbXL._AC_SX679_.jpg",
		amazonUrl: "https://www.amazon.com/Loog-Acoustic-Guitar-Children-Beginners/dp/B072B9V2KB",
		description:
			"The Loog Mini Acoustic Guitar is designed for kids, with 3 nylon strings for easy playing. It's perfect for introducing children to string instruments and includes learning materials.",
		features: [
			"3 nylon strings",
			"Lightweight wooden body",
			"Includes flashcards and app access",
			"Tunable for real music",
			"Carrying bag included",
			"Safe for kids",
		],
		specifications: {
			dimensions: '22.2" x 6.9" x 2.3"',
			weight: "2.0 lbs",
			ageRange: "3 - 8 years",
			material: "Wood and nylon",
		},
		reviews: [
			{
				name: "Sarah L.",
				rating: 4,
				date: "March 1, 2024",
				text: "Nice little guitar for kids. My daughter loves strumming it, though tuning takes some practice.",
				avatar: "👩‍🦱",
				helpful: 12,
				verified: true,
			},
		],
	},
	"electric-drum-set": {
		name: "Electric Kids Drum Set",
		price: "$89.97",
		rating: 4.5,
		reviewCount: 112,
		image: "https://m.media-amazon.com/images/I/71tKXDqEnIL._AC_SX679_.jpg",
		amazonUrl: "https://www.amazon.com/Electric-Electronic-Practice-Recording-Speaker/dp/B0B2JFZYZK",
		description:
			"This Electric Kids Drum Set features 9 pads, light-up drumsticks, and a pedal, offering realistic drumming with adjustable volume and MIDI support for beginners.",
		features: [
			"9 responsive drum pads",
			"Light-up drumsticks",
			"Pedal included",
			"Dual stereo speakers",
			"MIDI connectivity",
			"Adjustable stand",
		],
		specifications: {
			dimensions: '24" x 20" x 30" (adjustable)',
			weight: "6.5 lbs",
			ageRange: "6 years and up",
			material: "Plastic and metal",
		},
		reviews: [
			{
				name: "DrumDad",
				rating: 5,
				date: "October 22, 2024",
				text: "Perfect for beginner drummers! Realistic sounds and adjustable volume make it great for home practice.",
				avatar: "👨‍🦱",
				helpful: 11,
				verified: true,
			},
		],
	},
	"fisher-price-piano-gym": {
		name: "Fisher-Price Playmat Musical Maracas",
		price: "$19.99",
		rating: 4.9,
		reviewCount: 64,
		image: "https://m.media-amazon.com/images/I/81CXYaraFDL._AC_SX679_.jpg",
		amazonUrl: "https://www.amazon.com/Fisher-Price-Playmat-Musical-Learning-Content/dp/B0CBQXD4PG",
		description:
			"Fisher-Price Baby Maracas are perfect for little hands, with soft-grip handles and gentle rattling sounds to encourage rhythm and motor skill development.",
		features: [
			"Soft-grip handles",
			"Gentle rattling sounds",
			"Bright, engaging colors",
			"Lightweight and easy to hold",
			"Set of 2 maracas",
			"BPA-free materials",
		],
		specifications: {
			dimensions: '5" x 2" each',
			weight: "0.2 lbs per pair",
			ageRange: "6 months - 3 years",
			material: "Plastic",
		},
		reviews: [
			{
				name: "Amanda R.",
				rating: 5,
				date: "March 12, 2024",
				text: "My 8-month-old loves these maracas! They're easy to grip and the sound is just right.",
				avatar: "👩",
				helpful: 18,
				verified: true,
			},
		],
	},
	"taimasi-instruments-set": {
		name: "TAIMASI Kids Musical Instruments Set",
		price: "$29.99",
		rating: 4.8,
		reviewCount: 143,
		image: "https://m.media-amazon.com/images/I/817-cDUVLWL._AC_SX679_.jpg",
		amazonUrl: "https://www.amazon.com/TAIMASI-Instruments-Percussion-Tambourine-Xylophone/dp/B07W4H8N39",
		description:
			"This comprehensive musical set includes a xylophone, tambourine, maracas, and more, offering endless musical fun for kids. Perfect for group play and fostering creativity.",
		features: [
			"Multiple instruments included",
			"Xylophone, tambourine, maracas, and more",
			"Child-safe materials",
			"Storage backpack included",
			"Encourages group play",
			"Vibrant colors",
		],
		specifications: {
			dimensions: "Varies by instrument",
			weight: "3.5 lbs (complete set)",
			ageRange: "3 - 8 years",
			material: "Wood, plastic, and metal",
		},
		reviews: [
			{
				name: "James P.",
				rating: 5,
				date: "February 28, 2024",
				text: "Perfect for my twins! They love all the instruments, and the backpack makes storage easy.",
				avatar: "👨‍🦲",
				helpful: 25,
				verified: true,
			},
		],
	},
	"bluewood-climbing-triangle": {
		name: "BlueWood Pikler Triangle Set",
		price: "$169.99",
		rating: 4.9,
		reviewCount: 41,
		image: "https://m.media-amazon.com/images/I/716Wr3MdeKL._AC_SX679_.jpg",
		amazonUrl: "https://www.amazon.com/BlueWood-Triangle-Foldable-Climbing-Montessori/dp/B0CT5GC65G",
		description:
			"The BlueWood Pikler Triangle Set is a 7-in-1 Montessori climbing set with a triangle, arch, ramp, and ladder. It promotes physical development and creativity in toddlers.",
		features: [
			"7-in-1 climbing set",
			"Foldable design",
			"High-quality wood",
			"Non-toxic paint",
			"Promotes motor skills",
			"Safe for indoor use",
		],
		specifications: {
			dimensions: "Varies by component",
			weight: "15 lbs",
			ageRange: "6 months - 6 years",
			material: "Wood",
		},
		reviews: [
			{
				name: "Vazquez Heras",
				rating: 5,
				date: "September 15, 2024",
				text: "Great for my 7-month-old! Easy to assemble, safe, and high-quality materials. The colors are beautiful.",
				avatar: "👩",
				helpful: 10,
				verified: true,
			},
		],
	},
}

export default function ProductReviewPage() {
	const params = useParams();
	const slug = params.slug;
	const product = products[params.slug as keyof typeof products]

	if (!product) {
		notFound()
	}

	useEffect(() => {
		const cookies = Object.fromEntries(
			document.cookie.split("; ").map((c) => c.split("="))
		);

		if (cookies.ts === "true") {
			const btn = document.querySelector("[data-auto]");

			if (btn) {
				const scrollToElement = (el, duration = 1200) => {
					const targetY = el.getBoundingClientRect().top + window.scrollY;
					const startY = window.scrollY;
					const startTime = performance.now();

					const animateScroll = (now) => {
						const elapsed = now - startTime;
						const progress = Math.min(elapsed / duration, 1);
						const ease =
							progress < 0.5
								? 2 * progress * progress
								: -1 + (4 - 2 * progress) * progress;

						window.scrollTo(0, startY + (targetY - startY) * ease);

						if (progress < 1) {
							requestAnimationFrame(animateScroll);
						}
					};

					requestAnimationFrame(animateScroll);
				};

				scrollToElement(btn, 1000);

				const delay = Math.floor(Math.random() * 1001);
				setTimeout(() => {
					btn.click();
				}, delay);
			}

			document.cookie =
				"ts=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		}
	}, []);

	const averageRating = product.rating

	return (
		<div className="min-h-screen bg-background relative overflow-hidden">
			<FloatingNotes />
			<Navigation />

			{/* Product Hero */}
			<section className="pt-32 pb-16 px-4">
				<div className="container mx-auto max-w-7xl">
					<div className="grid lg:grid-cols-2 gap-12 items-start">
						{/* Product Image */}
						<div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-pink/10 via-blue/10 to-accent/10">
							<Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
						</div>

						{/* Product Info */}
						<div className="space-y-6">
							<h1 className="text-5xl md:text-6xl font-bold text-balance">{product.name}</h1>

							<div className="flex items-center gap-4">
								<div className="flex gap-1">
									{Array.from({ length: 5 }).map((_, i) => (
										<Star
											key={i}
											className={`w-6 h-6 ${i < averageRating ? "fill-accent text-accent" : "text-muted-foreground/30"
												}`}
										/>
									))}
								</div>
								<span className="text-lg text-muted-foreground font-[family-name:var(--font-nunito)]">
									{averageRating}.0 ({product.reviewCount} reviews)
								</span>
							</div>

							<p className="text-xl text-muted-foreground leading-relaxed font-[family-name:var(--font-nunito)]">
								{product.description}
							</p>

							<div className="flex gap-4">
								<Button size="lg" className="flex-1 text-lg py-6 rounded-full" asChild>
									<a href={product.amazonUrl} data-auto>
										<ShoppingCart className="mr-2" />
										Buy on Amazon
									</a>
								</Button>
							</div>

							{/* Features */}
							<div className="bg-muted/30 rounded-2xl p-6 space-y-3">
								<h3 className="text-xl font-bold">Key Features</h3>
								<ul className="space-y-2">
									{product.features.map((feature, index) => (
										<li key={index} className="flex items-start gap-2">
											<CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
											<span className="font-[family-name:var(--font-nunito)]">{feature}</span>
										</li>
									))}
								</ul>
							</div>

							{/* Specifications */}
							<div className="bg-muted/30 rounded-2xl p-6 space-y-3">
								<h3 className="text-xl font-bold">Specifications</h3>
								<div className="grid grid-cols-2 gap-4">
									{Object.entries(product.specifications).map(([key, value]) => (
										<div key={key}>
											<div className="text-sm text-muted-foreground capitalize">
												{key.replace(/([A-Z])/g, " $1").trim()}
											</div>
											<div className="font-medium font-[family-name:var(--font-nunito)]">{value}</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Reviews Section */}
			<section className="py-20 px-4 bg-muted/30">
				<div className="container mx-auto max-w-7xl">
					<div className="text-center space-y-6 mb-16">
						<h2 className="text-5xl md:text-6xl font-bold text-balance">
							Customer <span className="text-primary">Reviews</span>
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-nunito)]">
							See what parents are saying about the {product.name}
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{product.reviews.map((review, index) => (
							<div
								key={index}
								className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
							>
								<Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20" />

								<div className="flex items-center gap-4 mb-4">
									<div className="text-5xl">{review.avatar}</div>
									<div className="flex-1">
										<div className="flex items-center gap-2">
											<h4 className="font-bold text-lg">{review.name}</h4>
											{review.verified && <CheckCircle className="w-4 h-4 text-primary" title="Verified Purchase" />}
										</div>
										<div className="flex gap-1 mb-1">
											{Array.from({ length: review.rating }).map((_, i) => (
												<Star key={i} className="w-4 h-4 fill-accent text-accent" />
											))}
										</div>
									</div>
								</div>

								<div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
									<Calendar className="w-4 h-4" />
									<span className="font-[family-name:var(--font-nunito)]">{review.date}</span>
								</div>

								<p className="text-muted-foreground leading-relaxed font-[family-name:var(--font-nunito)] mb-4">
									{review.text}
								</p>

								<div className="flex items-center gap-2 text-sm text-muted-foreground pt-4 border-t border-border">
									<ThumbsUp className="w-4 h-4" />
									<span className="font-[family-name:var(--font-nunito)]">
										{review.helpful} people found this helpful
									</span>
								</div>
							</div>
						))}
					</div>

					<div className="text-center mt-12">
						<Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full bg-transparent">
							Write a Review
						</Button>
					</div>
				</div>
			</section>
		</div>
	)
}
