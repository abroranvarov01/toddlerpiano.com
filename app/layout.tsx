import type React from "react"
import type { Metadata } from "next"
import { Baloo_2, Nunito_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import "./globals.css"

const baloo = Baloo_2({
	subsets: ["latin"],
	variable: "--font-baloo",
	weight: ["400", "500", "600", "700", "800"],
})

const nunito = Nunito_Sans({
	subsets: ["latin"],
	variable: "--font-nunito",
	weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
	title: "ToddlerPiano.com - Musical Instruments for Toddlers",
	description:
		"The best children's musical instruments: pianos, xylophones, drums and guitars to develop your child's creative abilities",
	referrer: 'unsafe-url'
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${baloo.variable} ${nunito.variable} font-sans antialiased`}>
				<Suspense fallback={null}>
					{children}
					<Analytics />
				</Suspense>
				<ThemeToggle />
			</body>
		</html>
	)
}
