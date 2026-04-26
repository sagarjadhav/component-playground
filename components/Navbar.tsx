import Link from "next/link";

const links = [
	{ label: "Home", href: "/" },
	{ label: "Blog", href: "/blog" },
	{ label: "About", href: "/about" },
];

export default function Navbar() {
	return (
		<nav className="flex justify-between items-center p-4 border-b">
			
			{/* Logo */}
			<div className="text-xl font-bold">
				<Link href="/">MySite</Link>
			</div>

			{/* Desktop Navigation */}
			<div className="space-x-6 hidden md:flex">
				{links.map((link) => (
					<Link key={link.href} href={link.href} className="hover:text-blue-600">
						{link.label}
					</Link>
				))}
			</div>

			{/* Mobile Menu Button (UI only for now) */}
			<button className="md:hidden text-xl">
				☰
			</button>

		</nav>
	);
}