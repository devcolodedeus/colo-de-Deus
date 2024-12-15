import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Geração Atmk 2k25 - Colo de Deus",
};

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<main>
			{children}
		</main>
	);
}
