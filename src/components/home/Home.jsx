import { useRef } from "react"
import { AboutMe } from "../about-me/AboutMe"
import { Footer } from "../footer/Footer"
import { Header } from "../header/Header"
import { HomePage } from "../homePage/HomePage"
import { Projects } from "../projects/Projects"
import { Skills } from "../skills/Skills"
import './home.css'
export const Home = () => {
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutMeRef = useRef(null);

  return (
    <>
    <section className="home-page">
      <Header projectsRef={projectsRef} skillsRef={skillsRef} aboutMeRef={aboutMeRef} />
      <HomePage />
    </section>
    <main>
      <section ref={projectsRef} className="section-projects">
        <Projects />
      </section>
      <section ref={skillsRef} className='section-skills'>
        <Skills />
      </section>
      <section ref={aboutMeRef} className='section-about-me'>
        <AboutMe />
      </section>
    </main>
    <section className="section-footer">
      <Footer />
    </section>
    </>
  )
}