import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLIC;
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// export async function signInWithPassword() {
//   const { data, error } = await supabase.auth.signUp({
//     email: "example@email.com",
//     password: "example-password",
//   });
// }

export async function signInWithGithub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });

  if (data) alert("로그인이 완료되었습니다");
  if (error) console.log("error : ", error);
}

export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        // prompt: "consent",
      },
    },
  });
  if (data) alert("로그인이 완료되었습니다");
  if (error) console.log("error : ", error);
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) console.log("error : ", error);
}

export async function GetUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}
