import './buttonHomePage.css'

export const ButtonHomePage = ({ text = "", Icon = "" }) => {
  return (
    <><button className="btn-homePage">{text}{Icon}</button></>
  )
}