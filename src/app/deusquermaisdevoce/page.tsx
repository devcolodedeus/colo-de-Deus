"use client";

import { useEffect } from "react";

export default function DeusQuerMaisDevoce() {
  useEffect(() => {
    if (window) {
      window.location.href = "https://www.deusquermaisdevoce.com/";
    }
  }, []);

  return <div></div>;
}
