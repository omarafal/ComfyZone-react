import HeroSection from "./HeroSection";
import NavBar from "./NavBar";

export default function App() {
  return <Header />;
}

function Header() {
  return (
    <header>
      <NavBar />
      <HeroSection />
    </header>
  );
}
