import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Main() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Main;
