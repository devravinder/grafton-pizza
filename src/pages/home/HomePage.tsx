import Menu from "./Menu";
import Home from "./Home";
import Specials from "./Specials";
import Contact from "./Contact";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Section } from "components/Elements";
import { navMenu } from "constants";

export default function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash?.slice(1);
      document.getElementById(id)?.scrollIntoView();
    }
  }, [hash]);
  return (
    <>
      <Section id={navMenu.Home}>
        <Home />
      </Section>
      <Section id={navMenu.Menu}>
        <Menu />
      </Section>
      <Section id={navMenu.Specials}>
        <Specials />
      </Section>
      <Section id={navMenu.Contact}>
        <Contact />
      </Section>
    </>
  );
}
