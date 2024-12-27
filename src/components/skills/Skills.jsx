import { IconBootstrap, IconCSS, IconHTML, IconJava, IconJavaScript, IconMySQL, IconPHP, IconPostgreSQL, IconReact, IconSkills, IconSpring } from '../icons/icons'
import { TitleSection } from '../gral/title-sections/TitleSection'
import { Skill } from './Skill'
import './skills.css'

export const Skills = () => {
  return (
    <>
    <TitleSection text='Habilidades' icon={<IconSkills />} />
    <section className='skills'>
      <Skill text="HTML" icon={<IconHTML />} />
      <Skill text="CSS" icon={<IconCSS />} />
      <Skill text="JavaScript" icon={<IconJavaScript />} />
      <Skill text="React" icon={<IconReact />} />
      <Skill text="Bootstrap" icon={<IconBootstrap />} />
      <Skill text="Java" icon={<IconJava />} />
      <Skill text="Spring" icon={<IconSpring />} />
      <Skill text="MySQL" icon={<IconMySQL />} />
      <Skill text="PostgreSQL" icon={<IconPostgreSQL />} />
      <Skill text="PHP" icon={<IconPHP />} />
    </section>
    </>
  )
}