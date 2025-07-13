import About from "../Components/About"
import GoUpBtn from "../Components/GoUpBtn"
import HeroSection from "../Components/HeroSection"
import Projects from "../Components/Projects"
import Skills from "../Components/Skills"
import Testimonials from "../Components/Testimonials"

function Home() {

  return (
    <>
      <div className="px-10 lg:px-20 py-5 space-y-30">
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
      </div>
      <GoUpBtn />
    </>
  )
}

export default Home
