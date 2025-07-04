import logo from '../images/logo.svg';
import { links } from '../data';
import { icons } from '../data';

const Link = ({ id, href }) => (
  <li key={id}>
    <a href={`#${href}`} className="nav-link">
      {href}
    </a>
  </li>
);

const Icon = ({ id, href, icon }) => (
  <li key={id}>
    <a href={href} target="_blank" className="nav-icon">
      <i className={icon}></i>
    </a>
  </li>
);

const navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <ul className="nav-links" id="nav-links">
            {links.map((link) => (
              <Link {...link} />
            ))}
          </ul>

          <ul className="nav-icons">
            {icons.map((icon) => (
              <Icon {...icon} />
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default navbar;
