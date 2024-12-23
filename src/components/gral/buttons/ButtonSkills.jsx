import './buttonSkills.css'

export const ButtonSkills = ({ text = "", icon = ""}) => {
  return (
    <button className='btn-skill'>{text}{icon}</button>
  )
}