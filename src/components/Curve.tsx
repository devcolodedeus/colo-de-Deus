"use client";

import { motion } from "framer-motion";

export const Curve = () => {
	const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight/2} 100 0`;
	const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight/2} 100 0`;

	const curve = {
		initial: {
			d: initialPath
		},
		enter: {
			d: targetPath,
			transition: {duration: 1, ease: [0.76, 0, 0.24, 1]}
		},
		exit: {
			d: initialPath,
			transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}
		}
	}

	return (
		<svg className="absolute top-0 -left-24 w-[100px] h-full fill-[#191919] stroke-none">
			<motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
		</svg>
	);
};
