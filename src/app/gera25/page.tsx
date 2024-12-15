import Link from "next/link";

export default function Gera25() {
	return (
		<div className="w-screen h-screen relative flex items-center justify-center overflow-hidden">
			<picture>
				<source
					media="(max-width:800px)"
					srcSet={`${process.env.NEXT_PUBLIC_IMG_URL}/gera25/bg-mobile.png`}
				/>

				<img src={`${process.env.NEXT_PUBLIC_IMG_URL}/gera25/bg.png`} alt="" className="absolute top-0 left-0 w-full h-full object-cover -z-10" />
			</picture>

			<div className="mx-auto flex flex-col items-center justify-center">
				<img src={`${process.env.NEXT_PUBLIC_IMG_URL}/gera25/logo.png`} alt="" className="z-10 translate-y-10 -translate-x-1 md:translate-x-0 scale-[1.40] md:scale-100" />

				<Link
					href="#"
					className="bg-gradient-to-r from-[#001552] via-[#5a00e0] to-[#d35dff] rounded-full py-4 md:py-6 px-20 md:px-10 text-xl md:text-2xl font-bold md:-translate-x-5 md:-translate-y-72 z-20"
				>GARANTA NA PRÉ VENDA</Link>
			</div>
		</div>
	);
}
