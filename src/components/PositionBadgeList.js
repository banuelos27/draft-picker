import PositionBadge from "./PositionBadge";

const PositionBadgeList = ({ positionList }) => {
   let count = 0;
   const positionBadges = positionList.map((position) => {
      count += 1;
      return <span key={position + `${count}`}><PositionBadge position={position} />{' '}</span>;
   });
   return positionBadges;
};

export default PositionBadgeList;