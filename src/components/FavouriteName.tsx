import { NameProps } from "../NameProps";
import "./stylesheet.css";

interface SpecificProps {
  id: number;
  name: string;
  sex: string;
  favNames: NameProps[];
  setFavNames: (favNames: NameProps[]) => void;
  baseNames: NameProps[];
  setBaseNames: (baseNames: NameProps[]) => void;
}

export default function FavName(props: SpecificProps): JSX.Element {
  return (
    <>
      {props.sex === "m" ? (
        <button
          className="mButton"
          onClick={() => {
            removeFavourites(props.name, props.favNames, props.setFavNames);
            props.setBaseNames([
              ...props.baseNames,
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
            removeFavourites(props.name, props.favNames, props.setFavNames);
            props.setBaseNames([
              ...props.baseNames,
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

export function removeFavourites(
  nameToRemove: string,
  favNames: NameProps[],
  setFavNames: (name: NameProps[]) => void
): void {
  const favRemoved = favNames.filter((fav) => fav.name !== nameToRemove);
  setFavNames(favRemoved);
}
