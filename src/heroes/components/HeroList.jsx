import { getHeoesByPublisher } from "../helpers";

export const HeroList = ({ publisher }) => {
  const heroes = getHeoesByPublisher(publisher);

  const listItems = heroes.map((heroe) => (
    <li key={heroe.id}>{heroe.superhero}</li>
  ));

  return <ul>{listItems}</ul>;
};
