"use client";

import Link from "next/link";

import { motion } from "framer-motion";

export default function Benfeitoria() {
	return (
		<div className="bg-neutral-800 overflow-x-hidden">
			<div className="w-full gap-12 h-screen bg-[url('https://static.colodedeus.com/benfeitoria/bg-home.png')] bg-center md:bg-top flex items-center justify-center flex-col">
				<motion.h1
					initial={{ opacity: 0, translateY: "100%" }}
					whileInView={{ opacity: 1, translateY: "0%" }}
					transition={{
						duration: 0.5,
						type: "spring",
						stiffness: 100
					}}
					viewport={{ once: true }}
					className="w-11/12 md:w-6/12"
				>
					<img
						src="https://static.colodedeus.com/benfeitoria/seja-benfeitor.png"
						alt=""
					/>
				</motion.h1>

				<motion.h4
					initial={{ opacity: 0, translateY: "100%" }}
					whileInView={{ opacity: 1, translateY: "0%" }}
					transition={{
						duration: 0.5,
						type: "spring",
						stiffness: 100
					}}
					viewport={{ once: true }}
					className="text-gray-200 text-2xl text-center font-normal mb-5"
				>
					Sua contribuição se transforma em evangelização!
				</motion.h4>

				<motion.div
					initial={{ opacity: 0, translateY: "100%" }}
					whileInView={{ opacity: 1, translateY: "0%" }}
					transition={{
						duration: 0.5,
						type: "spring",
						stiffness: 100
					}}
					viewport={{ once: true }}
				>
					<Link
						href="https://app.vindi.com.br/customer/pages/de5aa969-e26c-4686-958b-8e5291948fa7/subscriptions/new"
						target="_blank"
						className="py-4 my-2 px-24 bg-gray-200 text-gray-700 rounded-full text-xl"
					>
						Seja um benfeitor!
					</Link>
				</motion.div>
			</div>

			<div className="w-full gap-8 mt-20 pb-20 bg-[url('https://static.colodedeus.com/benfeitoria/bg-quem-somos.png')]">
				<div className="w-11/12 md:w-8/12 mx-auto grid md:grid-cols-[0.3fr_0.7fr] gap-10">
					<motion.div
						initial={{ opacity: 0, translateX: "-100%" }}
						whileInView={{ opacity: 1, translateX: "0%" }}
						transition={{
							duration: 0.9,
							type: "spring",
							stiffness: 85
						}}
						viewport={{ once: true }}
						className="min-h-[300px] md:h-full w-full bg-cover bg-[url('https://static.colodedeus.com/benfeitoria/img-quemsomos.png')] bg-center rounded-2xl"
					></motion.div>

					<motion.div
						className="overflow-x-hidden"
						initial={{
							opacity: 0,
							translateX: "100%"
						}}
						transition={{
							duration: 0.9,
							type: "spring",
							stiffness: 85
						}}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, translateX: "0%" }}
					>
						<div className="bg-gray-100 text-gray-800 rounded-2xl p-10">
							<h2 className="text-yellow-500 text-4xl font-bold mb-10">
								QUEM SOMOS?
							</h2>

							<h5 className="text-lg">
								Somos a Colo de Deus. Uma nova comunidade católica que nasceu
								como parte da Primavera da Igreja!
							</h5>

							<br />

							<h5 className="text-lg">
								O nosso carisma nos movimenta e rege as nossas vidas. Somos
								chamados a trazer de volta à Igreja os afastados da fé, gestando
								uma humanidade cheia de Pentecostes. Para trazer luz aos
								perdidos, esperança aos desesperançados, vida aos mortos, amor
								aos odiados, perdão aos condenados, refrigério aos cansados,
								liberdade aos cativos, paz aos que estão em guerra e justiça aos
								injustiçados.{" "}
							</h5>

							<br />

							<h5 className="text-lg">
								Queremos dar ao mundo o Espírito Santo.
							</h5>

							<br />

							<h5 className="text-lg">
								Nós não descansaremos até cumprirmos a ordem de Deus:
							</h5>

							<br />

							<h5 className="text-lg">
								“Ide por todo o mundo, pregai o evangelho a toda criatura”. Mt
								16,15{" "}
							</h5>
						</div>
					</motion.div>
				</div>
			</div>

			<div className="w-11/12 md:w-8/12 mx-auto grid md:grid-cols-[0.35fr_0.65fr] gap-12 py-20">
				<motion.div
					initial={{
						opacity: 0,
						translateX: "-100%"
					}}
					transition={{
						duration: 0.9,
						type: "spring",
						stiffness: 50
					}}
					viewport={{ once: true }}
					whileInView={{ opacity: 1, translateX: "0%" }}
					className="flex items-center"
				>
					<img
						src="https://static.colodedeus.com/benfeitoria/comofazemos.png"
						alt=""
					/>
				</motion.div>

				<motion.div
					initial={{
						opacity: 0,
						translateX: "100%"
					}}
					transition={{
						duration: 0.9,
						type: "spring",
						stiffness: 100
					}}
					whileInView={{ opacity: 1, translateX: "0%" }}
					viewport={{ once: true }}
					className="pr-5"
				>
					<h5 className="text-lg text-gray-100">
						Apresentamos o Cristo, que conhecemos e amamos, através da cultura
						do encontro para essa geração, na qual cada pessoa precisa ser
						alcançada, olhada e resgatada na sua dignidade humana.
					</h5>

					<br />

					<h5 className="text-lg text-gray-100">
						Nosso carisma atinge especialmente os jovens; entretanto, as
						famílias possuem um lugar especial dentro de nossa comunidade. Na
						Colo de Deus temos ministérios voltados às famílias, a evangelização
						de crianças, adolescentes e adultos.
					</h5>

					<br />

					<h5 className="text-lg text-gray-100">
						Estamos nas casas, como as primeiras comunidades cristãs. Oramos
						pelas famílias realizando cenáculos nos lares. Trabalhamos também em
						células (pequenos grupos de pessoas que se reúnem semanalmente em
						todo o Brasil para crescer na fé e na vida da Igreja).
					</h5>

					<br />

					<h5 className="text-lg text-gray-100">
						No cuidado do um a um, tratando cada pessoa como única, seguimos
						preparando a volta de Cristo.
					</h5>
				</motion.div>
			</div>

			<div className="grid w-full md:hidden grid-rows-3 gap-10 py-20">
				<motion.div
					initial={{
						opacity: 0,
						translateX: "-100%"
					}}
					transition={{
						duration: 0.9,
						type: "spring",
						stiffness: 85
					}}
					whileInView={{ opacity: 1, translateX: "-25%" }}
					viewport={{ once: true }}
					className="min-h-[250px] w-full bg-cover bg-right bg-[url('https://static.colodedeus.com/benfeitoria/esquerda.png')]"
				></motion.div>

				<motion.div
					initial={{
						opacity: 0,
						translateX: "100%"
					}}
					transition={{
						duration: 0.9,
						type: "spring",
						stiffness: 85
					}}
					whileInView={{ opacity: 1, translateX: "25%" }}
					viewport={{ once: true }}
					className="min-h-[250px] w-full bg-cover bg-right bg-[url('https://static.colodedeus.com/benfeitoria/meio.png')]"
				></motion.div>

				<motion.div
					initial={{
						opacity: 0,
						translateX: "-100%"
					}}
					transition={{
						duration: 0.9,
						type: "spring",
						stiffness: 85
					}}
					whileInView={{ opacity: 1, translateX: "-25%" }}
					viewport={{ once: true }}
					className="min-h-[250px] w-full bg-cover bg-right bg-[url('https://static.colodedeus.com/benfeitoria/direita.png')]"
				></motion.div>
			</div>

			<div className="hidden w-full md:grid grid-cols-3 gap-10 py-20">
				<motion.div
					initial={{
						opacity: 0,
						translateX: "-100%"
					}}
					transition={{
						duration: 0.9,
						type: "spring",
						stiffness: 85
					}}
					whileInView={{ opacity: 1, translateX: "0%" }}
					viewport={{ once: true }}
					className="min-h-[250px] w-full  bg-cover bg-right bg-[url('https://static.colodedeus.com/benfeitoria/esquerda.png')]"
				></motion.div>

				<motion.div
					initial={{
						opacity: 0,
						translateY: "100%"
					}}
					transition={{
						duration: 0.9,
						type: "spring",
						stiffness: 85
					}}
					whileInView={{ opacity: 1, translateY: "25%" }}
					viewport={{ once: true }}
					className="min-h-[250px] w-full  bg-cover bg-right bg-[url('https://static.colodedeus.com/benfeitoria/meio.png')]"
				></motion.div>

				<motion.div
					initial={{
						opacity: 0,
						translateX: "100%"
					}}
					transition={{
						duration: 0.9,
						type: "spring",
						stiffness: 85
					}}
					whileInView={{ opacity: 1, translateX: "0%" }}
					viewport={{ once: true }}
					className="min-h-[350px] w-full  bg-cover bg-right bg-[url('https://static.colodedeus.com/benfeitoria/direita.png')]"
				></motion.div>
			</div>

			<div className="w-11/12 md:w-8/12 mx-auto py-20">
				<motion.h2
					initial={{ opacity: 0, translateY: "100%" }}
					whileInView={{ opacity: 1, translateY: "0%" }}
					transition={{
						duration: 0.5,
						type: "spring",
						stiffness: 100
					}}
					viewport={{ once: true }}
					className="text-yellow-400 font-bold text-4xl md:text-5xl text-center"
				>
					ESTAMOS TRAZENDO DE VOLTA OS AFASTADOS DA FÉ
				</motion.h2>

				<motion.h5
					initial={{ opacity: 0, translateY: "100%" }}
					whileInView={{ opacity: 1, translateY: "0%" }}
					transition={{
						duration: 0.5,
						type: "spring",
						stiffness: 100
					}}
					viewport={{ once: true }}
					className="text-gray-200 text-center text-xl w-11/12 md:w-5/12 mx-auto my-10"
				>
					“Não é o que você faz, mas quanto amor você dedica no que faz que
					realmente importa.” <br /> (Santa Teresa de Calcutá)
				</motion.h5>

				<motion.div className="grid grid-cols-2 md:grid-cols-5 gap-y-5 gap-x-10 md:gap-20">
					<motion.div
						initial={{ opacity: 0, translateY: "100%" }}
						whileInView={{ opacity: 1, translateY: "0%" }}
						transition={{
							duration: 0.5,
							type: "spring",
							stiffness: 100,
							delay: 0.1
						}}
						viewport={{ once: true }}
					>
						<img
							src="https://static.colodedeus.com/benfeitoria/facebook.png"
							alt=""
							className="my-14"
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, translateY: "100%" }}
						whileInView={{ opacity: 1, translateY: "0%" }}
						transition={{
							duration: 0.5,
							type: "spring",
							stiffness: 100,
							delay: 0.2
						}}
						viewport={{ once: true }}
					>
						<img
							src="https://static.colodedeus.com/benfeitoria/instagram.png"
							alt=""
							className="my-14"
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, translateY: "100%" }}
						whileInView={{ opacity: 1, translateY: "0%" }}
						transition={{
							duration: 0.5,
							type: "spring",
							stiffness: 100,
							delay: 0.3
						}}
						viewport={{ once: true }}
					>
						<img
							src="https://static.colodedeus.com/benfeitoria/youtube.png"
							alt=""
							className="my-14"
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, translateY: "100%" }}
						whileInView={{ opacity: 1, translateY: "0%" }}
						transition={{
							duration: 0.5,
							type: "spring",
							stiffness: 100,
							delay: 0.4
						}}
						viewport={{ once: true }}
					>
						<img
							src="https://static.colodedeus.com/benfeitoria/tiktok.png"
							alt=""
							className="my-14"
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, translateY: "100%" }}
						whileInView={{ opacity: 1, translateY: "0%" }}
						transition={{
							duration: 0.5,
							type: "spring",
							stiffness: 100,
							delay: 0.5
						}}
						viewport={{ once: true }}
						className="col-span-2 md:col-auto mx-auto"
					>
						<img
							src="https://static.colodedeus.com/benfeitoria/spotify.png"
							alt=""
							className="my-14 w-64 md:w-full"
						/>
					</motion.div>
				</motion.div>

				<motion.div className="w-10/12 mx-auto">
					<motion.h5
						initial={{ opacity: 0, translateY: "100%" }}
						whileInView={{ opacity: 1, translateY: "0%" }}
						transition={{
							duration: 0.5,
							type: "spring",
							stiffness: 100
						}}
						viewport={{ once: true }}
						className="text-gray-200 text-center text-lg"
					>
						A internet é o nosso principal campo missionário. Nossa influência
						na rede alcança mensalmente milhões de pessoas por meio de nossas
						plataformas digitais, da arte, da criatividade e da música.
					</motion.h5>

					<br />

					<motion.h5
						initial={{ opacity: 0, translateY: "100%" }}
						whileInView={{ opacity: 1, translateY: "0%" }}
						transition={{
							duration: 0.5,
							type: "spring",
							stiffness: 100,
							delay: 0.1
						}}
						viewport={{ once: true }}
						className="text-gray-200 text-center text-lg"
					>
						Nossos eventos anuais como a Conferência de Líderes YSHV e o GERAÇÃO
						ATÔMIKA movem jovens do Brasil e do mundo para serem avivados,
						contribuindo para a evangelização em suas realidades específicas.
					</motion.h5>

					<br />

					<motion.h5
						initial={{ opacity: 0, translateY: "100%" }}
						whileInView={{ opacity: 1, translateY: "0%" }}
						transition={{
							duration: 0.5,
							type: "spring",
							stiffness: 100,
							delay: 0.2
						}}
						viewport={{ once: true }}
						className="text-gray-200 text-center text-lg"
					>
						Diferentes realidades e povos têm sido alcançados pela graça e amor
						de Deus por meio de células; expedições missionárias; retiros;
						evangelizações em escolas, hospitais e ruas; semana missionária;
						shows e ações sociais.
					</motion.h5>

					<br />

					<motion.h5
						initial={{ opacity: 0, translateY: "100%" }}
						whileInView={{ opacity: 1, translateY: "0%" }}
						transition={{
							duration: 0.5,
							type: "spring",
							stiffness: 100,
							delay: 0.3
						}}
						viewport={{ once: true }}
						className="text-gray-200 text-center text-lg"
					>
						Existe também em nossa comunidade uma vertente social que trabalha
						em diversas áreas de atuação. Acreditamos que o assistencialismo é
						importante, mas temos como foco o resgate da dignidade humana de
						cada indivíduo.
					</motion.h5>

					<br />
				</motion.div>
			</div>

			<div className="min-h-[calc(100vh-200px)] bg-[url('https://static.colodedeus.com/benfeitoria/bg-brasil.png')] flex flex-col md:flex-row">
				<motion.div
					initial={{
						opacity: 0,
						translateX: "-100%"
					}}
					transition={{
						duration: 0.9,
						type: "spring",
						stiffness: 50
					}}
					whileInView={{ opacity: 1, translateX: "0%" }}
					viewport={{ once: true }}
					className="w-11/12 md:w-[50%]"
				>
					<img
						src="https://static.colodedeus.com/benfeitoria/brasil.png"
						alt=""
					/>
				</motion.div>

				<motion.div
					initial={{
						opacity: 0,
						translateX: "100%"
					}}
					transition={{
						duration: 0.9,
						type: "spring",
						stiffness: 50
					}}
					whileInView={{ opacity: 1, translateX: "0%" }}
					viewport={{ once: true }}
					className="min-h-[50vh] md:min-h-[calc(100vh-200px)] pt-20 text-center mx-auto md:text-left md:mx-0 md:pt-0 w-11/12 md:w-fit flex justify-center flex-col gap-2"
				>
					<h4 className="text-gray-200 font-bold text-2xl">
						&#x2022; 5 PAÍSES IMPACTADOS
					</h4>
					<h4 className="text-gray-200 font-bold text-2xl">
						&#x2022; 25 ESTADOS IMPACTADOS + DF
					</h4>
					<h4 className="text-gray-200 font-bold text-2xl">
						&#x2022; + 2k CIDADES E MUNICÍPIOS IMPACTADOS
					</h4>
				</motion.div>
			</div>

			<div className="w-11/12 md:w-8/12 mx-auto py-28 flex flex-col items-center">
				<motion.h2
					initial={{ opacity: 0, translateY: "100%" }}
					whileInView={{ opacity: 1, translateY: "0%" }}
					transition={{
						duration: 0.5,
						type: "spring",
						stiffness: 100
					}}
					viewport={{ once: true }}
					className="text-yellow-400 text-4xl  md:text-5xl text-center font-bold leading-tight"
				>
					O QUE VOCÊ PODE FAZER PARA AJUDAR A COLO DE DEUS A CONTINUAR
					EVANGELIZANDO?
				</motion.h2>

				<div className="grid md:grid-cols-2 gap-10 my-20">
					<motion.div
						initial={{
							opacity: 0,
							translateX: "-100%"
						}}
						transition={{
							duration: 0.9,
							type: "spring",
							stiffness: 50
						}}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, translateX: "0%" }}
					>
						<h5 className="text-gray-200 font-medium text-xl">
							A Colo de Deus conta com parceiros fiéis que têm unido forças na
							missão de evangelizar há mais de 18 anos.{" "}
						</h5>

						<br />

						<h5 className="text-gray-200 font-medium text-xl">
							Missionários, colaboradores, amigos, sobretudo, os sócios
							evangelizadores, têm sido os canais da graça, por meio dos quais o
							amor de Deus vem transformando a vida de milhares de pessoas no
							Brasil e mundo afora por intermédio dessa obra de Deus.
						</h5>

						<br />

						<h5 className="text-gray-200 font-medium text-xl">
							Estamos empenhados em buscar, dia após dia, maneiras e
							alternativas para tornar o nome de Jesus conhecido, testando nossa
							capacidade de criação e inovação para promover uma transformação
							completa na vida das pessoas.
						</h5>

						<br />

						<h5 className="text-gray-200 font-medium text-xl">
							Grandes desafios pedem grandes esforços!
						</h5>

						<br />

						<h5 className="text-gray-200 font-medium text-xl">
							Nossos projetos de transformação podem levar meses e até anos. Por
							isso, para planejar e executar ações de longo prazo, contamos com
							a colaboração de quem acredita no impacto do nosso trabalho
							missionário.
						</h5>
					</motion.div>

					<motion.div
						initial={{
							opacity: 0,
							translateX: "100%"
						}}
						transition={{
							duration: 0.9,
							type: "spring",
							stiffness: 50
						}}
						whileInView={{ opacity: 1, translateX: "0%" }}
						viewport={{ once: true }}
					>
						<h5 className="text-gray-200 font-medium text-xl">
							São Francisco de Assis nos ensinou que “é dando que se recebe”,
							por isso, de diferentes modos, as missões da Colo de Deus mostram
							o rosto humano de Jesus para as pessoas. Do norte ao sul, nossos
							missionários ofertam suas vidas em busca de diferentes corações
							que se abrem para receber o amor do Pai.
						</h5>

						<br />

						<h5 className="text-gray-200 font-medium text-xl">
							Na certeza de que quem ajuda uma obra de evangelização tem os
							mesmo méritos de um evangelizador, te convidamos a fazer parte
							disso também.
						</h5>

						<br />

						<h5 className="text-gray-200 font-medium text-xl">
							Ajude a Colo de Deus a manter sua evangelização!
						</h5>

						<br />

						<h5 className="text-gray-200 font-medium text-xl">
							Somos uma Associação sem fins lucrativos, o que significa que
							confiamos na graça e providência de Deus. Acreditamos que o dízimo
							é também uma adoração a Deus e o nosso coração é cheio de alegria
							e gratidão a Ele por tantas bênçãos que tem nos entregado, por
							isso entregamos a Ele nosso dízimo, confiantes de que, se o Senhor
							tem nos sustentado até aqui, assim permanecerá.
						</h5>
					</motion.div>
				</div>

				<motion.h2
					initial={{ opacity: 0, translateY: "100%" }}
					whileInView={{ opacity: 1, translateY: "0%" }}
					transition={{
						duration: 0.5,
						type: "spring",
						stiffness: 100
					}}
					viewport={{ once: true }}
					className="text-yellow-400 text-5xl uppercase md:text-5xl text-center font-bold leading-snug md:leading-relaxed"
				>
					Seja um evangelizador. Seja um benfeitor da obra!
				</motion.h2>

				<motion.h2
					initial={{ opacity: 0, translateY: "100%" }}
					whileInView={{ opacity: 1, translateY: "0%" }}
					transition={{
						duration: 0.5,
						type: "spring",
						stiffness: 100
					}}
					viewport={{ once: true }}
					className="text-yellow-400 text-4xl text-center font-bold leading-normal mt-10"
				>
					Podemos contar com você para isso?
				</motion.h2>

				<Link
					href="https://app.vindi.com.br/customer/pages/de5aa969-e26c-4686-958b-8e5291948fa7/subscriptions/new"
					target="_blank"
					className="py-4 px-20 bg-[#fe0041] text-gray-200 rounded-full text-xl my-20"
				>
					Seja um benfeitor!
				</Link>

				<motion.h2
					initial={{ opacity: 0, translateY: "100%" }}
					whileInView={{ opacity: 1, translateY: "0%" }}
					transition={{
						duration: 0.5,
						type: "spring",
						stiffness: 100
					}}
					viewport={{ once: true }}
					className="text-yellow-400 text-4xl md:text-5xl text-center font-semibold leading-tight"
				>
					O QUE VOCÊ PODE FAZER PARA AJUDAR A COLO DE DEUS A CONTINUAR
					EVANGELIZANDO?
				</motion.h2>

				<div className="grid md:grid-cols-3 gap-5 my-20">
					<motion.div
						initial={{ opacity: 0, translateX: "-100%" }}
						whileInView={{ opacity: 1, translateX: "0%" }}
						transition={{
							duration: 0.5,
							type: "spring",
							stiffness: 75
						}}
						viewport={{ once: true }}
					>
						<div className="min-h-[200px] bg-[url('https://static.colodedeus.com/benfeitoria/geracao.jpg')] bg-cover rounded-3xl"></div>
						<h5 className="text-gray-200 font-medium mt-5">
							O Geração Atômika é a maior conferência anual da Colo de Deus, e
							nasceu como um pequeno encontro para alguns jovens que tomou
							proporções inimagináveis. No Geração cumprimos a plenitude do
							nosso carisma: trazer de volta àqueles que estão afastados da fé.
							Aqui nossa criatividade rompe barreiras, nos dedicamos em
							excelência, em acolhida, na arte, nos preparamos espiritualmente,
							tudo para que Cristo seja conhecido e amado.
						</h5>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, translateY: "-50%" }}
						whileInView={{ opacity: 1, translateY: "0%" }}
						transition={{
							duration: 0.5,
							type: "spring",
							stiffness: 75
						}}
						viewport={{ once: true }}
					>
						<div className="min-h-[200px] bg-[url('https://static.colodedeus.com/benfeitoria/yeshiva.jpg')] bg-cover bg-top-4 rounded-3xl"></div>
						<h5 className="text-gray-200 font-medium mt-5">
							A Conferência de Líderes da Colo de Deus é o encontro de todos os
							que são chamados a construir o Reino de Deus na terra. Sabendo que
							esta geração aguarda ansiosamente a manifestação dos filhos de
							Deus, queremos levantar líderes conscientes, criativos e
							responsáveis por aquilo que carregam. Jovens comuns com um chamado
							extraordinário nesta geração.
						</h5>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, translateX: "100%" }}
						whileInView={{ opacity: 1, translateX: "0%" }}
						transition={{
							duration: 0.5,
							type: "spring",
							stiffness: 75
						}}
						viewport={{ once: true }}
					>
						<div className="min-h-[200px] bg-[url('https://static.colodedeus.com/benfeitoria/missoes.jpg')] bg-cover bg-center rounded-3xl"></div>
						<h5 className="text-gray-200 font-medium mt-5">
							O Ministério de Missões obedece o mandato de Jesus: “Ide, pois,
							fazei discípulos de todos os povos, batizando-os em nome do Pai,
							do Filho e do Espírito Santo.” Sendo assim, através do ministério
							são treinados e enviados missionários para o encontro de pessoas
							que estão afastadas da Igreja e em situações de vulnerabilidade
							social. Atualmente o ministério é responsável por uma ação
							missionária e social na Ilha do Marajó (Pará), que impacta mais de
							1.000 ribeirinhos. Além disso, são promovidas evangelizações nas
							ruas, escolas, asilos, além do suporte às paróquias através da
							‘Semana Missionária’. Temos um único objetivo: transformar vidas e
							a sociedade através do Evangelho!
						</h5>
					</motion.div>
				</div>
			</div>

			<div className="w-full min-h-screen bg-[url('https://static.colodedeus.com/benfeitoria/alguma-duvida.png')] bg-center md:bg-top">
				<div className="w-10/12 md:w-6/12 mx-auto text-center flex flex-col items-center justify-end h-screen">
					<motion.div
						initial={{ opacity: 0, translateY: "-50%" }}
						whileInView={{ opacity: 1, translateY: "0%" }}
						transition={{
							duration: 0.5,
							type: "spring",
							stiffness: 75
						}}
						viewport={{ once: true }}
						className="mb-32 flex flex-col gap-5 items-center"
					>
						<h3 className="text-gray-200 font-bold text-4xl md:text-5xl leading-normal">
							Ficou alguma dúvida?
						</h3>

						<h5 className="text-gray-200 font-medium text-2xl">
							Estamos prontos para atender você!
						</h5>

						<Link
							href="https://api.whatsapp.com/send?phone=+5543999751950&text=Eu+quero+ser+um+benfeitor%21+%F0%9F%A4%A9"
							target="_blank"
							className="py-4 px-20 bg-[#00c600] text-gray-200 rounded-full text-xl w-fit"
						>
							Seja um benfeitor!
						</Link>
					</motion.div>
				</div>
			</div>

			<footer className="w-full py-10 bg-[#fe0041]">
				<div className="w-11/12 md:w-8/12 mx-auto flex gap-10 flex-col md:flex-row items-center justify-between">
					<div>
						<h5 className="text-gray-200 text-center md:text-left text-lg font-medium uppercase">
							copyright 2023 - colo de Deus - todos os direitos reservados
						</h5>
					</div>

					<Link href="/">
						<div className="flex items-end justify-center md:justify-end">
							<img
								src="https://static.colodedeus.com/benfeitoria/logo-deitada.png"
								alt=""
								className="w-8/12"
							/>
						</div>
					</Link>
				</div>
			</footer>
		</div>
	);
}
