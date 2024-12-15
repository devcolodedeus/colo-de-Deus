import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Efeito Atomiko - Colo de Deus",
};

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<main>
			{children}
		</main>
	);
}