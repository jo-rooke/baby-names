import { NameProps } from "../NameProps";
import "./stylesheet.css";

export default function Name(props: NameProps): JSX.Element {
  const mStyle = {
    backgroundColor: " #e0ccff",
    color: "#5c00e6",
    border: "2px",
    margin: "3px",
  };
  const fStyle = {
    backgroundColor: " #ffdb99",
    color: "#b35900",
    border: "2px",
    margin: "3px",
  };

  return (
    <button style={props.sex === "m" ? mStyle : fStyle}>{props.name}</button>
  );
}
