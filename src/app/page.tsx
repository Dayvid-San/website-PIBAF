import Footer from "./components/footer";
import MainSection from "./components/main";
import Navbars from "./components/navbars";
import Styles from "./page.module.css";

export default function Home() {
  return (
    <div className={Styles.container}>
      <main className={Styles.main}>
        <Navbars />
        <MainSection />
        <Footer />
      </main>
    </div>
  );
}
