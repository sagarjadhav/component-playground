import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="p-10">
				<h1 className="text-3xl font-bold">
					Component Playground
				</h1>
			</main>
		</>
	);
}