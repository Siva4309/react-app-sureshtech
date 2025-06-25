import "./Member.css";

export function Member(props) {
  console.log("Member values", props);
  const { name, city } = props;
  return (
    <div className="membercard">
      <h2>{name}</h2>
      <p className="member-sub-heading">{city}</p>
    </div>
  );
}
