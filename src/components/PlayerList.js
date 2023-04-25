import PlayerCard from './PlayerCard';
import Accordion from 'react-bootstrap/Accordion';

const PlayerList = ({ players }) => {
   const playerCardList = players.map((player) => {
      return <PlayerCard player={player} key={player.name} />
   });

   return (
      <div>
         <Accordion defaultActiveKey="0">
            {playerCardList}
         </Accordion>
      </div>
   );
};

export default PlayerList;