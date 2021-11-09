import { NameProps } from "../NameProps";

export default function Name(props: NameProps): JSX.Element {
  return <button>{props.name}</button>;
}
