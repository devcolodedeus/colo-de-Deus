import Link from "next/link";

export default function Conf25() {
	return (
		<section>
			<div className="w-screen h-screen relative flex items-center justify-center bg-[#e2e2e2] flex-col">
				<picture>
					<source
						media="(max-width:800px)"
						srcSet={`${process.env.NEXT_PUBLIC_IMG_URL}/conf25/bg-base-mobile.png`}
					/>

					<img src={`${process.env.NEXT_PUBLIC_IMG_URL}/conf25/bg-base.png`} alt="" className="w-full h-full object-cover absolute top-0 left-0" />
				</picture>

				<img src={`${process.env.NEXT_PUBLIC_IMG_URL}/conf25/texto-dobra-1.png`} alt="" className="hidden md:block w-9/12 object-cover z-10" />
				<img src={`${process.env.NEXT_PUBLIC_IMG_URL}/conf25/texto-dobra-1-responsivo.png`} alt="" className="md:hidden w-11/12 object-cover z-10" />

				<div className="md:grid grid-cols-3 gap-10 z-10">
					<div className="hidden md:flex items-center justify-end">
						<img src={`${process.env.NEXT_PUBLIC_IMG_URL}/conf25/efeito-dobra-1.png`} alt="" className="z-10" />
					</div>

					<div className="w-full h-full -translate-y-14 md:translate-y-0">
						<Link href="https://www.e-inscricao.com/colodedeus/conf25" className="w-full h-full bg-[#314fe2] flex items-center justify-center rounded-lg font-bold text-3xl text-center md:text-4xl px-10 py-5">GARANTA SEU LUGAR</Link>
					</div>

					<div className="hidden md:flex items-center justify-start">
						<img src={`${process.env.NEXT_PUBLIC_IMG_URL}/conf25/efeito-dobra-1.png`} alt="" className="z-10 rotate-180" />
					</div>
				</div>
			</div>

			<div className="w-screen min-h-screen relative bg-[#e2e2e2] flex-col mt-5 py-20 z-20">
				<img src={`${process.env.NEXT_PUBLIC_IMG_URL}/conf25/bg-base-2.png`} alt="" className="w-full -z-10 h-full object-cover absolute top-0 left-0" />

				<div className="z-10 w-9/12 mx-auto">
					<div className="grid grid-cols-3 md:grid-cols-5 gap-1">
						<img src={`${process.env.NEXT_PUBLIC_IMG_URL}/conf25/foto-1.png`} alt="" className="col-start-1 col-end-4 md:col-start-1 md:col-end-3 w-full h-full" />
						<img src={`${process.env.NEXT_PUBLIC_IMG_URL}/conf25/foto-2.png`} alt="" className="w-full object-contain h-full" />
						<img src={`${process.env.NEXT_PUBLIC_IMG_URL}/conf25/foto-3.png`} alt="" className="w-full object-contain h-full" />
						<img src={`${process.env.NEXT_PUBLIC_IMG_URL}/conf25/foto-4.png`} alt="" className="w-full object-contain h-full" />
					</div>

					<div className="grid grid-cols-3 md:grid-cols-5 gap-1">
						<img src={`${process.env.NEXT_PUBLIC_IMG_URL}/conf25/foto-5.png`} alt="" className="w-full h-full" />
						<img src={`${process.env.NEXT_PUBLIC_IMG_URL}/conf25/foto-6.png`} alt="" className="w-full object-contain h-full" />
						<img src={`${process.env.NEXT_PUBLIC_IMG_URL}/conf25/foto-7.png`} alt="" className="w-full object-contain h-full" />
						<img src={`${process.env.NEXT_PUBLIC_IMG_URL}/conf25/foto-8.png`} alt="" className="col-start-1 col-end-4 md:col-start-4 md:col-end-6 w-full h-full" />
					</div>
				</div>

				<div className="w-full flex items-center justify-center mt-10">
					<img src={`${process.env.NEXT_PUBLIC_IMG_URL}/conf25/logo-yshv.png`} alt="" />
				</div>
			</div>
		</section>
	)
}
