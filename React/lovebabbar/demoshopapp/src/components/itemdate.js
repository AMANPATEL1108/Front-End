import "./itemdate.css";

function itemDate(props) {
  const day = props.day;
  const month = props.month;
  const year = props.year;
  return (
    <div className="mfg-data">
      <span>{day}</span>
      <span>{month}</span>
      <span>{year}</span>
    </div>
  );
}

export default itemDate;
