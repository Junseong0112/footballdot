import { LoginSection } from "../styles/HomePage";
import { FaPen, FaList, FaSearch } from "react-icons/fa";
import CommunityForm from "./CommunityForm";

function Community() {
  return (
    <LoginSection>
      <article>
        <h2>커뮤니티</h2>
        <p>축구로 다양한 얘기를 해보세요.</p>
      </article>
      <div>
        <button>
          <FaPen />
          <span>작성하기</span>
        </button>
        <div>
          <FaSearch />
          <input type="search" placeholder="검색을 해보세요!" />
        </div>
        <button>
          <FaList />
          <span>최신순</span>
          {/* 최신순, 댓글순*/}
        </button>
      </div>
      <ul>
        <li>
          <a href="*">
            <p>username</p>
            <strong>title</strong>
            <span>작성시간</span>
          </a>
        </li>
      </ul>
      <div>
        <CommunityForm />
      </div>
    </LoginSection>
  );
}

export default Community;
