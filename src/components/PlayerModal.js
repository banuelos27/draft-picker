import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import PlayerSearchDropDown from "./PlayerSearchDropDown";
import Button from 'react-bootstrap/Button';

const PlayerModal = ({ show, onHide, playersList, onSelectPlayer, onSavePlayer }) => {
   const [playerNameInModal, setPlayerNameInModal] = useState("");
   
   const setPlayerInModal = (playerName) => {
      setPlayerNameInModal(playerName);
   };

   const onSavePlayerInModal = () => {
      onHide();
      onSavePlayer();
   }

   return (
      <Modal 
         show={show} 
         onHide={onHide}
         size="lg"
         aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
            <Modal.Title>Select Player</Modal.Title>
        </Modal.Header>
        <Modal.Body id="contained-modal-title-vcenter">
            <PlayerSearchDropDown players={playersList} onSelectPlayer={onSelectPlayer} setPlayerInModal={setPlayerInModal} />
            <span style={{float: "right"}}>{playerNameInModal}</span>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={onSavePlayerInModal}>Save</Button>
            <Button onClick={onHide} variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal>
   );
}

export default PlayerModal;