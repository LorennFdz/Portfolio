import { IconMenuBurger } from "../icons/icons"
import './header.css';

export const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <IconMenuBurger />
      </nav>
    </header>
  )
}