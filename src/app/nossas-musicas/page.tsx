"use client";

import { useHeaderTheme, useLanguage } from "@/hooks";
import Link from "next/link";
import { useEffect } from "react";
import { data } from "../../../data";
// ${process.env.NEXT_PUBLIC_IMG_URL}
export default function Page() {
	const { language } = useLanguage();
	const { updateTheme } = useHeaderTheme();

	useEffect(() => {
		updateTheme("dark");
	}, []);

	return (
		<div className="mt-24">
			<div className="w-9/12 mx-auto flex items-center justify-center">
				<h1 className="uppercase text-[2rem] md:text-[7rem] text-center font-thin tracking-[1rem] md:tracking-[1.5rem] z-10">
					{data.musics[language].music_title1}<br /><span className="font-bold block -translate-y-[1rem] md:-translate-y-[5rem]">{data.musics[language].music_title2}</span>
				</h1>
			</div>

			<div className="w-10/12 mx-auto flex items-center justify-center -translate-y-[1.5rem] md:-translate-y-[7rem]">
				<div className="w-full grid grid-cols-[0.15fr_0.7fr_0.15fr]">
					<div className="w-full h-60 md:h-full flex items-center justify-center grayscale">
						<img src={`${process.env.NEXT_PUBLIC_IMG_URL}/banners/desk/MUSICA-FUNDO.png`} alt="Image 1" className="h-full object-cover object-right" />
					</div>

					<div className="w-full h-60 md:h-full flex items-center justify-center scale-110 z-10">
						<img src={`${process.env.NEXT_PUBLIC_IMG_URL}/banners/desk/MUSICA.jpg`} alt="Image 1" className="w-full h-full object-cover object-center" />
					</div>

					<div className="w-full h-60 md:h-full flex items-center justify-center grayscale">
						<img src={`${process.env.NEXT_PUBLIC_IMG_URL}/banners/desk/MUSICA-FUNDO.png`} alt="Image 1" className="h-full object-cover object-left" />
					</div>
				</div>
			</div>

			<div className="w-10/12 mx-auto flex items-center justify-center mt-8">
				<h2 className="tracking-[0.4rem] text-neutral-300 text-3xl md:text-5xl uppercase text-center">{data.musics[language].music_title3}</h2>
			</div>

			<div className="w-10/12 md:w-8/12 mx-auto flex items-center justify-center">
				<p className="tracking-[0.2rem] md:tracking-[0.4rem] text-neutral-300 leading-[2] md:leading-[2.6] text-justify md:text-center my-10">{data.musics[language].music_text}</p>
			</div>

			<div className="mt-10 mb-40">
				<div className="w-11/12 md:w-8/12 mx-auto grid md:grid-cols-3 gap-24">
					<div className="w-11/12 mx-auto flex flex-col items-center justify-center">
						<img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png" alt="" />
						<Link href="https://open.spotify.com/intl-pt/artist/1AY6YtpuVujP4Pa3ibD1M1" target="_blank">
							<button className="my-button translate-y-16" data-label={data.musics[language].music_btn}></button>
						</Link>
					</div>

					<div className="flex flex-col items-center justify-center">
						<img src="https://images.squarespace-cdn.com/content/v1/5914a63fdb29d6bce71dbdf1/1594529522668-GTELP4H7IF08AVDV3354/apple+music+logo+white+1024+x+411.png" alt="" />
						<Link href="https://music.apple.com/us/artist/colo-de-deus/967566433" target="_blank">
							<button className="my-button translate-y-9" data-label={data.musics[language].music_btn}></button>
						</Link>
					</div>

					<div className="w-10/12 mx-auto flex flex-col items-center justify-center">
						<img src="https://cdn.worldvectorlogo.com/logos/youtube-music-1.svg" alt="" />
						{/* <img src="https://freelogopng.com/images/all_img/1656504144youtube-logo-png-white.png" alt="" /> */}
						<Link href="https://music.youtube.com/channel/UCAaNQ4uHme-u09nyi-2x1lQ" target="_blank">
							<button className="my-button translate-y-16" data-label={data.musics[language].music_btn}></button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
