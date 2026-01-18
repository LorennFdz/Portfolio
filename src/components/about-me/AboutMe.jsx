import { IconAboutMe } from '../icons/icons'
import { TitleSection } from '../gral/title-sections/TitleSection'
import './about-me.css'

export const AboutMe = () => {
  return (
    <>
    <TitleSection text="Sobre mí" icon={<IconAboutMe />} />
    <section className='content-about-me'>
      <article className='article-about-me'>
        <p className='text-one'>Soy Lorenzo Fernández, un <span>desarrollador web</span> con 26 años de edad, en constante aprendizaje. Desde que empecé a programar, me apasiona crear soluciones digitales que faciliten la vida de las personas.</p>
        <p className='text-two'>Durante mis estudios, he desarrollado varios proyectos personales, desde un <span>e-commerce simulado</span> hasta una <span>landing page de productos tecnológicos.</span> Estos proyectos me han permitido poner en práctica mis conocimientos de <span>JavaScript y React</span>, como también <span>Java, Spring Boot y MySQL</span>, y han sido una excelente oportunidad para aprender a trabajar de forma independiente y resolver problemas.</p>
        <p className='text-three'>Estoy buscando mi primer trabajo en el mundo laboral para poder aplicar mis habilidades en un entorno profesional y seguir creciendo como desarrollador. Me considero una persona <span>proactiva, con ganas de aprender y siempre dispuesta a colaborar en equipo.</span> Si necesitas un desarrollador web, ¡No dudes en contactarme!</p>
      </article>
      <figure className='img-about-me'>
        <img src="./img/foto-cv.webp" alt="imagen presentación Lorenzo Fdz Dev" />
      </figure>
    </section>
    </>
  )
}