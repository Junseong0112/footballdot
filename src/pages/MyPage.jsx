import { useEffect, useState } from "react";
import { useAuthStore } from "../store/store";
import { supabase } from "../lib/api";
import Avatar from "../components/Avatar";

function MyPage() {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [userEmail, setUserEmail] = useState(""); // 이메일 상태 추가

  const { session } = useAuthStore();
  const { user } = session || {};

  useEffect(() => {
    async function getProfile() {
      setLoading(true);

      if (!user) return;

      setUserEmail(user.email); // 사용자 이메일 설정

      const { data, error } = await supabase
        .from("profiles")
        .select(`username, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error) {
        console.warn(error);
      } else if (data) {
        setUsername(data.username);
        setAvatar(data.avatar_url);
      }

      setLoading(false);
    }

    getProfile();

    console.log(user);
  }, [user]);

  const updateProfile = async (event, avatarUrl) => {
    event.preventDefault();

    if (!user) return;

    setLoading(true);

    const updates = {
      id: user.id,
      username,
      avatar_url: avatarUrl,
      updated_at: new Date(),
    };

    const { error } = await supabase.from("profiles").upsert(updates);

    if (error) {
      alert(error.message);
    } else {
      setAvatar(avatarUrl);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={updateProfile}>
      <Avatar
        url={avatar}
        size={150}
        onUpload={(event, url) => {
          updateProfile(event, url);
        }}
      />
      <div>
        <label htmlFor="email">이메일</label>
        <input id="email" type="text" value={userEmail} disabled />
      </div>
      <div>
        <label htmlFor="username">닉네임</label>
        <input
          id="username"
          type="text"
          required
          value={username || ""}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <button type="submit" disabled={loading}>
          {loading ? "Loading ..." : "Update"}
        </button>
      </div>
    </form>
  );
}

export default MyPage;
