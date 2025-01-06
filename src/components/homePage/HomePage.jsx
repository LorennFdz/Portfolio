import { ButtonHomePage } from "../gral/buttons/ButtonHomePage"
import { IconContact, IconCV, IconGitHub, IconLinkedIn2 } from "../icons/icons"
import './homePage.css'
import { useEffect, useRef } from "react"
export const HomePage = () => {
  
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const handleScroll = () => {
      if (window.innerWidth < 1024 && window.scrollY > 50) {
        image.classList.add('small-image');
      } else {
        image.classList.remove('small-image');
      }
    };    

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
    <figure ref={imageRef} onClick={handleClick} className={scrollY.current > 0 ? "avatar-image scrolling" : "avatar-image"}>
      <img src="./img/avatar-portfolio.webp" alt="avatar image" />
    </figure>
    <section className="content-homepage">
      <article className="available-to-work">
        <ButtonHomePage text="Disponible para trabajar" />
      </article>
      <article className="title-homePage">
        <h1>{"<"} Hola, Soy <span className="span-homePage">{"{"} Lorenzo Fernández {"}"}</span> </h1>
        <h1>Desarrollador Web Full Stack {"/>"}</h1>
      </article>
      <article className="btns-homePage">
        <article className="btns-contact-homePage">
          <a
            href={`mailto:loreenfernandez.14@gmail.com`}
          >
            <ButtonHomePage text="Contáctame" Icon={<IconContact />} />
          </a>
          <a 
            href="https://drive.google.com/drive/folders/1v7wZ3muKWH2r2-u9jf4FWE7eanzAFBQf?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ButtonHomePage text="Visualizar CV" Icon={<IconCV />} />
          </a>
        </article>
        <article className="btns-svg-homePage">
          <article>
            <a 
              href="https://github.com/LorennFdz" 
              target="_blank" 
              rel="noopener noreferrer"
              title="GitHub"
            >
            <IconGitHub />
            </a>
          </article>
          <article>
            <a 
              href="https://www.linkedin.com/in/lorenzofdz08" 
              target="_blank"
              title="LinkedIn" 
              rel="noopener noreferrer"
            >
              <IconLinkedIn2 />
            </a>
          </article>
        </article>
      </article>
    </section>
    </>
  )
}