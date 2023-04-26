import './App.css';
//import styles from 'styled-components';
import BestAvailableTable from './components/BestAvailableTable';
import CardList from './components/CardList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import teamsInfo from './data/teams';
import noahTeamsInfo from './data/noahTeams';
import playersInfo from './data/players';
import draftInfo from './data/draftOrder';
import { useEffect, useState } from 'react';


const App = ({ user }) => {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [draftOrder, setDraftOrder] = useState([]);

  let draftedIndex = 0;
  let selectedTeam = null;
  let selectedPlayer = null;

  useEffect(() => {
    user === "jose" ? setTeams(teamsInfo.teamsData) : setTeams(noahTeamsInfo.teamsData);
    setPlayers(playersInfo.playerData)
    setDraftOrder(draftInfo.draftOrder);
  }, [user]);

  const onSelectTeam = (teamName, draftIndex) => {
    const currentTeam = teams.find(t => t.name === teamName) ;
    draftedIndex = draftIndex;
    selectedTeam = currentTeam
  }

  const onSelectPlayer = (player) => {
    selectedPlayer = player;
  }

  const onSavePlayer = () => {
    let playersDraftedArr = structuredClone(selectedTeam.playersDrafted);
   /**
    * Scenarios to account for
    * 1. No players drafted for this team yet team.playersDrafted = []
    * 2. Players already drafted for this team, check that you are not editing at the same index
    *   - a.) Not modifying the same index, just push new player. Check its not the same player (should not be avialable in the dropdown)
    *   - b.) Modifying the same index, replace the player
    */

    if(!playersDraftedArr.length > 0) {
      // Scenario 1) no players drafted for this team
      playersDraftedArr.push({ playerName: selectedPlayer.name, position: selectedPlayer.position, pickIndex: draftedIndex });
    } else {
      // Scenario 2) team already has drafted players
      // check if the pickIndex is the same as draftedIndex
      // if yes, then we have to replace, otherwise append to the array
      const alreadyPickedAtThisPosition = checkIfAlreadyPicked(selectedTeam.playersDrafted, draftedIndex);
      if(!alreadyPickedAtThisPosition) {
        // Scenario 2a) not modifying the same index
        playersDraftedArr.push({ playerName: selectedPlayer.name, position: selectedPlayer.position, pickIndex: draftedIndex });
      } else {
        // Scneario 2b) replace player
        playersDraftedArr = selectedTeam.playersDrafted.map(player => {
          return player.pickIndex !== draftedIndex ? player : { playerName: selectedPlayer.name, position: selectedPlayer.position, pickIndex: draftedIndex };
        });
      }
    }
    setTeams(teams.map(t => {
      return t.name !== selectedTeam.name ? t : {...t, playersDrafted: playersDraftedArr}
    }))
  }

  const checkIfAlreadyPicked = (playerArr, index) => {
    for(const player of playerArr) {
      if(player.pickIndex === index) {
        return true;
      }
    }
    return false;
  }

  // let's move these two functions into a utils class
  const downloadFile = ({ data, fileName, fileType }) => {
    const blob = new Blob([data], { type: fileType });
    const a = document.createElement('a');
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    const clickEvt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    })
    a.dispatchEvent(clickEvt);
    a.remove();
  }

  const exportToJson = (e) => {
    e.preventDefault()
    downloadFile({
      data: JSON.stringify(teams),
      fileName: "teamsNew.json",
      fileType: "text/json"
    });
  }

  return (
    <Container>
    <Row xs={1} md={2}>
      <Col>
        <h3>Draft Order</h3>
        <CardList 
          teams={teams} 
          draftOrder={draftOrder} 
          players={players}
          onSelectPlayer={onSelectPlayer}
          onSavePlayer={onSavePlayer}
          onSelectTeam={onSelectTeam}
        />
        <Button 
          id="teams-export-btn" 
          variant="primary" 
          size="lg"
          onClick={exportToJson}
        >Export Teams JSON</Button>
      </Col>
      <Col>
        <h3>Best Available Players</h3>
        <BestAvailableTable players={players} />
        <Button 
          id="players-export-btn" 
          variant="primary" 
          size="lg"
          onClick={exportToJson}
        >Export Players JSON</Button>
      </Col>
    </Row>
  </Container> 
  );
}

export default App;
