import SpecificProps from "../SpecificProps";
import "./stylesheet.css";

export default function Name(props: SpecificProps): JSX.Element {
  const handleButtonClick = (props: SpecificProps) => {
    props.setFavNames([
      ...props.favNames,
      { id: props.id, name: props.name, sex: props.sex },
    ]);
  };
  return (
    <>
      {props.sex === "m" ? (
        <button className="mButton" onClick={() => handleButtonClick(props)}>
          {props.name}
        </button>
      ) : (
        <button className="fButton" onClick={() => handleButtonClick(props)}>
          {props.name}
        </button>
      )}
    </>
  );
}
