"use client";

import { useEffect } from "react";

export default function VidaPlena() {
  useEffect(() => {
    if (window) {
      window.location.href = "https://vidaplenamasterclass.com";
    }
  }, []);

  return <div></div>;
}
