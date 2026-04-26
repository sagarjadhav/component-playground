"use client";

import { useState } from "react";
import posts from "@/data/posts.json";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";

export default function Home() {
	const [search, setSearch] = useState("");

	const filteredPosts = posts.filter((post) =>
		post.title.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<>
			<Navbar />
			<main className="p-10">
				<h1 className="text-3xl font-bold">
					Component Playground
				</h1>

				{/* Search Input */}
				<input
					type="text"
					placeholder="Search posts..."
					className="border p-2 mb-4 w-full"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>

				<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
					{filteredPosts.map((post) => (
							<Card key={post.id} {...post} />
						))}
				</div>
			</main>
		</>
	);
}