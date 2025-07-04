import { links } from '../data';
import { icons } from '../data';

const Link = ({ id, href }) => (
  <li key={id}>
    <a href={`#${href}`} className="footer-link">
      {href}
    </a>
  </li>
);

const Icon = ({ id, href, icon }) => (
  <li key={id}>
    <a href={href} target="_blank" className="footer-icon">
      <i className={icon}></i>
    </a>
  </li>
);

const footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {links.map((link) => (
          <Link {...link} />
        ))}
      </ul>
      <ul className="footer-icons">
        {icons.map((icon) => (
          <Icon {...icon} />
        ))}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default footer;
