import { ButtonProject } from '../gral/buttons/ButtonProject';
import { ButtonSkills } from '../gral/buttons/ButtonSkills';
import { IconCSS, IconHTML, IconJava, IconJavaScript, IconProjects, IconReact } from '../icons/icons';
import { TitleSection } from '../gral/title-sections/TitleSection';
import { Project } from './Project';
import './projects.css';

export const Projects = () => {
  return (
    <>
    <section className='section-projects'>
      <TitleSection text='Proyectos' icon={<IconProjects />} />
    </section>
    <section className='projects'>
      <Project 
        image={"./src/img/project-supermarket.webp"}
        title="SUPERMARKET ONLINE SHOP"
        description="Sitio web realizado como proyecto personal para mejorar las habilidades técnicas de React.Js"
        date="Diciembre 2023 - Marzo 2024"
        skills={[
          { text: 'React', icon: <IconReact /> },
          { text: 'HTML', icon: <IconHTML /> },
          { text: 'CSS', icon: <IconCSS /> },
        ]}
      />
      <Project 
        image={"./src/img/project-cellshop.webp"}
        title="CELLSHOP TANDIL"
        description="Sitio web realizado como proyecto personal para mejorar las habilidades técnicas de HTML, CSS Y JavaScript"
        date="Agosto 2022"
        skills={[
          { text: 'Javascript', icon: <IconJavaScript /> },
          { text: 'HTML', icon: <IconHTML /> },
          { text: 'CSS', icon: <IconCSS /> },
        ]}
      />
    </section>
    <article className='load-more-project'>
      <ButtonProject text="Cargar más" />
    </article>
    </>
  )
}