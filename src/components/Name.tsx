import { NameProps } from "../NameProps";
import "./stylesheet.css";

export default function Name(props: NameProps): JSX.Element {
  return (
    <>
      {props.sex === "m" ? (
        <button className="mButton">{props.name}</button>
      ) : (
        <button className="fButton">{props.name}</button>
      )}
    </>
  );
}
