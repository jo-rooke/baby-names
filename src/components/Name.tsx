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
        <button
          className="mButton"
          onClick={() =>
            props.setFavNames([
              ...props.favNames,
              { id: props.id, name: props.name, sex: props.sex },
            ])
          }
        >
          {props.name}
        </button>
      ) : (
        <button
          className="fButton"
          onClick={() =>
            props.setFavNames([
              ...props.favNames,
              { id: props.id, name: props.name, sex: props.sex },
            ])
          }
        >
          {props.name}
        </button>
      )}
    </>
  );
}
