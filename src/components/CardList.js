import TeamCard from "./TeamCard";

const CardList = ({ teams, draftOrder, players, onSelectPlayer, onSelectCard, onSavePlayer, onSelectTeam }) => {
   let draftCount = 0;

   const mapTeamToCard = (teamID) => {
      const t = teams.find(o => o.teamID === teamID);
      return t;
   };

   const getDraftedPlayer = (draftedPlayers, draftCount, teamName) => {
      if(!draftedPlayers.length > 0) {
         return "";
      }
      const draftedPlayer = draftedPlayers.find(player => player.pickIndex === draftCount);
      return draftedPlayer === undefined ? "" : `${draftedPlayer.playerName} (${draftedPlayer.position})`;
   }

   const cards = draftOrder.map((teamID) => {
      draftCount++;
      const teamCard = mapTeamToCard(teamID);
      const draftedPlayer = getDraftedPlayer(teamCard.playersDrafted, draftCount, teamCard.name);
      return <TeamCard 
         pickNumber={draftCount} 
         teamName={teamCard.name} 
         key={`_${draftCount}_${teamCard.name}`} 
         teamPositionNeeds={teamCard.teamNeeds} 
         players={players}
         onSelectPlayer={onSelectPlayer}
         onSelectCard={onSelectCard}
         cardPlayer={draftedPlayer}
         onSavePlayer={onSavePlayer}
         onSelectTeam={onSelectTeam}
         draftIndex={draftCount}
      />;
   })
   
   return cards;
};

export default CardList;