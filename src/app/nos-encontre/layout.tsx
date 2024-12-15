import { DefaultLayout } from "@/layouts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Encontre - Colo de Deus"
};

export default function Root({ children }: { children: React.ReactNode }) {
	return (
		<DefaultLayout>
			{children}
		</DefaultLayout>
	);
}
