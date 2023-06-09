import { useMemo } from "react";
import { getHeoesByPublisher } from "../helpers";
import { HeroCard } from "./";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeoesByPublisher(publisher), [publisher]);

  const listItems = heroes.map((heroe) => (
    <HeroCard key={heroe.id} {...heroe} />
  ));

  return <div className="row rows-cols-1 row-cols-md-3 g-3">{listItems}</div>;
};
