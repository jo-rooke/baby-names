import { NameProps } from "../NameProps";
import "./stylesheet.css";

interface SpecificProps {
  id: number;
  name: string;
  sex: string;
  favNames: NameProps[];
  setFavNames: (favNames: NameProps[]) => void;
}

export default function Name(props: SpecificProps): JSX.Element {
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
