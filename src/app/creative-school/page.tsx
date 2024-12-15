"use client"

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Grid } from "@splidejs/splide-extension-grid";
import Link from "next/link";

const fotos = [
	{ id: 0, uri: "https://static.colodedeus.com/crtv-fotos/1-min.jpg" },
	{ id: 1, uri: "https://static.colodedeus.com/crtv-fotos/2-min.jpg" },
	{ id: 2, uri: "https://static.colodedeus.com/crtv-fotos/3-min.jpg" },
	{ id: 3, uri: "https://static.colodedeus.com/crtv-fotos/4-min.jpg" },
	{ id: 4, uri: "https://static.colodedeus.com/crtv-fotos/5-min.jpg" },
	{ id: 5, uri: "https://static.colodedeus.com/crtv-fotos/6-min.jpg" },
	{ id: 6, uri: "https://static.colodedeus.com/crtv-fotos/7-min.jpg" },
	{ id: 7, uri: "https://static.colodedeus.com/crtv-fotos/8-min.jpg" },
	{ id: 8, uri: "https://static.colodedeus.com/crtv-fotos/9-min.JPG" },
	{ id: 9, uri: "https://static.colodedeus.com/crtv-fotos/10-min.JPG" },
	{ id: 10, uri: "https://static.colodedeus.com/crtv-fotos/11-min.JPG" },
	{ id: 11, uri: "https://static.colodedeus.com/crtv-fotos/12-min.JPG" },
];

const learning = [
	{ id: 0, uri: "https://static.colodedeus.com/crtv-icones/01.png", title: "Cobertura de mídias nos eventos;" },
	{ id: 1, uri: "https://static.colodedeus.com/crtv-icones/02.png", title: "Espiritualidade do criativo;" },
	{ id: 2, uri: "https://static.colodedeus.com/crtv-icones/03.png", title: "Social Media e criação de conteúdo;" },
	{ id: 3, uri: "https://static.colodedeus.com/crtv-icones/04.png", title: "Fotografia; " },
];

const learning2 = [
	{ id: 4, uri: "https://static.colodedeus.com/crtv-icones/05.png", title: "Produção de eventos;" },
	{ id: 5, uri: "https://static.colodedeus.com/crtv-icones/06.png", title: "Liderança criativa;" },
	{ id: 6, uri: "https://static.colodedeus.com/crtv-icones/07.png", title: "Branding e muito mais…" },
];

