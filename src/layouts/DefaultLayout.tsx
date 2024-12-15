import { Header } from "@/components";

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />

			<main>
				{children}
			</main>
		</>
	);
};
