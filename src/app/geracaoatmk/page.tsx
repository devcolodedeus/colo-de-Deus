"use client";

import { useEffect } from "react";

export default function GeracaoAtmk() {
  useEffect(() => {
    if (window) {
      window.location.href = "https://www.geracaoatmk.com";
    }
  }, []);

  return <div></div>;
}
