"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Conf25() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.href = "https://www.colodedeusconf.com.br/";
    }
  }, []);

  return (
    <section>
      <div className="w-screen h-screen relative flex items-center justify-center bg-[#e2e2e2] flex-col">
        <picture>
          <source
            media="(max-width:800px)"
            srcSet={`${process.env.NEXT_PUBLIC_IMG_URL}/conf25/bg-base-mobile.png`}
          />

          <img
            src={`${process.env.NEXT_PUBLIC_IMG_URL}/conf25/bg-base.png`}
            alt=""
            className="w-full h-full object-cover absolute top-0 left-0"
          />
        </picture>

        <img
          src={`${process.env.NEXT_PUBLIC_IMG_URL}/conf25/texto-dobra-1.png`}
          alt=""
          className="hidden md:block w-9/12 object-cover z-10"
        />
        <img
          src={`${process.env.NEXT_PUBLIC_IMG_URL}/conf25/texto-dobra-1-responsivo.png`}
          alt=""
          className="md:hidden w-11/12 object-cover z-10"
        />

        <div className="md:grid grid-cols-3 gap-10 z-10">
          <div className="hidden md:flex items-center justify-end">
            <img
              src={`${process.env.NEXT_PUBLIC_IMG_URL}/conf25/efeito-dobra-1.png`}
              alt=""
              className="z-10"
            />
          </div>

          <div className="w-full h-full -translate-y-14 md:translate-y-0">
            <Link
              href="https://www.e-inscricao.com/colodedeus/conf25"
              className="w-full h-full bg-[#314fe2] flex items-center justify-center rounded-lg font-bold text-3xl text-center md:text-4xl px-10 py-5"
            >
              GARANTA SEU LUGAR
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-start">
            <img
              src={`${process.env.NEXT_PUBLIC_IMG_URL}/conf25/efeito-dobra-1.png`}
              alt=""
              className="z-10 rotate-180"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
