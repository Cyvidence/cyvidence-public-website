import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import { Gate } from "./site/gate";
import { FinalCta, Footer, Hero, Integrations, Nav, Partners, Platform, Problem, Regulations, WhyNow } from "./site/sections";

function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-background focus:px-3 focus:py-2">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Platform />
        <Problem />
        <Integrations />
        <WhyNow />
        <Regulations />
        <Partners />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Gate>
      <Home />
    </Gate>
  </StrictMode>,
);
