import { useState } from 'react';
import "./TeamCard.css";
import Card from 'react-bootstrap/Card';
import PositionBadgeList from './PositionBadgeList';
import PlayerModal from "./PlayerModal";

const TeamCard = ({ pickNumber, teamName, teamPositionNeeds, players, onSelectPlayer, onSelectCard, cardPlayer, onSavePlayer, onSelectTeam, draftIndex }) => {
   const [modal, setModal] = useState(false);

   const showModal = () => setModal(true);
   const closeModal = () => setModal(false);

   const selectCard = () => {
      onSelectTeam(teamName, draftIndex);
      showModal();
   }

   // const onSelectCard = () => {
   //    console.log("card clicked...");
   //    showModal();
   // }

   return (
      <>
         <Card onClick={() => selectCard()}>
            <Card.Header>Pick #{pickNumber} <span id="card-header-span-player">{cardPlayer}</span></Card.Header>
            <Card.Body>
               <Card.Title>
                  {teamName} 
                  <span id="card-sub-header-span-player-search">
                     {/* <Button variant="primary">
                        Select Player
                     </Button> */}
                     {/* <PlayerSearchDropDown players={players} /> */}
                  </span>
               </Card.Title>
               <Card.Footer>Team Needs:{' '}
                  <PositionBadgeList positionList={teamPositionNeeds} />
               </Card.Footer>
            </Card.Body>
         </Card>

         <PlayerModal 
            show={modal} 
            onHide={closeModal} 
            playersList={players}
            onSelectPlayer={onSelectPlayer}
            onSavePlayer={onSavePlayer}
         />
      </>
   )
};

export default TeamCard;