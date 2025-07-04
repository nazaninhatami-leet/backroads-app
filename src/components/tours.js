import Heading from './heading';
import { tours } from '../data';

const Tour = ({ id, img, date, title, info, location, duration, cost }) => (
  <article className="tour-card" key={id}>
    <div className="tour-img-container">
      <img src={img} className="tour-img" alt={location} />
      <p className="tour-date">{date}</p>
    </div>
    <div className="tour-info">
      <h4>{title}</h4>
      <p>{info}</p>
      <div className="tour-footer">
        <p>
          <span>
            <i className="fas fa-map"></i>
          </span>
          {location}
        </p>
        <p>{duration} days</p>
        <p>from ${cost}</p>
      </div>
    </div>
  </article>
);

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Heading pt1={'featured'} pt2={'tours'} />

      <div className="section-center featured-center">
        {tours.map((tour) => (
          <Tour {...tour} />
        ))}
      </div>
    </section>
  );
};
export default Tours;
