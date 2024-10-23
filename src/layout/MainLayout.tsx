import Navbar from "layout/Navbar";
import Footer from "layout/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

const Content = () => {
  return (
    <section className={"relative z-0"}>
      <Outlet />
      <ScrollRestoration />
    </section>
  );
};

export default function MainLayout() {
  return (
    <main className="relative min-h-screen min-w-full z-0">
      <Navbar />
      <Content />
      <Footer />
    </main>
  );
}
