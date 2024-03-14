import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import "../src/styles/font.css";
import Main from "./components/Main";
import Homepage from "./pages/HomePage";
import FeedPage from "./pages/FeedPage";
import BoardPage from "./pages/BoardPage";
import ChatPage from "./pages/ChatPage";
import NewsPage from "./pages/NewsPage";
import MyPage from "./pages/MyPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Homepage />} />
          <Route path="feed" element={<FeedPage />} />
          <Route path="board" element={<BoardPage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
