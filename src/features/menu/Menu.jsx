import { useLoaderData } from 'react-router-dom';

import { getMenu } from '../../services/apiRestaurant';

import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-sky-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
export { loader };
