import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { AppSection, MainSection } from "../styles/Main";

function Main() {
  return (
    <AppSection>
      <Header />
      <MainSection>
        <section>
          <Outlet />
        </section>
      </MainSection>
      <Footer />
    </AppSection>
  );
}

export default Main;
