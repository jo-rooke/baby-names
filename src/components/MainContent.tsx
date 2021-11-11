import Name from "./Name";
import names from "../names.json";
import { useEffect, useState } from "react";
import { NameProps } from "../NameProps";
import FavName from "./FavouriteName";

export default function MainContent(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [favNames, setFavNames] = useState<NameProps[]>([]);
  const [baseNames, setBaseNames] = useState<NameProps[]>(names);
  const sortedNames = baseNames.sort((a, b) => (a.name < b.name ? -1 : 1));

  function handleFilterNames(baseNames: NameProps[]) {
    for (const name of baseNames) {
      const index = baseNames.indexOf(name);
      if (favNames.includes(name)) {
        baseNames = baseNames.splice(index, 1);
      }
    }
    return baseNames;
  }

  const filteredNames = sortedNames.filter((name) => {
    return name.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  useEffect(() => {
    setBaseNames(handleFilterNames(baseNames));
  }, [favNames, baseNames]);

  return (
    <>
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a name..."
      />
      <br></br>
      <h2>Your favourite names:</h2>
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
