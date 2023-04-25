import Badge from 'react-bootstrap/Badge';

const PositionBadge = ({ position }) => {
   return (
      <Badge bg={setBadgeColor(position)}>{position}</Badge>
   );
};

function setBadgeColor(positionName) {
   switch (positionName) {
      case "QB":
         return "primary";
      case "DE":
            return "success";
      case "OT":
         return "info";
      case "DT":
         return "warning";
      case "RB":
         return "dark";
      case "WR":
         return "danger";
      default: 
         return "secondary";
   }
}

export default PositionBadge;