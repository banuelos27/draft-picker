import './App.css';
//import styles from 'styled-components';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DraftPage from './components/DraftPage';


const App = ({ user }) => {
  return (
    <Tabs
      defaultActiveKey="jose"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="jose" title="Jose">
        <DraftPage user="jose" />
      </Tab>
      <Tab eventKey="noah" title="Noah">
        <DraftPage user="noah" />
      </Tab>
    </Tabs>
  )
}

export default App;
