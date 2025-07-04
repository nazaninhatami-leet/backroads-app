import Heading from './heading';
import { services } from '../data';

const Service = ({ id, icon, title, text }) => {
  return (
    <article className="service" key={id}>
      <span className="service-icon">
        <i className={icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{text}</p>
      </div>
    </article>
  );
};

const servicesSection = () => {
  return (
    <section className="section services" id="services">
      <Heading pt1={'our'} pt2={'services'} />

      <div className="section-center services-center">
        {services.map((service) => (
          <Service {...service} />
        ))}
      </div>
    </section>
  );
};
export default servicesSection;
