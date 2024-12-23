import './title-section.css'

export const TitleSection = ({ text = "", icon = ""}) => {
  return (
    <article className='title-section'>
    {icon}
    <h2>{text}</h2>
    </article>
  )
}