"use client";

import { useHeaderTheme, useLanguage } from "@/hooks";
import { useEffect } from "react";
import { data } from "../../../data";

export default function Eventos() {
	const { updateTheme } = useHeaderTheme();
	const { language } = useLanguage();

	useEffect(() => {
		updateTheme("dark");
	}, []);

	return (
		<section id="eventos" className="bg-neutral-900">
			<picture>
				<source
					media="(max-width:800px)"
					srcSet={`${process.env.NEXT_PUBLIC_IMG_URL}/banners/mobile/EVENTOS.png`}
				/>

				<img src={`${process.env.NEXT_PUBLIC_IMG_URL}/banners/desk/EVENTOS.png`} alt="Eventos Colo de Deus" className="w-full max-h-screen object-cover object-center" />
			</picture>

			<div className="w-9/12 mx-auto py-20 bg-neutral-900">
				<div className="grid md:grid-cols-2 gap-16">
					<div className="flex flex-col md:flex-row gap-5">
						<div className="flex flex-col gap-10 md:max-w-[40%]">
							<img
								src={`${process.env.NEXT_PUBLIC_IMG_URL}/eventos/conferencia.JPG`}
								alt="evento"
								className="w-full"
							/>
						</div>

						<div>
							<h2 className="font-semibold text-2xl uppercase mb-3">Conferência Yeshiva</h2>
							<p className="text-justify text-neutral-200 text-[15px] tracking-[0.1rem]">{data.events[language].yshv}</p>
						</div>
					</div>

					<div className="flex flex-col md:flex-row gap-5">
						<div className="flex flex-col gap-10 md:max-w-[40%]">
							<img
								src={`${process.env.NEXT_PUBLIC_IMG_URL}/eventos/geracao.jpg`}
								alt="evento"
								className="w-full"
							/>
						</div>

						<div>
							<h2 className="font-semibold text-2xl uppercase mb-3">Geração Atomika</h2>
							<p className="text-justify text-neutral-200 text-[15px] tracking-[0.1rem]">{data.events[language].geracao}</p>
						</div>
					</div>

					<div className="flex flex-col md:flex-row	gap-5">
						<div className="flex flex-col gap-10 md:max-w-[40%]">
							<img
								src={`${process.env.NEXT_PUBLIC_IMG_URL}/eventos/verdadeira.jpg`}
								alt="evento"
								className="w-full"
							/>
						</div>

						<div>
							<h2 className="font-semibold text-2xl uppercase mb-3">Conferência Verdadeira</h2>
							<p className="text-justify text-neutral-200 text-[15px] tracking-[0.1rem]">{data.events[language].verdadeira}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
