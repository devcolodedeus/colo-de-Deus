import { DefaultLayout } from "@/layouts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre a Colo de Deus - Colo de Deus"
};

export default function Root({ children }: { children: React.ReactNode }) {
	return (
		<DefaultLayout>
			{children}
		</DefaultLayout>
	);
}
