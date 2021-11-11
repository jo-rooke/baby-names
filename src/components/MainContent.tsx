import Name from "./Name";
import names from "../names.json";
import { useState, useEffect } from "react";
import { NameProps } from "../NameProps";
import FavName from "./FavouriteName";

export default function MainContent(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [favNames, setFavNames] = useState<NameProps[]>([]);
  const [baseNames, setBaseNames] = useState<NameProps[]>(names);

  // useEffect(() => {
  //   handleRemoveFavs(baseNames);
  // }, [favNames, baseNames]);

  // function handleRemoveFavs(baseNames: NameProps[]) {
  //   for (const name of baseNames) {
  //     const index = baseNames.indexOf(name);
  //     if (favNames.indexOf(name) > -1) {
  //       setBaseNames(baseNames.splice(index, 1));
  //     }
  //   }
  //   console.log(baseNames);
  //   return baseNames;
  // }

  const sortedNames = baseNames.sort((a, b) => (a.name < b.name ? -1 : 1));

  const filteredNames = sortedNames.filter((name) => {
    return name.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  console.log(baseNames);

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
            baseNames={baseNames}
            setBaseNames={setBaseNames}
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
            baseNames={baseNames}
            setFavNames={setFavNames}
            setBaseNames={setBaseNames}
          />
        ))}
      </div>
    </>
  );
}
