import { create } from "zustand";

export const useSignValueStore = create((set) => ({
  values: {
    username: "",
    password: "",
    repeatPassword: "",
  },
  setValues: (newValues) =>
    set((state) => ({
      values: { ...state.values, ...newValues },
    })),
}));
