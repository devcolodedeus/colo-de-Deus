"use client";

import { useHeaderTheme, useLanguage } from "@/hooks";
import { InstagramLogo, TiktokLogo, YoutubeLogo } from "@phosphor-icons/react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { data } from "../../data";
import { Nav } from "./Nav";

type Transition = {
  duration: number;
  ease?: number[];
  delay?: number;
};

type Animation = {
  x?: string | number;
  scale?: number;
  transition?: Transition;
};

type MenuSlide = {
  initial: Animation;
  enter: Animation;
  exit: Animation;
};

type Slide = {
  initial: Animation;
  enter: (i: number) => Animation;
  exit: (i: number) => Animation;
};

type Scale = {
  open: Animation;
  closed: Animation;
};

export const menuSlide: MenuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: { x: "calc(100% + 100px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
};

export const slide: Slide = {
  initial: { x: 80 },
  enter: (i: number) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i: number) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

export const scale: Scale = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } },
};

export const Header = () => {
	const [isActive, setIsActive] = useState(false);

	const { theme } = useHeaderTheme();
	const { language, updateLanguage } = useLanguage();

	return (
		<header className={`fixed transition-all duration-300 top-0 w-full flex flex-col gap-5 py-5 z-50 backdrop-blur-md ${theme === "light" ? "bg-neutral-50/80 text-gray-800" : "bg-neutral-950/80 text-gray-100"}`}>
			<AnimatePresence mode="wait">
				{isActive && <Nav handleClose={() => setIsActive(!isActive)} />}
			</AnimatePresence>

			<div className="w-10/12 mx-auto flex items-center justify-between gap-12">
				<Link href="/">
					<img src={`${process.env.NEXT_PUBLIC_IMG_URL}/header/logo.png`} alt="Logo Colo de Deus" className={`w-60 ${theme === "light" && "brightness-0"}`} />
				</Link>

				<div className="hidden uppercase md:flex items-center gap-12 font-medium text-[14px] translate-y-[2px]">
					<Link href="/sobre-nos" className="group transition-all hover:underline">{data.header[language].about}</Link>

					<Link href="/nossas-musicas" className="group transition-all hover:underline">{data.header[language].musics}</Link>

					<Link href="/eventos" className="group transition-all hover:underline">{data.header[language].events}</Link>

					<Link href="/nos-encontre" className="group transition-all hover:underline">{data.header[language].findus}</Link>

					<Link href="/benfeitoria" target="_blank" className="group transition-all hover:underline">{data.header[language].beBenefactor}</Link>

					<Link href="https://loja.colodedeus.com/" target="_blank" className="group transition-all hover:underline">{data.header[language].store}</Link>
				</div>

				<div className="flex items-center gap-10">
					<div className="flex items-center gap-2 cursor-pointer group" onClick={() => {setIsActive(!isActive)}}>
						<div className="hidden uppercase font-bold text-[14px] md:flex flex-col items-start justify-center group-hover:underline">
							{data.header[language].findoutmore}
						</div>

						<button>
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill={`${theme === "light" ? "#393939" : "#f9f9f9"}`} viewBox="0 0 256 256">
								<path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path>
							</svg>
						</button>
					</div>

					<div className="hidden md:grid grid-cols-3 items-center gap-3">
						<Link href="https://www.instagram.com/colodedeus/" target="_blank">
							<InstagramLogo size={32} weight="duotone" />
						</Link>

						<Link href="https://www.youtube.com/channel/UCw7SCTLZq2byYiirHtc25-Q" target="_blank">
							<YoutubeLogo size={32} weight="duotone" />
						</Link>

						<Link href="https://www.tiktok.com/@comcolodedeus" target="_blank">
							<TiktokLogo size={32} weight="duotone" />
						</Link>

						<button onClick={() => updateLanguage("pt")}>
							<img
								src={`${process.env.NEXT_PUBLIC_IMG_URL}/flags/brasil.png`}
								alt="Bandeira do Brasil"
								className={`transition-all w-8 duration-300 ${language !== "pt" && "grayscale"}`}
							/>
						</button>

						<button onClick={() => updateLanguage("en")}>
							<img
								src={`${process.env.NEXT_PUBLIC_IMG_URL}/flags/america.png`}
								alt="Bandeira dos Estados Unidos"
								className={`transition-all w-8 duration-300 ${language !== "en" && "grayscale"}`}
							/>
						</button>

						<button onClick={() => updateLanguage("es")}>
							<img
								src={`${process.env.NEXT_PUBLIC_IMG_URL}/flags/espanha.png`}
								alt="Bandeira da Espanha"
								className={`transition-all w-8 duration-300 ${language !== "es" && "grayscale"}`}
							/>
						</button>
					</div>
				</div>
			</div>
		</header>
	)
};
