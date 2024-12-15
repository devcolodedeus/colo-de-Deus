import { create } from "zustand";

type State = {
  language: "pt" | "en" | "es";
};

type Action = {
  updateLanguage: (firstName: State['language']) => void;
};

export const useLanguage = create<State & Action>((set) => ({
  language: "pt",
  updateLanguage: (language) => set(() => ({ language })),
}))
