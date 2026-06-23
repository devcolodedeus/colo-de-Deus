import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Amigo pra toda Obra - Colo de Deus",
	description:
		"Faça parte da 1ª Geração de Amigos da Colo de Deus. Nossas missões e a construção da nova Casa Formativa precisam de você!",
};

export default function AmigoPraTodaObraLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <main className="overflow-x-hidden bg-white text-neutral-900">{children}</main>;
}
