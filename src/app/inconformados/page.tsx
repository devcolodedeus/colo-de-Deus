"use client";

import { useEffect } from "react";

export default function Inconformados() {
  useEffect(() => {
    if (window) {
      window.location.href = "https://www.inconformadoscolodedeus.com/";
    }
  }, []);

  return <div></div>;
}
