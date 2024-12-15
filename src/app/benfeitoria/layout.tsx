import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Seja um Benfeitor - Colo de Deus",
	description: "Somos a Colo de Deus. Uma nova comunidade católica que nasceu como parte da Primavera da Igreja! O nosso carisma nos movimenta e rege as nossas vidas. Somos chamados a trazer de volta à Igreja os afastados da fé, gestando uma humanidade cheia de Pentecostes."
};

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		<main>
			<section className="bg-neutral-800">{children}</section>
		</main>
	);
}
