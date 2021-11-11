import { NameProps } from "../NameProps";
import "./stylesheet.css";

interface SpecificProps {
  id: number;
  name: string;
  sex: string;
  favNames: NameProps[];
  baseNames: NameProps[];
  setFavNames: (favNames: NameProps[]) => void;
  setBaseNames: (baseNames: NameProps[]) => void;
}

export default function Name(props: SpecificProps): JSX.Element {
  return (
    <>
      {props.sex === "m" ? (
        <button
          className="mButton"
          onClick={() => {
            hideFavs(props.id, props.baseNames, props.setBaseNames);
            props.setFavNames([
              ...props.favNames,
              { id: props.id, name: props.name, sex: props.sex },
            ]);
          }}
        >
          {props.name}
        </button>
      ) : (
        <button
          className="fButton"
          onClick={() => {
            hideFavs(props.id, props.baseNames, props.setBaseNames);
            props.setFavNames([
              ...props.favNames,
              { id: props.id, name: props.name, sex: props.sex },
            ]);
          }}
        >
          {props.name}
        </button>
      )}
    </>
  );
}

export function hideFavs(
  nameToRemove: number,
  baseNames: NameProps[],
  setBaseNames: (name: NameProps[]) => void
): void {
  const favHidden = baseNames.filter((name) => name.id !== nameToRemove);

  setBaseNames(favHidden);
}
