import Name from "./Name";
import names from "../names.json";
import { NameProps } from "../NameProps";

export default function MainContent(): JSX.Element {
  const sortedNames = names.sort((a, b) => (a.name < b.name ? -1 : 1));

  return (
    <div className="name">
      {sortedNames.map((eachName) => (
        <Name
          key={eachName.id}
          id={eachName.id}
          name={eachName.name}
          sex={eachName.sex}
        />
      ))}
    </div>
  );
}
