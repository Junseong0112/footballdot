import { Link } from "react-router-dom";
import { useAuthStore } from "../store/store";
import { UnLogin } from "../styles/HomePage";

function Homepage() {
  const { session } = useAuthStore();
  console.log(session);
  return (
    <>
      {!session ? (
        <UnLogin>
          <h2>축구 커뮤니티 풋볼닷!</h2>
          <p>유저간의 소통을 해보세요.</p>
          <strong>로그인 후 이용해주세요</strong>
          <Link to="signin">Get Started -{">"}</Link>
        </UnLogin>
      ) : (
        <p>홈페이지</p>
      )}
    </>
  );
}

export default Homepage;
