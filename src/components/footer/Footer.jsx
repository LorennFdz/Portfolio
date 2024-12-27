import { IconContact, IconCopyright } from "../icons/icons"
import './footer.css'
export const Footer = () => {
  return (
    <footer className="footer">
      <article className="footer-copy">
        <IconCopyright />
        <p>Lorenzo Fernández. Casi todos los derechos reservados</p>
      </article>
      <a href={`mailto:loreenfernandez.14@gmail.com`} >
        <article className="footer-contact">
          <IconContact />
          <p>Contacto</p>
        </article>
      </a>
    </footer>
  )
}