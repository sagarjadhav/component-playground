import Image from "next/image";
import Link from "next/link";

export default function Card({ title, excerpt, image, category, slug }) {
	return (
		<div className="border rounded-lg overflow-hidden">
			<div className="relative w-full h-48">
				<Image
				src={image}
				alt={title}
				fill
				sizes="(max-width: 768px) 100vw, 33vw"
				className="object-cover"
				/>
			</div>

			<div className="p-4">
				<span className="text-sm text-blue-500">{category}</span>
				<h2 className="text-lg font-semibold">{title}</h2>
				<p className="text-sm text-gray-600">{excerpt}</p>

				<Link href={`/blog/${slug}`} className="text-blue-600">
					Read More
				</Link>
			</div>
		</div>
	);
}