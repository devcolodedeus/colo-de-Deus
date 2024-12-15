"use client";

import { useEffect } from "react";

import { useHeaderTheme, useLanguage } from "@/hooks";
import Link from "next/link";
import { data } from "../../../data";

const baluartes = [
	{ id: 1, uri: `${process.env.NEXT_PUBLIC_IMG_URL}/baluartes/santa-faustina.png`, title: "Santa Faustina", video: "https://www.youtube.com/watch?v=j7zC8yfJN8Y" },
	{ id: 2, uri: `${process.env.NEXT_PUBLIC_IMG_URL}/baluartes/santa-teresa.png`, title: "Santa Teresa", video: "https://www.youtube.com/watch?v=sGZfD9A-QIk" },
	{ id: 3, uri: `${process.env.NEXT_PUBLIC_IMG_URL}/baluartes/sao-francisco.png`, title: "São Francisco de Assis", video: "https://www.youtube.com/watch?v=ZdQGB9XtlLI" },
	{ id: 4, uri: `${process.env.NEXT_PUBLIC_IMG_URL}/baluartes/sao-jp2.png`, title: "São João Paulo II", video: "https://www.youtube.com/watch?v=_DBCG7TglZo" },
];

export default function SobreNos() {
	const { updateTheme } = useHeaderTheme();
	const { language } = useLanguage();

	useEffect(() => {
		updateTheme("dark");
	}, []);

	return (
		<section id="sobre-nos" className="pt-20">
			<picture>
				<source
					media="(max-width:800px)"
					srcSet={`${process.env.NEXT_PUBLIC_IMG_URL}/banners/mobile/SOBRE.png`}
				/>

				<img src={`${process.env.NEXT_PUBLIC_IMG_URL}/banners/desk/SOBRE.png`} alt="About the Colo de Deus" className="w-full max-h-screen object-cover object-bottom" />
			</picture>


			{/* <div className="bg-neutral-900 py-10">
				<div className="w-9/12 mx-auto">
					{domLoaded && (
						<ReactPlayer
							url="https://www.youtube.com/watch?v=OZHOuyvSAps"
							width="100%"
							style={{ minHeight: 700 }}
							controls
						/>
					)}
				</div>
			</div> */}

			<div className="py-12 md:py-24 bg-neutral-100">
				<div className="w-9/12 mx-auto">
					<p className="text-neutral-600 md:columns-3 text-justify gap-16 leading-8">
						{data.about[language].text_about}

						<span className="block">
							<Link href="https://instagram.com/colodedeus/" target="_blank">
								<button className="my-button3" data-label={data.about[language].text_btn}></button>
							</Link>
						</span>
					</p>
				</div>

				<div className="hidden md:block w-9/12 mx-auto my-40">
					<img src={`${process.env.NEXT_PUBLIC_IMG_URL}/joao-423.png`} alt="Passagem João 4 - 23" className="w-full" />
				</div>

				<div className="w-9/12 mx-auto flex items-center gap-10">
					<div className="hidden md:block w-full h-1 bg-neutral-800 rounded"></div>
					<h2 className="text-center md:text-left mt-20 md:mt-0 md:whitespace-nowrap text-gray-800 font-bold tracking-[0.4rem] uppercase">{data.about[language].text_baluartes}</h2>
					<div className="hidden md:block w-full h-1 bg-neutral-800 rounded"></div>
				</div>

				<div className="w-11/12 md:w-9/12 mx-auto grid md:grid-cols-4 gap-10 mt-20">
					{baluartes.map((baluarte) => (
						<Link href={baluarte.video} target="_blank" key={baluarte.id} className="flex flex-col gap-2.5">
							<img src={baluarte.uri} alt={baluarte.title} className="w-full" />

							<span className="uppercase font-bold tracking-[0.4rem] text-gray-800">{baluarte.title}</span>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
