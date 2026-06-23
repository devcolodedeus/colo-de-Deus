"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import styles from "./amigo.module.css";

const ASSETS = "/assets/amigopratodaobra";
const DONATION_URL = "https://doacoes.sacratech.app/project/benfeitoriacolodedeus";

const VALUES = ["20", "30", "40", "50", "60"] as const;
const PAYMENT_METHODS = [
	{ id: "pix", label: "Pix" },
	{ id: "credit", label: "Cartão de Crédito" },
	{ id: "debit", label: "Débito Automático" },
] as const;

export default function AmigoPraTodaObra() {
	const [amount, setAmount] = useState<string>("");
	const [otherAmount, setOtherAmount] = useState<string>("");
	const [payment, setPayment] = useState<string>("");
	const [name, setName] = useState("");
	const [whatsapp, setWhatsapp] = useState("");
	const [cpf, setCpf] = useState("");
	const [accepted, setAccepted] = useState(false);

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		window.open(DONATION_URL, "_blank");
	}

	return (
		<div className={`${styles.root} w-full`}>
			{/* ================== SEÇÃO 1 - HERO ================== */}
			<section
				className="relative bg-[#e9e9e9] bg-repeat"
				style={{
					backgroundImage: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(${ASSETS}/background.png)`,
				}}
			>
				<div className="max-w-[1200px] mx-auto px-4 md:px-6 pt-8 md:pt-10 pb-2 grid md:grid-cols-[auto_180px_auto] gap-6 md:gap-3 items-center justify-center">
					<div className="flex flex-col items-center md:items-start gap-6 md:gap-8 relative">
						<img
							src={`${ASSETS}/title-amigo-pra-toda-obra.png`}
							alt="Amigo pra toda Obra"
							className="w-full max-w-[320px] md:max-w-[440px]"
						/>

						<div className={`${styles.joinBadge} self-start`}>
							<span className={styles.joinBadgeStar}>★</span>
							<span>
								JOIN TO OUR
								<br />
								CLOSE FRIENDS
							</span>
						</div>
					</div>

					<p className="text-neutral-900 text-base md:text-[19px] font-bold self-center tracking-[0.06em] md:tracking-[0.08em] leading-[1.6] text-center md:text-left">
						Nossas missões e a construção da nova Casa Formativa precisam de
						você!
					</p>

					<img
						src={`${ASSETS}/group-photo.png`}
						alt="Equipe Colo de Deus com capacetes de obra e cones"
						className="w-full max-w-[320px] md:max-w-[460px] mx-auto md:mx-0"
					/>
				</div>

				<div className="max-w-[1200px] mx-auto px-6 pb-4 flex justify-center">
					<p className="tracking-[0.35em] text-xs md:text-sm font-bold">
						FAÇA PARTE DA
					</p>
				</div>

				<div className="relative">
					<div className={styles.checkerOrange} />
					<div className="h-3 bg-[var(--ap-blue)]" />
					<Link
						href={DONATION_URL}
						target="_blank"
						className={`${styles.btnPill} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap z-10`}
					>
						1ª GERAÇÃO DE AMIGOS DA COLO
					</Link>
				</div>
			</section>

			{/* ================== SEÇÃO 2 - FORMULÁRIO ================== */}
			<section
				id="form-amigo"
				className="bg-[var(--ap-blue)] text-white py-12 md:py-20"
			>
				<div className="max-w-[1100px] mx-auto px-4 md:px-6 flex flex-col items-center gap-8 md:gap-10">
					<div className="text-center">
						<h2 className="text-3xl md:text-4xl font-bold">HEY!</h2>
						<p className="text-lg md:text-xl mt-3 font-medium">
							Em poucos minutos, você se torna um Amigo pra Toda Obra:
						</p>
					</div>

					<form
						onSubmit={handleSubmit}
						className="w-full flex flex-col items-center gap-7"
					>
						<div
							className={`${styles.dashedBox} bg-[#e9e9e9] w-full max-w-[920px] py-5 md:py-7 px-4 md:px-12 flex flex-col items-center gap-4 md:gap-5`}
						>
							<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
								{VALUES.map((v) => (
									<label key={v} className={styles.optionRow}>
										<input
											type="radio"
											name="amount"
											value={v}
											checked={amount === v}
											onChange={() => setAmount(v)}
										/>
										R${v}
									</label>
								))}

								<label className={styles.optionRow}>
									<input
										type="radio"
										name="amount"
										value="other"
										checked={amount === "other"}
										onChange={() => setAmount("other")}
									/>
									Outro:
									<input
										type="text"
										inputMode="numeric"
										className={styles.otherInput}
										value={otherAmount}
										onChange={(e) => {
											setOtherAmount(e.target.value);
											if (e.target.value) setAmount("other");
										}}
									/>
								</label>
							</div>

							<div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
								{PAYMENT_METHODS.map((m) => (
									<label key={m.id} className={styles.optionRow}>
										<input
											type="radio"
											name="payment"
											value={m.id}
											checked={payment === m.id}
											onChange={() => setPayment(m.id)}
										/>
										{m.label}
									</label>
								))}
							</div>
						</div>

						<div className={`${styles.inputRow} w-full max-w-[920px]`}>
							<div>
								<span>Nome:</span>
								<input
									type="text"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
								/>
							</div>
							<div>
								<span>WhatsApp:</span>
								<input
									type="tel"
									placeholder="( )_____-_____"
									value={whatsapp}
									onChange={(e) => setWhatsapp(e.target.value)}
									required
								/>
							</div>
							<div>
								<span>CPF:</span>
								<input
									type="text"
									value={cpf}
									onChange={(e) => setCpf(e.target.value)}
									required
								/>
							</div>
						</div>

						<label
							className={`${styles.termCheckbox} flex items-start gap-3 w-full max-w-[920px] text-sm md:text-[0.95rem] cursor-pointer`}
						>
							<input
								type="checkbox"
								checked={accepted}
								onChange={(e) => setAccepted(e.target.checked)}
							/>
							<span>
								Estou de acordo em contribuir por, no mínimo, 6 meses para
								garantir os benefícios exclusivos do Geração Atômika 2025
							</span>
						</label>

						<button type="submit" className={styles.btnBlack}>
							CONFIRMAR
						</button>
					</form>
				</div>
			</section>

			{/* ================== SEÇÃO 3 - AMIGO DO MEU AMIGO ================== */}
			<section className="bg-black text-white relative">
				<div className={styles.checkerWhiteTop} />
				<div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-8 grid md:grid-cols-2 gap-6 items-center">
					<div className="flex flex-col gap-5">
						<h2 className="text-3xl md:text-5xl font-bold leading-tight">
							Amigo do
							<br />
							meu Amigo
							<br />
							é meu{" "}
							<img
								src={`${ASSETS}/word-amigo.png`}
								alt="amigo"
								className="inline-block align-baseline h-[1em] md:h-[1.1em] translate-y-2 md:translate-y-3"
							/>
						</h2>

						<p className="text-neutral-200 leading-relaxed max-w-[440px]">
							E é esse grande Amigo, Amado, Esposo que nos chamou para gestar,
							como Maria uma humanidade cheia de Pentecostes.
						</p>

						<p className="text-neutral-200 leading-relaxed max-w-[440px]">
							Vivemos esse missão movidos pelo Espírito Santo com ousadia,
							criatividade e inovação das mais diversas formas e, entre elas,
							por meio dos nossos projetos sociais e missionários:
						</p>
					</div>

					<div className="flex items-center justify-center md:justify-end">
						<img
							src={`${ASSETS}/jesus-walking.png`}
							alt="Jesus caminhando com um jovem"
							className="w-full max-w-[360px] md:max-w-[560px] md:-mt-24 md:-mb-44 relative z-10"
						/>
					</div>
				</div>

				<div className="pb-8 md:pb-10 flex justify-center md:-mt-24 relative z-20">
					<Link href={DONATION_URL} target="_blank" className={styles.btnPill}>
						QUERO FAZER PARTE
					</Link>
				</div>

				<div className={styles.checkerWhiteTop} />
			</section>

			{/* ================== SEÇÃO 4 - CARDS DE MISSÕES ================== */}
			<section className="bg-[var(--ap-cyan)] relative">
				<div className={styles.checkerBlackTop} />

				<div className="max-w-[1200px] mx-auto px-4 md:px-6 py-10 md:py-16 grid md:grid-cols-3 gap-5 md:gap-6">
					<MissionCard
						image={`${ASSETS}/card-maringa.png`}
						title="Em Maringá/PR"
						text="Atuamos no Projeto CENSE (Centro de Socioeducação de menores infratores), no Albergue Santa Luiza de Marillac, nas ruas, escolas, asilos e em todo lugar em situação de vulnerabilidade."
					/>
					<MissionCard
						image={`${ASSETS}/card-marajo.png`}
						title="No Marajó/PA"
						text="Transformamos a vida de mais de 1.000 pessoas em comunidades ribeirinhas."
					/>
					<MissionCard
						image={`${ASSETS}/card-nacoes.png`}
						title="Nas Nações"
						text="Temos ações na África e sentimos o mover de Deus nos impulsionando a levar o Evangelho pelos 5 continentes."
					/>
				</div>

				<div className={styles.checkerGrayBottom} />
			</section>

			{/* ================== SEÇÃO 5 - CASA NOVA ================== */}
			<section className="bg-white">
				<div className="max-w-[1200px] mx-auto px-4 md:px-6 py-10 md:py-24 grid md:grid-cols-2 gap-6 md:gap-10 items-center">
					<div className="flex flex-col gap-5">
						<h2 className="text-3xl md:text-5xl font-bold leading-tight">
							Uma casa para
							<br />
							um novo{" "}
							<img
								src={`${ASSETS}/word-tempo.png`}
								alt="tempo"
								className="inline-block align-baseline h-[1em] md:h-[1.1em] translate-y-2 md:translate-y-3"
							/>
						</h2>

						<p className="text-neutral-700 leading-relaxed max-w-[420px]">
							Começamos algo novo! A construção de uma Casa Formativa para
							jovens, junto à Chácara da nossa Comunidade de Vida, em
							Maringá/PR, e você pode fazer também disso:
						</p>
					</div>

					<div className="md:-mr-12 lg:-mr-20">
						<img
							src={`${ASSETS}/house-illustration.png`}
							alt="Ilustração da Casa Formativa"
							className="w-full md:scale-150 origin-center"
						/>
					</div>
				</div>

				<div className="relative my-6">
					<div className={styles.checkerGrayBottom} />
					<Link
						href={DONATION_URL}
						target="_blank"
						className={`${styles.btnPill} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap z-10 bg-white`}
					>
						QUERO SER AMIGO
					</Link>
				</div>
			</section>

			{/* ================== SEÇÃO 6 - BÔNUS DE AMIZADE ================== */}
			<section className="bg-white">
				<div className="max-w-[1100px] mx-auto px-4 md:px-6 py-12 md:py-16 flex flex-col items-center gap-8 md:gap-12">
					<img
						src={`${ASSETS}/bonus-de-amizade.png`}
						alt="Bônus de Amizade"
						className="w-[260px] md:w-[320px]"
					/>

					<p className="text-center text-lg md:text-xl font-bold">
						Quem se junta a nós, tem muitos benefícios exclusivos:
					</p>

					<div className="grid md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-6 md:gap-y-8 w-full max-w-[820px]">
						<Benefit text="Kit de boas-vindas;" />
						<Benefit text="Participação em ações especiais;" />
						<Benefit text="Descontos na Colo de Deus Store;" />
						<Benefit text="Série Virtudes com 4 episódios inéditos e muitos outros conteúdos selecionados." />
						<Benefit text="Descontos em ingressos e/ou em alimentação nos eventos da Colo de Deus;" />
					</div>
				</div>

				<div className={styles.checkerGrayBottom} />
			</section>

			{/* ================== SEÇÃO 7 - CITAÇÃO ================== */}
			<section className="bg-[var(--ap-blue)] text-white py-12 md:py-20">
				<div className="max-w-[820px] mx-auto px-4 md:px-6 text-center">
					<p className="italic text-lg md:text-xl leading-relaxed">
						“Quando me trouxe a Santa Comunhão, tive que me dominar com grande
						esforço de vontade para não gritar alto: bem-vindo verdadeiro, único
						Amigo.”
					</p>
					<p className="italic text-sm md:text-base mt-4 opacity-90">
						(Diário de Santa Faustina, 1509)
					</p>
				</div>
			</section>
		</div>
	);
}

function MissionCard({
	image,
	title,
	text,
}: {
	image: string;
	title: string;
	text: string;
}) {
	return (
		<div className={styles.card}>
			<img src={image} alt={title} className={styles.cardImage} />
			<div className="p-6 flex flex-col gap-3">
				<h3 className="text-xl font-bold">{title}</h3>
				<p className="text-sm leading-relaxed text-neutral-200">{text}</p>
			</div>
		</div>
	);
}

function Benefit({ text }: { text: string }) {
	return (
		<div className={styles.benefitItem}>
			<img src={`${ASSETS}/star.svg`} alt="" />
			<span>{text}</span>
		</div>
	);
}
