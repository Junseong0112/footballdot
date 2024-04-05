import { create } from "zustand";
import { supabase } from "../lib/api";

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

export const useAuthStore = create((set) => ({
  errorMessage: "",
  session: null,

  setSession: (session) => set({ session: session }),
  setUser: (user) => set({ user: user }),

  // 이메일 회원가입
  handleSignUp: async (username, password, repeatPassword) => {
    console.log(username, password, repeatPassword);
    if (password !== repeatPassword) {
      set({ errorMessage: "비밀번호가 일치하지 않습니다." });
    }

    const { error } = await supabase.auth.signUp({
      email: username,
      password: password,
    });

    if (error) set({ errorMessage: error.message });
  },

  // 이메일 로그인
  handleSignIn: async (username, password) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: username,
      password: password,
    });

    if (error) set({ errorMessage: "잘못된 비밀번호 입니다." });
  },

  // OAuth 로그인
  handleOAuthLogin: async (provider) => {
    const { error } =
      provider === "github"
        ? await supabase.auth.signInWithOAuth({ provider: provider })
        : await supabase.auth.signInWithOAuth({
            provider: provider,
            options: {
              queryParams: {
                access_type: "offline",
                prompt: "consent",
              },
            },
          });

    const {
      data: { user },
    } = await supabase.auth.getUser();
    set({ user: user });

    if (error) set({ errorMessage: error.message });
  },

  // 로그아웃
  handleSignOut: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) set({ errorMessage: error.message });
  },
}));
