"use client";

import { useHeaderTheme, useLanguage } from "@/hooks";
import { WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { data } from "../../../data";

const missoesData = [
  {
    id: 1,
    nome: "João Pedro",
    cidade: "Missão Caratinga",
    missao: "Frente de Missão",
    whatsapp: "33988055234",
  },
  {
    id: 2,
    nome: "Erlon Augusto",
    cidade: "Niterói",
    missao: "Frente de Missão",
    whatsapp: "21993425338",
  },
  {
    id: 3,
    nome: "Jaciara Quenia",
    cidade: "Niterói",
    missao: "Frente de Missão",
    whatsapp: "2191597865",
  },
  {
    id: 4,
    nome: "Thalita Trindade",
    cidade: "Missão São Paulo (Capital, ABC, Litoral e Osasco)",
    missao: "Frente de Missão",
    whatsapp: "11932172095",
  },
  {
    id: 5,
    nome: "Herick Alencar",
    cidade: "Campo Limpo",
    missao: "Frente de Missão",
    whatsapp: "11979906034",
  },
  {
    id: 6,
    nome: "Breno Barros",
    cidade: "Brasília",
    missao: "Frente de Missão",
    whatsapp: "61998281966",
  },
  {
    id: 7,
    nome: "Fabiana Honorato",
    cidade: "Campo Limpo",
    missao: "Frente de Missão",
    whatsapp: "11966471508",
  },
  {
    id: 8,
    nome: "Pedro Honorato",
    cidade: "Campo Limpo",
    missao: "Frente de Missão",
    whatsapp: "11966481168",
  },
  {
    id: 9,
    nome: "Jean de Jesus Freire",
    cidade: "Curitiba",
    missao: "Frente de Missão",
    whatsapp: "41996960669",
  },
  {
    id: 10,
    nome: "Luana Melo",
    cidade: "Campinas",
    missao: "Frente de Missão",
    whatsapp: "19984226839",
  },
  {
    id: 11,
    nome: "Vinícius Carvalho",
    cidade: "Maringá/PR",
    missao: "Frente de Missão",
    whatsapp: "44991772733",
  },
  {
    id: 12,
    nome: "Kaique Ramires",
    cidade: "BH",
    missao: "Frente de Missão",
    whatsapp: "31992002412",
  },
  {
    id: 13,
    nome: "Bianca Gonzaga",
    cidade: "BH",
    missao: "Frente de Missão",
    whatsapp: "31994403606",
  },
  {
    id: 14,
    nome: "Vinícius Gustavo Alves Tadeu dos Santos",
    cidade: "BH",
    missao: "Frente de Missão",
    whatsapp: "31997793309",
  },
  {
    id: 15,
    nome: "Ana Paula Viana",
    cidade: "Guarulhos",
    missao: "Frente de Missão",
    whatsapp: "11967597169",
  },
  {
    id: 16,
    nome: "João Pedro Cavalcante",
    cidade: "Guarulhos",
    missao: "Frente de Missão",
    whatsapp: "11994884215",
  },
  {
    id: 17,
    nome: "Felipe Taborda",
    cidade: "Bauru",
    missao: "Frente de Missão",
    whatsapp: "41998478374",
  },
  {
    id: 18,
    nome: "Rita de Cássia",
    cidade: "Caratinga",
    missao: "Frente de Missão",
    whatsapp: "33999032453",
  },
  {
    id: 19,
    nome: "Ana Rita Bandeira",
    cidade: "Curitiba",
    missao: "Frente de Missão",
    whatsapp: "27999393505",
  },
  {
    id: 20,
    nome: "Marilia Costa",
    cidade: "Recife",
    missao: "Frente de Missão",
    whatsapp: "81998005620",
  },
  {
    id: 21,
    nome: "Nathalia Santos",
    cidade: "Recife",
    missao: "Frente de Missão",
    whatsapp: "81999536525",
  },
];

export default function NosEncontre() {
  const [missoes, setMissoes] = useState(missoesData);

  const [liderInput, setLiderInput] = useState("");
  const [cidadeInput, setCidadeInput] = useState("");
  const [whatsInput, setWhatsappInput] = useState("");

  const { language } = useLanguage();
  const { updateTheme } = useHeaderTheme();

  useEffect(() => {
    if (liderInput !== "") {
      setMissoes(
        missoesData.filter((missao) =>
          missao.nome.toLocaleLowerCase().includes(liderInput.toLowerCase())
        )
      );
    } else {
      setMissoes(missoesData);
    }
  }, [liderInput]);

  useEffect(() => {
    if (cidadeInput !== "") {
      setMissoes(
        missoesData.filter((missao) =>
          missao.cidade.toLocaleLowerCase().includes(cidadeInput.toLowerCase())
        )
      );
    } else {
      setMissoes(missoesData);
    }
  }, [cidadeInput]);

  useEffect(() => {
    if (whatsInput !== "") {
      setMissoes(
        missoesData.filter((missao) =>
          missao.whatsapp.toLocaleLowerCase().includes(whatsInput.toLowerCase())
        )
      );
    } else {
      setMissoes(missoesData);
    }
  }, [whatsInput]);

  useEffect(() => {
    updateTheme("dark");
  }, []);

  return (
    <section id="eventos" className="bg-neutral-900">
      <picture>
        <source
          media="(max-width:800px)"
          srcSet={`${process.env.NEXT_PUBLIC_IMG_URL}/banners/mobile/ENCONTRE.png`}
        />

        <img
          src={`${process.env.NEXT_PUBLIC_IMG_URL}/banners/desk/ENCONTRE.png`}
          alt="Eventos Colo de Deus"
          className="w-full max-h-screen object-cover object-center"
        />
      </picture>

      <div className="w-11/12 md:w-7/12 mx-auto py-10 md:py-20 bg-neutral-900">
        <div className="w-full mx-auto flex items-center justify-center md:my-5">
          <h2 className="md:tracking-[0.4rem] text-neutral-300 text-2xl md:text-5xl uppercase text-center">
            {data.findus[language].cell_title}
          </h2>
        </div>

        <div className="w-full mx-auto flex items-center justify-center mb-5">
          <p className="tracking-[0.05rem] md:tracking-[0.1rem] text-neutral-300 leading-[2] md:leading-[2.6] text-center my-10">
            {data.findus[language].cell_description}
          </p>
        </div>

        <div className="flex items-center justify-center mb-20">
          <Link
            href="https://hyperfy.adalo.com/celulascolodedeus"
            target="_blank"
            className="w-full"
          >
            <button
              className="my-button3 uppercase"
              data-label={data.findus[language].cell_btn}
            ></button>
          </Link>
        </div>

        <h2 className="tracking-[0.4rem] text-neutral-300 text-2xl md:text-5xl uppercase text-center">
          {data.findus[language].headquarters_title}
        </h2>

        <div className="my-10 grid md:grid-cols-3 gap-14 md:gap-5">
          <div className="relative">
            <label
              htmlFor="nome"
              className="absolute -translate-y-full translate-x-0.5 text-xs uppercase"
            >
              {data.findus[language].headquarters_leader}
            </label>
            <input
              type="text"
              value={liderInput}
              onChange={(e) => setLiderInput(e.target.value)}
              className="w-full p-4 outline-none rounded-lg bg-neutral-700 text-gray-200 translate-y-1"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="nome"
              className="absolute -translate-y-full translate-x-0.5 text-xs uppercase"
            >
              {data.findus[language].headquarters_city}
            </label>
            <input
              type="text"
              value={cidadeInput}
              onChange={(e) => setCidadeInput(e.target.value)}
              className="w-full p-4 outline-none rounded-lg bg-neutral-700 text-gray-200 translate-y-1"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="nome"
              className="absolute -translate-y-full translate-x-0.5 text-xs uppercase"
            >
              {data.findus[language].headquarters_contact}
            </label>
            <input
              type="text"
              value={whatsInput}
              onChange={(e) => setWhatsappInput(e.target.value)}
              className="w-full p-4 outline-none rounded-lg bg-neutral-700 text-gray-200 translate-y-1"
            />
          </div>
        </div>

        <div className="overflow-x-auto overflow-y-hidden">
          <div className="min-w-[600px] grid grid-cols-3 items-center gap-5 bg-neutral-800 p-3 rounded-lg text-lg font-medium mb-2">
            <div>{data.findus[language].headquarters_leader}</div>
            <div>{data.findus[language].headquarters_city}</div>
            <div>{data.findus[language].headquarters_contact}</div>
          </div>

          {missoes.map((missao) => (
            <div
              key={missao.id}
              className="min-w-[600px] grid grid-cols-3 items-center gap-5 my-2 px-3 py-4 text-gray-100 border-b border-gray-400"
            >
              <div title={missao.nome}>
                {missao.nome.substring(0, 27)}
                {missao.nome.length > 27 && "..."}
              </div>
              <div>{missao.cidade}</div>
              <Link
                href={`https://wa.me/55${missao.whatsapp}`}
                target="_blank"
                className="w-fit flex items-center gap-2 transition-all hover:underline hover:text-green-500 cursor-pointer"
              >
                <WhatsappLogo size={20} />
                Whatsapp
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
