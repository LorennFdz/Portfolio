import { ButtonHomePage } from "../gral/buttons/ButtonHomePage"
import { IconContact, IconCV, IconGitHub, IconLinkedIn2 } from "../icons/icons"
import './homePage.css'
export const HomePage = () => {
  return (
    <>
    <figure className="avatar-image">
      <img src="./src/img/avatar-portfolio.webp" alt="avatar image" />
    </figure>
    <article className="available-to-work">
      <ButtonHomePage text="Disponible para trabajar" />
    </article>
    <article className="title-homePage">
      <h1>{"<"} Hola, Soy <span className="span-homePage">{"{"} Lorenzo Fernández {"}"}</span> </h1>
      <h1>Desarrollador Web Full Stack {"/>"}</h1>
    </article>
    <article className="btns-homePage">
      <article className="btns-contact-homePage">
        <ButtonHomePage text="Contáctame" Icon={<IconContact />} />
        <ButtonHomePage text="Visualizar CV" Icon={<IconCV />} />
      </article>
      <article className="btns-svg-homePage">
        <article>
          <IconGitHub />
        </article>
        <article>
          <IconLinkedIn2 />
        </article>
      </article>
    </article>
    </>
  )
}