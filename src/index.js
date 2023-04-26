import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const BrowserApp = () => {
  return (
    <Tabs
      defaultActiveKey="jose"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="jose" title="Jose">
        <App user="jose" />
      </Tab>
      <Tab eventKey="noah" title="Noah">
        <App user="noah" />
      </Tab>
    </Tabs>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserApp />
  </React.StrictMode>
);

