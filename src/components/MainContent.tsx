import Name from "./Name";
import names from "../names.json";
import { useState } from "react";
import { NameProps } from "../NameProps";
import FavName from "./FavouriteName";

export default function MainContent(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [favNames, setFavNames] = useState<NameProps[]>([]);
  const sortedNames = names.sort((a, b) => (a.name < b.name ? -1 : 1));

  const filteredNames: NameProps[] = sortedNames.filter((name) => {
    return name.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a name..."
      />
      <br></br>
      Your favourite names:
      <div className="favNames">
        {favNames.map((eachFavName) => (
          <FavName
            key={eachFavName.id}
            id={eachFavName.id}
            name={eachFavName.name}
            sex={eachFavName.sex}
            favNames={favNames}
            setFavNames={setFavNames}
          />
        ))}
      </div>
      <hr></hr>
      <br></br>
      <div className="name">
        {filteredNames.map((eachName) => (
          <Name
            key={eachName.id}
            id={eachName.id}
            name={eachName.name}
            sex={eachName.sex}
            favNames={favNames}
            setFavNames={setFavNames}
          />
        ))}
      </div>
    </>
  );
}
