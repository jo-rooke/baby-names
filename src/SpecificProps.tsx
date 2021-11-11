import { NameProps } from "./NameProps";

export default interface SpecificProps {
  id: number;
  name: string;
  sex: string;
  favNames: NameProps[];
  setFavNames: (favNames: NameProps[]) => void;
}
