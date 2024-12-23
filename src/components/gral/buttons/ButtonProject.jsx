import './buttonProject.css'

export const ButtonProject = ({ text = "", icon = ""}) => {
  return (
    <>
    <button className='btn-project'>{text}{icon}</button></>
  )
}