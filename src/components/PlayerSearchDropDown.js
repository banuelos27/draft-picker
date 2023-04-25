import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
   <a
      href=""
      ref={ref}
      onClick={(e) => {
         e.preventDefault();
         onClick(e);
      }}
   >
      {children}
      &#x25bc;
   </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
   ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');

      return (
         <div
            ref={ref}
            style={style}
            className={className}
            aria-labelledby={labeledBy}
         >
            <Form.Control
               autoFocus
               className="mx-3 my-2 w-auto"
               placeholder="Type to filter..."
               onChange={(e) => setValue(e.target.value)}
               value={value}
            />
            <ul className="list-unstyled">
               {React.Children.toArray(children).filter(
                  (child) =>
                  !value || child.props.children.toLowerCase().startsWith(value),
               )}
            </ul>
         </div>
      );
   },
);

const PlayerSearchDropDown = ({ players, onSelectPlayer, setPlayerInModal }) => {
   const [draftedPlayer, setDraftedPlayer] = useState({});

   let counter = 0;

   const setDraftPick = (e) => {
      e.preventDefault();
      const thePlayer = players.find(p => p.name === e.target.innerText);
      //setDraftedPlayer(thePlayer)
      setPlayerInModal(thePlayer.name);
      onSelectPlayer(thePlayer);
   }

   const dropDownItems = players.map((player) => {
      counter++;
      return <Dropdown.Item 
         eventKey={counter} 
         key={player.name}
         onClick={ (e) => setDraftPick(e) }
         active={player.name === draftedPlayer.name}
      >
         {player.name}
      </Dropdown.Item>
   });

   return (
      <Dropdown>
         <Dropdown.Toggle as={CustomToggle} id="dropdown-basic">
            Draft Player
         </Dropdown.Toggle>

         <Dropdown.Menu as={CustomMenu}>
            {dropDownItems}
         </Dropdown.Menu>
      </Dropdown>
   );
};

export default PlayerSearchDropDown;