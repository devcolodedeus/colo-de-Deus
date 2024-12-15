"use client";

import { useHeaderTheme, useLanguage } from "@/hooks";
import { X } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { data } from "../../data";
import { Curve } from "./Curve";
import { menuSlide, scale, slide } from "./Header";

export const Nav = ({ handleClose }: { handleClose: () => void; }) => {
	const pathname = usePathname();

  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

	const { theme } = useHeaderTheme();
	const { language, updateLanguage } = useLanguage();

	return (
		<motion.div
			variants={menuSlide}
			initial="initial"
			animate="enter"
			exit="exit"
			className="h-screen bg-[#191919] fixed right-0 top-0 text-white z-20"
		>
			<div className="p-5 flex items-center justify-between">
				<div className="flex items-center justify-between gap-3">
					<Link href="/" className="w-full md:hidden">
						<img src={`${process.env.NEXT_PUBLIC_IMG_URL}/header/logo.png`} alt="Logo Colo de Deus" className={`w-60 ${theme === "light" && "brightness-0"}`} />
					</Link>
					{/* <button>
						<InstagramLogo size={32} weight="duotone" />
					</button>

					<button>
						<YoutubeLogo size={32} weight="duotone" />
					</button>

					<button>
						<TiktokLogo size={32} weight="duotone" />
					</button> */}
				</div>

				<h2 onClick={handleClose} className="cursor-pointer">
					<X color="#f9f9f9" weight="bold" size={32} />
				</h2>
			</div>

			<div className="box-border h-full p-14 md:p-24 pt-0 flex flex-col justify-between">
				<div onMouseLeave={() => {setSelectedIndicator(pathname)}} className="w-full flex flex-col uppercase text-2xl gap-4 mt-10 md:mt-20">
					<div className="text-[#999999] border-b border-[1px solid #999999] text-base mb-5">
						<p>Páginas colo de Deus</p>
					</div>

					<motion.div
						className="relative flex items-center"
						onMouseEnter={() => {setSelectedIndicator("/")}}
						variants={slide}
						initial="initial"
						animate="enter"
						exit="exit"
					>
						<motion.div
							variants={scale}
							animate={selectedIndicator === "/" ? "open" : "closed"}
							className="w-3 h-3 bg-white rounded-[50%] absolute -left-7">
						</motion.div>
						<Link href="/" onClick={handleClose}>home</Link>
					</motion.div>

					<motion.div
						className="relative flex items-center"
						onMouseEnter={() => {setSelectedIndicator("/sobre-nos")}}
						variants={slide}
						initial="initial"
						animate="enter"
						exit="exit"
					>
						<motion.div
							variants={scale}
							animate={selectedIndicator === "/sobre-nos" ? "open" : "closed"}
							className="w-3 h-3 bg-white rounded-[50%] absolute -left-7">
						</motion.div>
						<Link href="/sobre-nos" onClick={handleClose}>{data.header[language].about}</Link>
					</motion.div>

					<motion.div
						className="relative flex items-center"
						onMouseEnter={() => {setSelectedIndicator("/nossas-musicas")}}
						variants={slide}
						initial="initial"
						animate="enter"
						exit="exit"
					>
						<motion.div
							variants={scale}
							animate={selectedIndicator === "/nossas-musicas" ? "open" : "closed"}
							className="w-3 h-3 bg-white rounded-[50%] absolute -left-7">
						</motion.div>
						<Link href="/nossas-musicas" onClick={handleClose}>{data.header[language].musics}</Link>
					</motion.div>

					<motion.div
						className="relative flex items-center"
						onMouseEnter={() => {setSelectedIndicator("/eventos")}}
						variants={slide}
						initial="initial"
						animate="enter"
						exit="exit"
					>
						<motion.div
							variants={scale}
							animate={selectedIndicator === "/eventos" ? "open" : "closed"}
							className="w-3 h-3 bg-white rounded-[50%] absolute -left-7">
						</motion.div>
						<Link href="/eventos" onClick={handleClose}>{data.header[language].events}</Link>
					</motion.div>

					<motion.div
						className="relative flex items-center"
						onMouseEnter={() => {setSelectedIndicator("/nos-encontre")}}
						variants={slide}
						initial="initial"
						animate="enter"
						exit="exit"
					>
						<motion.div
							variants={scale}
							animate={selectedIndicator === "/nos-encontre" ? "open" : "closed"}
							className="w-3 h-3 bg-white rounded-[50%] absolute -left-7">
						</motion.div>
						<Link href="/nos-encontre" onClick={handleClose}>{data.header[language].findus}</Link>
					</motion.div>

					<motion.div
						className="relative flex items-center"
						onMouseEnter={() => {setSelectedIndicator("/benfeitoria")}}
						variants={slide}
						initial="initial"
						animate="enter"
						exit="exit"
					>
						<motion.div
							variants={scale}
							animate={selectedIndicator === "/benfeitoria" ? "open" : "closed"}
							className="w-3 h-3 bg-white rounded-[50%] absolute -left-7">
						</motion.div>
						<Link href="/benfeitoria" target="_blank" onClick={handleClose}>{data.header[language].beBenefactor}</Link>
					</motion.div>

					<motion.div
						className="relative flex items-center"
						variants={slide}
						initial="initial"
						animate="enter"
						exit="exit"
					>
						<motion.div
							variants={scale}
							animate="closed"
							className="w-3 h-3 bg-white rounded-[50%] absolute -left-7">
						</motion.div>
						<Link href="https://loja.colodedeus.com/" target="_blank">{data.header[language].store}</Link>
					</motion.div>
				</div>

				<Curve />
			</div>

			<footer className="md:hidden absolute bottom-0 w-full p-14">
				<div className="border-t"></div>

				<div className="flex items-center gap-5 mt-5">
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
			</footer>
    </motion.div>
	);
};
