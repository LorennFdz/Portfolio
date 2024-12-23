import { AboutMe } from "../about-me/AboutMe"
import { Footer } from "../footer/Footer"
import { Header } from "../header/Header"
import { HomePage } from "../homePage/HomePage"
import { Projects } from "../projects/Projects"
import { Skills } from "../skills/Skills"
import './home.css'
export const Home = () => {
  return (
    <>
    <Header />
    <section className="home-page">
      {/*<Header /> */}
      <HomePage />
    </section>
    <main>
      <Projects />
      <Skills />
      <AboutMe />
    </main>
    <section className="section-footer">
      <Footer />
    </section>
    </>
  )
}