import { useState, useRef, useEffect, act } from "react";
import { IconAboutMe, IconContact, IconMenuBurger, IconProjects, IconSkills } from "../icons/icons"
import './header.css';

export const Header = ({ projectsRef, skillsRef, aboutMeRef }) => {
  const headerRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);
  const handleItemClick = (ref) => {

    ref.current.scrollIntoView({ behavior: 'smooth' });
    if(window.innerWidth < 1024)
      setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const header = headerRef.current;
    const handleScroll = () => {
      if (window.scrollY > 100) {
        header.classList.add('scroll');
      } else {
        header.classList.remove('scroll');
      }
    };
    window.addEventListener('scroll', handleScroll);
    setOpenMenu(false);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [window.innerWidth]);

  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <>
    <header ref={headerRef} className={`header ${openMenu ? 'fixed' : ''}`}>
      {window.innerWidth >= 1024 ? 
        <nav className="navbar">
          <ul className="menu-list-desktop">
            <li className="item-menu" onClick={() => handleItemClick(projectsRef)}>
              <span>PROYECTOS</span>
            </li>
            <li className="item-menu" onClick={() => handleItemClick(skillsRef)}>
              <span>HABILIDADES</span>
            </li>
            <li className="item-menu" onClick={() => handleItemClick(aboutMeRef)}>
              <span>SOBRE MI</span>
            </li>
            <li className="item-menu">
              <a href={`mailto:loreenfernandez.14@gmail.com`} className="item-menu-contact">
                <span>CONTACTO</span>
              </a>
            </li>
          </ul>
        </nav>
      :
        <nav className="navbar-mobile">
          <figure onClick={handleMenu}>
            <IconMenuBurger />
          </figure>
        </nav>
      }
    </header>
    {openMenu && (
      <ul className="menu-list">
        <li className="item-menu" onClick={() => handleItemClick(projectsRef)}>
          <figure>
            <IconProjects />
          </figure>
          <span>PROYECTOS</span>
        </li>
        <li className="item-menu" onClick={() => handleItemClick(skillsRef)}>
          <figure>
            <IconSkills />
          </figure>
          <span>HABILIDADES</span>
        </li>
        <li className="item-menu" onClick={() => handleItemClick(aboutMeRef)}>
          <figure>
            <IconAboutMe />
          </figure>
          <span>SOBRE MI</span>
        </li>
        <li className="item-menu">
          <a href={`mailto:loreenfernandez.14@gmail.com`} className="item-menu-contact">
            <figure>
              <IconContact />
            </figure>
            <span>CONTACTO</span>
          </a>
        </li>
      </ul>
    )}
    </>
  )
}