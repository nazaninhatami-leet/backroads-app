const Heading = ({ pt1, pt2 }) => {
  return (
    <div className="section-title">
      <h2>
        {pt1} <span>{pt2}</span>
      </h2>
    </div>
  );
};
export default Heading;
