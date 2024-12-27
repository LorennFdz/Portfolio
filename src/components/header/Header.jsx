import { useState, useRef, useEffect } from "react";
import { IconAboutMe, IconContact, IconMenuBurger, IconProjects, IconSkills } from "../icons/icons"
import './header.css';

export const Header = ({ projectsRef, skillsRef, aboutMeRef }) => {
  const headerRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);
  
  const handleItemClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    

  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <>
    <header ref={headerRef} className={`header ${openMenu ? 'fixed' : ''}`}>
      <nav className="navbar">
        <figure onClick={handleMenu}>
          <IconMenuBurger />
        </figure>
      </nav>
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
        <a href={`mailto:loreenfernandez.14@gmail.com`} >
          <li className="item-menu">
            <figure>
              <IconContact />
            </figure>
            <span>CONTACTO</span>
          </li>
        </a>
      </ul>
    )}
    </>
  )
}