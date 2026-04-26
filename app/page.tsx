import Navbar from "@/components/Navbar";
import Card from "@/components/Card";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="p-10">
				<h1 className="text-3xl font-bold">
					Component Playground
				</h1>

				<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
					<Card
						title="First Post"
						excerpt="This is a sample post"
						image="https://picsum.photos/600/400"
						category="Tech"
						slug="test"
					/>
					<Card
						title="First Post"
						excerpt="This is a sample post"
						image="https://picsum.photos/600/400"
						category="Tech"
						slug="test"
					/>
					<Card
						title="First Post"
						excerpt="This is a sample post"
						image="https://picsum.photos/600/400"
						category="Tech"
						slug="test"
					/>
					<Card
						title="First Post"
						excerpt="This is a sample post"
						image="https://picsum.photos/600/400"
						category="Tech"
						slug="test"
					/>
				</div>
			</main>
		</>
	);
}