import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Conferência de Líderes 2k25 - Colo de Deus",
};

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<main className="overflow-hidden bg-[#e2e2e2]">
			{children}
		</main>
	);
}
