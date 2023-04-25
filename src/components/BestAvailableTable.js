import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PlayerList from './PlayerList';

const BestAvailableTable = ({ players }) => {
   return (
      <Container>
         <Row>
            <Col>Rank</Col>
            <Col>Player</Col>
            <Col>School</Col>
            <Col>Position</Col>
         </Row>
         <Row>
            <PlayerList players={players} />
         </Row>
      </Container>
   )
};

export default BestAvailableTable;