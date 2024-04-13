import Dashboard from "./components/Dashboard";
import NavigationBar from "./components/NavigationBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <main className="grid">
        <h2 id="featured" className="m-2">
          Featured Recipes:
        </h2>
        <Dashboard />
      </main>
      <Footer />
    </>
  );
}
