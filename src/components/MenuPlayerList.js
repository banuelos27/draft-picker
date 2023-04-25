import Dropdown from 'react-bootstrap/Dropdown';

const MenuPlayerList = ({ players }) => {
   let counter = 1;
   const dropDownItems = players.map((player) => {
      counter++;
      return <Dropdown.Item eventKey={counter} key={player.name}>{player.name}</Dropdown.Item>
   });

   return dropDownItems;
};

export default MenuPlayerList;