import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import PositionBadge from "./PositionBadge";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PlayerCard = ({ player }) => {
   return (
      <Accordion.Item eventKey={`${player.rank}`}>
         <Accordion.Header>
            <Container>
               <Row>
                  <Col>{player.rank}</Col>
                  <Col>{player.name}</Col>
                  <Col>{player.school}</Col>
                  <Col>{player.position}</Col>
               </Row>
            </Container>
         </Accordion.Header>
         <Accordion.Body>
            <Card>
               <Card.Body>
                  <Container>
                     <Row>
                        <Col xs={6}>
                           <PositionBadge position={player.position} />
                           &ensp;{player.name}<br />
                           {player.school}
                        </Col>
                        <Col>{player.positionRank}<br />POS RK</Col>
                        <Col>{player.rank}<br />OVR RK</Col>
                        <Col>{player.grade}<br />GRADE</Col>
                     </Row>
                  </Container>
               </Card.Body>
            </Card>
         </Accordion.Body>
      </Accordion.Item>
   );
};

export default PlayerCard;