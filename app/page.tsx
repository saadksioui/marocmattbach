import About from "./_components/About";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Menu from "./_components/Menu";
import Services from "./_components/Services";
import Testimonials from "./_components/Testimonials";

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Menu />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
};

export default Home
