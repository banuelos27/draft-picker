import PlayerCard from './PlayerCard';
import Accordion from 'react-bootstrap/Accordion';

const PlayerList = ({ players }) => {
   let count = 0;

   const playerCardList = players.map((player) => {
      count++;
      return <PlayerCard player={player} key={`_${count}_${player.name}`} />
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