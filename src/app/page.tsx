"use client";

import { useHeaderTheme, useLanguage } from "@/hooks";
import { DefaultLayout } from "@/layouts";
import Link from "next/link";
import { useEffect } from "react";
import { data } from "../../data";

export default function Home() {
	const { updateTheme } = useHeaderTheme();
	const { language } = useLanguage();

	useEffect(() => {
		updateTheme("dark");
	}, []);

  return (
		<DefaultLayout>
			<section id="home-page" className="w-full h-fit">
				<picture>
					<source
						media="(max-width:800px)"
						srcSet={`${process.env.NEXT_PUBLIC_IMG_URL}/banners/mobile/HOME.png`}
					/>

					<img src={`${process.env.NEXT_PUBLIC_IMG_URL}/banners/desk/HOME.png`} alt="Welcome to Colo de Deus" className="w-full max-h-screen object-cover" />
				</picture>

				<div className="w-6/12 mx-auto py-32 grid md:flex gap-10 -translate-x-5 md:translate-x-0 items-center justify-between">
					<Link href="/eventos">
						<button className="my-button" data-label={data.home[language].btn_events}></button>
					</Link>

					<Link href="/nos-encontre">
						<button className="my-button" data-label={data.home[language].btn_where}></button>
					</Link>

					<Link href="https://hyperfy.adalo.com/celulascolodedeus" target="_blank">
						<button className="my-button" data-label={data.home[language].btn_cells}></button>
					</Link>
				</div>

				<div className="w-11/12 md:w-9/12 mx-auto p-5 flex flex-col gap-5">
					<span className="uppercase font-bold ml-2">{data.home[language].meta}</span>

					<div className="flex items-center justify-end uppercase font-bold text-xl rounded-lg bg-gradient-to-r from-pink-800 via-purple-950 to-green-950">
						<span className="bg-gradient-to-l from-black to-transparent py-4 px-5 rounded-r-lg text-sm md:text-base">{data.home[language].percent}</span>
					</div>
				</div>

				<div className="w-9/12 md:w-6/12 mx-auto py-16 md:flex gap-10 items-center justify-center">
					<Link href="/benfeitoria" target="_blank" className="w-full">
						<button className="my-button3 uppercase" data-label={data.home[language].help}></button>
					</Link>
				</div>

				<div className="w-10/12 md:w-6/12 mx-auto text-center pb-16">
					<p className="tracking-[0.4rem] text-neutral-300">{data.home[language].who}</p>
				</div>
			</section>
		</DefaultLayout>
  );
}
