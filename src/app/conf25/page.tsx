"use client";

import { useEffect } from "react";

export default function Conf25() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.href = "https://www.colodedeusconf.com.br/";
    }
  }, []);

  return <section></section>;
}
