import { useEffect, useState } from "react";
import { useAuthStore } from "../store/store";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Loading from "../pages/LoadingPage";
import Error from "../pages/ErrorPage";
import { supabase } from "../lib/api";
import Avatar from "../components/Avatar";
import { MyPageForm } from "../styles/MyPage";

function MyPage() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const { session } = useAuthStore();
  const { user } = session || {};
  // 캐시에 저장된 쿼리를 무효화하기 위해, stale time의 개요 없이 stale 상태로 만들고, 해당 데이터를 백그라운드에서 refetch하게 만들 수 있게한다.
  const queryClient = useQueryClient();

  // 유저 프로필
  async function getUserProfile() {
    const { data } = await supabase
      .from("profiles")
      .select(`username, avatar_url`)
      .eq("id", user.id)
      .single();

    return data;
  }

  const {
    data: profileData,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: getUserProfile,
    staleTime: 60 * 1000,
  });

  useEffect(() => {
    if (profileData) {
      setUsername(profileData.username);
    }
  }, [profileData]);

  const updateUserMutation = useMutation({
    mutationFn: (avatarUrl) => updateUserProfile(avatarUrl),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      setLoading(false);
    },
  });

  async function updateUserProfile(avatarUrl) {
    setLoading(true);
    const updates = {
      id: user.id,
      username,
      avatar_url: avatarUrl,
      updated_at: new Date(),
    };

    await supabase.from("profiles").upsert(updates);
  }

  // 프로필 업데이트
  const updateProfile = (event, avatarUrl) => {
    event.preventDefault();
    updateUserMutation.mutate(avatarUrl);
  };

  if (isPending) return <Loading />;
  if (isError) return <Error />;

  return (
    <MyPageForm onSubmit={updateProfile}>
      <Avatar
        url={profileData.avatar_url}
        size={180}
        onUpload={(event, url) => {
          updateProfile(event, url);
        }}
      />
      <div>
        <label htmlFor="email">이메일</label>
        <input id="email" type="text" value={user.email} disabled />
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
        <button type="submit" disabled={isPending}>
          {loading ? "Loading ..." : "Update"}
        </button>
      </div>
    </MyPageForm>
  );
}

export default MyPage;
