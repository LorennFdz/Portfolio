import { ButtonProject } from '../gral/buttons/ButtonProject';
import { ButtonSkills } from '../gral/buttons/ButtonSkills';
import { IconCalendar, IconGitHub, IconLinkURL } from '../icons/icons';
import './project.css'

export const Project = ({ image, title, description, date, skills}) => {
  return (
    <article className='project'>
      <figure className='img-project'>
        <img src={image} alt={title} />
      </figure>
      <article className='content-project'>
        <article className='title-description-project'>
          <h3>{title}</h3>
          <p>{description}</p>
        </article>
        <article className='date-project'>
          <IconCalendar />
          <p>{date}</p>
        </article>
        <article className='btns-skills-project'>
          {skills.map((skill) => (
            <ButtonSkills key={skill.text} {...skill} />
          ))}
        </article>
        <article className='btns-project'>
          <ButtonProject text="Código" icon={<IconGitHub/>} />
          <ButtonProject text="Link" icon={<IconLinkURL/>} />
        </article>
      </article>
    </article>
  )
}