export default function CreativeSchool() {
	return (
		<section className="overflow-hidden -z-40" id="creative-school">
			<div className="relative w-full min-h-[105vh] flex flex-col">
				<img src="https://static.colodedeus.com/home-crtv.png" alt="" className="absolute h-full w-full object-cover -z-20" />

				<div className="relative flex items-center justify-center py-20 md:p-24 w-full h-fit">
					<img src="https://static.colodedeus.com/header-crtv.png" alt="" className="absolute h-full w-full object-cover -z-10" />
					<img src="https://static.colodedeus.com/crtv-logo.png" alt="" className="z-10 -translate-y-[60%] md:-translate-y-[40%] w-[70%] md:w-[470px]" />
				</div>

				<div className="w-full xl:w-11/12 2xl:w-9/12 mx-auto text-white -translate-y-10 px-10 md:px-0 mb-20 md:mb-0">
					<div className="w-full md:w-1/2 2xl:w-3/6 flex flex-col gap-5 md:pr-10">
						<h1 className="text-3xl md:text-5xl uppercase">Sua <span className="font-bold">casa criativa</span> de discipulado.</h1>

						<div className="w-full md:w-10/12">
							<p className="text-base md:text-xl font-medium leading-tight">A <span className="font-bold">Criatividade da Colo de Deus está abrindo as portas</span> para criativos que desejam despertar e potencializar a sua criatividade. Um lugar de <span className="font-bold">pessoas que entenderam</span> que não conseguem viver sem<br /> serem tocadas <span className="font-bold">pela inspiração do Espírito de<br />Deus.</span></p>
						</div>

						<p className="text-2xl uppercase">Acreditamos que o <span className="font-bold">CREATIVE SCHOOL</span><br /> é uma <span className="font-bold">resposta para<br /> criativos inconformados.</span></p>

						<div className="flex flex-col gap-5">
							<Link href="https://pay.kiwify.com.br/TIrtvzo" target="_blank"><button className="w-full md:w-fit bg-purple-600 text-indigo-900 py-5 px-5 md:px-10 rounded-full text-xl md:text-3xl font-bold">QUERO SER ALUNO</button></Link>
							<span className="font-light uppercase text-2xl ">de <span className="line-through">R$ 397</span> por <span className="font-bold">R$197</span></span>
						</div>
					</div>
				</div>

				<div className="rounded-t-[40px] md:rounded-t-[70px] bg-white absolute bottom-0 w-full py-10"></div>
			</div>

			<div className="relative w-full flex flex-col bg-white py-5 md:py-20">
				<div className="w-full px-5 md:px-0 md:w-9/12 mx-auto grid md:grid-cols-[0.55fr_0.45fr] gap-10 md:gap-0">
					<div className="relative flex flex-col gap-10">
						<div className="w-full md:w-9/12 relative">
							<div className="bg-gradient-to-r from-purple-600 via-purple-300 to-purple-200 rounded-xl p-1">
								<p className="p-5 text-lg bg-white rounded-[9px] text-indigo-900">
									A Criatividade é um dom de Deus. No princípio, <span className="font-bold">“Deus criou o homem à sua imagem; à imagem de Deus o criou; homem e mulher os criou.”</span> No <span className="font-bold">CREATIVE SCHOOL</span>, você não apenas aprende técnicas; você aprende a criar e a potencializar sua criatividade de um jeito inovador e fora da caixa.
								</p>
							</div>
						</div>

						<div className="md:pr-10">
							<Splide
								extensions={{ Grid, AutoScroll }}
								options={{
									type: "loop",
									pagination: false,
									arrows: false,
									gap: 0,
									autoScroll: {
										speed: 0.5
									},
									grid: {
										rows: 2,
										cols: 6,
										gap: {
											row: 0,
											col: 0
										}
									}
								}}
							>
								{fotos.map((foto) => (
									<SplideSlide key={foto.id}>
										<img src={foto.uri} alt="" className="w-full h-full block" />
									</SplideSlide>
								))}
							</Splide>
						</div>
					</div>

					<div>
						<div className="flex flex-col gap-3 font-medium">
							<h5 className="text-indigo-900 uppercase font-bold text-3xl">SE VOCÊ:</h5>

							<div className="flex items-center gap-3">
								<span className="w-5 h-5 bg-indigo-900"></span>
								<p className="text-indigo-900 uppercase text-xl">
									já teve episódios de bloqueio criativo e não sabia o que fazer;
								</p>
							</div>

							<div className="flex items-center gap-3">
								<span className="w-5 h-5 bg-indigo-900"></span>
								<p className="text-indigo-900 uppercase text-xl">
									teve problemas em ter uma boa comunicação com seu grupo de oração, Paróquia ou movimento;
								</p>
							</div>

							<div className="flex items-center gap-3">
								<span className="w-5 h-5 bg-indigo-900"></span>
								<p className="text-indigo-900 uppercase text-xl">
									está cansado de ver conteúdos iguais em todas as redes sociais;
								</p>
							</div>

							<div className="flex items-center gap-3">
								<span className="w-5 h-5 bg-indigo-900"></span>
								<p className="text-indigo-900 uppercase text-xl">
									é um inconformado e quer fazer a diferença na sua realidade atual:
								</p>
							</div>

							<h5 className="font-medium text-4xl text-indigo-900 uppercase my-3">
								O <span className="font-bold">CREATIVE SCHOOL</span> é a resposta que vai <span className="font-bold">despertar a sua criatividade.</span>
							</h5>

							<div className="flex flex-col gap-5">
								<Link href="https://pay.kiwify.com.br/TIrtvzo" target="_blank">
									<button className="w-full md:w-fit bg-purple-600 text-indigo-900 py-5 px-4 md:px-10 rounded-full text-xl md:text-3xl font-bold">QUERO FAZER A DIFERENÇA</button>
								</Link>
								<span className="font-light uppercase text-2xl pl-5 text-indigo-900">de <span className="line-through">R$ 397</span> por <span className="font-bold">R$197</span></span>
							</div>
						</div>
					</div>
				</div>

				<div className="hidden md:block absolute w-full rounded-b-[70px] bottom-0 bg-white translate-y-full py-20 z-10"></div>
			</div>

			<div className="relative w-full min-h-screen flex items-center justify-center md:pt-80 md:pb-20 px-5 py-10">
				<img src="https://static.colodedeus.com/bg-aluno-crtv.png" alt="" className="absolute h-full w-full object-cover -z-20 rounded-b-[25px]" />

				<div className="w-full md:w-9/12 mx-auto p-10 bg-white rounded-xl">
					<h5 className="text-4xl font-medium w-full md:w-6/12 text-indigo-900">O QUE VOCÊ VAI <span className="font-bold">RECEBER</span> SENDO <span className="font-bold">ALUNO DO CREATIVE SCHOOL:</span></h5>

					<div className="pt-20 md:py-20 flex flex-col gap-10 md:gap-16">
						<div className="grid md:grid-cols-4 justify-between gap-10 md:gap-0">
							{learning.map(learnin => (
								<div key={learnin.id} className="flex flex-col items-center gap-5">
									<img src={learnin.uri} alt="" className="w-28" />
									<h6 className="uppercase text-indigo-900 font-semibold text-2xl text-center">{learnin.title}</h6>
								</div>
							))}
						</div>

						<div className="grid md:grid-cols-3 md:px-32 gap-10 md:gap-0">
							{learning2.map(learnin => (
								<div key={learnin.id} className="flex flex-col items-center justify-center gap-5">
									<img src={learnin.uri} alt="" className="w-28" />
									<h6 className="uppercase text-indigo-900 font-semibold text-2xl text-center">{learnin.title}</h6>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="relative bg-white w-full min-h-screen flex items-center justify-center py-10 px-5 md:px-0 md:pt-40 md:pb-20">
				<div className="grid md:grid-cols-6 gap-10 md:gap-0">
					<div className="hidden md:block relative w-full col-start-1 col-end-6 row-start-1 row-end-2">
						<img src="https://static.colodedeus.com/NOTE-min-2.png" alt="" className="w-full -translate-x-1/3" />
					</div>
					<div className="md:col-start-4 md:col-end-6 md:row-start-1 md:row-end-2 py-0 md:py-28 flex flex-col items-end gap-5">
						<img src="https://static.colodedeus.com/LOGO-alt.png" alt="" className="w-[90%]" />

						<h5 className="text-right text-3xl md:text-6xl text-indigo-900 my-2">
							TORNE-SE UM ALUNO<br />DO <span className="font-bold">CREATIVE<br />SCHOOL</span> HOJE!
						</h5>

						<div className="flex flex-col text-indigo-900 text-right text-lg md:text-xl font-medium">
							<p className="text-xl md:text-2xl underline"><span className="font-bold">Bônus</span> para as primeiras 24h</p>
							<p className="text-2xl underline mb-5">Imersão <span className="font-bold">prática de criatividade</span></p>

							<p>Acesso de 6 meses: <span className="font-bold line-through">R$ 397</span></p>
							<p>5 Módulos: <span className="font-bold line-through">R$ 1.997</span></p>
							<p className="mb-10 text-3xl mt-2">POR: <span className="font-bold">R$197</span></p>

							<Link href="https://pay.kiwify.com.br/TIrtvzo" target="_blank">
								<button className="w-full md:w-fit bg-purple-600 text-indigo-900 py-5 px-10 rounded-full text-xl md:text-3xl font-bold">GARANTA SEU LUGAR</button>
							</Link>
						</div>
					</div>

					<div className="md:hidden relative w-[200%]">
						<img src="https://static.colodedeus.com/NOTE-min-2.png" alt="" className="w-full -translate-x-2/4 md:-translate-x-1/3" />
					</div>
				</div>
			</div>

			<div className="relative bg-white w-full min-h-screen flex flex-col gap-20 py-10 md:py-40 px-5 md:px-0">
				<div className="w-full md:w-9/12 mx-auto">
					<h5 className="text-indigo-900 text-3xl md:text-5xl"><span className="font-bold">SAIBA</span> QUEM SERÃO <span className="font-bold">SEUS<br /> PROFESSORES:</span></h5>
				</div>

				<div className="w-full md:w-9/12 mx-auto">
					<div className="w-full md:w-8/12 mx-auto grid md:grid-cols-2 gap-10">
						<Link href="https://instagram.com/jhenifercolodedeus" target="_blank" className="flex flex-col gap-4 rounded-lg bg-gray-200 py-5 px-7 text-indigo-900">
							<div className="w-full bg-indigo-900 rounded-xl">
								<img src="https://static.colodedeus.com/JHEN_foto.png" alt="" />
							</div>
							<span className="w-full flex items-center justify-center text-indigo-900 text-2xl py-2.5 font-semibold bg-purple-500 rounded-full">Jhenifer Ferreira</span>
							<p className="font-bold">@jhenifercolodedeus</p>
							<p><span className="font-bold">Consagrada da Colo de Deus</span>, criativa, apaixonada por filtro vintage e células. Compra coisas por causa da embalagem, é especialista em fazer feijão com bacon em dias que tem muitas reuniões e lidera a <span className="font-bold">CRTV</span> Colo de Deus.</p>
						</Link>

						<Link href="https://instagram.com/heitorcolodedeus" target="_blank" className="flex flex-col gap-4 rounded-lg bg-gray-200 py-5 px-7 text-indigo-900">
							<div className="w-full bg-indigo-900 rounded-xl">
								<img src="https://static.colodedeus.com/TOI_foto.png" alt="" />
							</div>
							<span className="w-full flex items-center justify-center text-indigo-900 text-xl md:text-2xl py-2.5 font-semibold bg-purple-500 rounded-full">Heitor Otávio Coutinho</span>
							<p className="font-bold">@heitorcolodedeus</p>
							<p><span className="font-bold">Consagrado da Colo de Deus</span>, criativo, designer, devoto de Santa Teresa de Calcutá, <span className="font-bold">fã n° 1 de Interstellar</span> (já assistiu 3983098309 vezes) e faz o melhor macarrão de panela de pressão do universo.</p>
						</Link>

						<Link href="https://instagram.com/mathcolodedeus" target="_blank" className="flex flex-col gap-4 rounded-lg bg-gray-200 py-5 px-7 text-indigo-900">
							<div className="w-full bg-indigo-900 rounded-xl">
								<img src="https://static.colodedeus.com/MATH_foto.png" alt="" />
							</div>
							<span className="w-full flex items-center justify-center text-indigo-900 text-2xl py-2.5 font-semibold bg-purple-500 rounded-full">Matheus Pinheiro</span>
							<p className="font-bold">@mathcolodedeus</p>
							<p><span className="font-bold">Consagrado da Colo de Deus</span>, influencer, criativo, explica coisas que todo católico deveria saber, ama frango no churras e é <span className="font-bold">inventor do termo “prod” na Colo.</span></p>
						</Link>

						<Link href="https://instagram.com/felipecolodedeus" target="_blank" className="flex flex-col gap-4 rounded-lg bg-gray-200 py-5 px-7 text-indigo-900">
							<div className="w-full bg-indigo-900 rounded-xl">
								<img src="https://static.colodedeus.com/FE_foto.png" alt="" />
							</div>
							<span className="w-full flex items-center justify-center text-indigo-900 text-2xl py-2.5 font-semibold bg-purple-500 rounded-full">Felipe Viana</span>
							<p className="font-bold">@felipecolodedeus</p>
							<p><span className="Celibatário da Colo de Deus">Celibatário da Colo de Deus</span>, criativo, dá conselhos como ninguém, ama fuscas e umas fotos no feed - típico low profile conceitual e <span className="font-bold">líder da Produtora de Eventos da Colo de Deus.</span></p>
						</Link>
					</div>
				</div>
			</div>

			<div className="relative py-10 flex items-center justify-center">
				<img src="https://static.colodedeus.com/BARRA.png" alt="" className="absolute h-full w-full object-cover -z-10" />

				<div className="w-full md:w-9/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
					<img src="https://static.colodedeus.com/LOGO-alt-2.png" alt="" className="w-3/4 md:w-1/4" />
					<img src="https://static.colodedeus.com/CDD.png" alt="" className="w-3/4 md:w-1/4" />
				</div>
			</div>
		</section>
	);
}
