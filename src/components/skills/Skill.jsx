import './skill.css'

export const Skill = ({ text = "", icon = "" }) => {
  return (
    <article className='content-skills'>
      {icon}
      <h2>{text}</h2>
    </article>
  )
}