import { create } from "zustand";

type State = {
  theme: "dark" | "light";
};

type Action = {
  updateTheme: (firstName: State['theme']) => void;
};

export const useHeaderTheme = create<State & Action>((set) => ({
  theme: "dark",
  updateTheme: (theme) => set(() => ({ theme })),
}))
