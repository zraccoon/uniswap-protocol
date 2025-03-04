import React from 'react';
import ReactDOM from 'react-dom';
import './fonts/stylesheet.css';
import './scss/style.scss';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Web3Provider from 'web3-react/dist/provider';
import connectors from './Connector';

ReactDOM.render(
  <React.StrictMode>
    <Web3Provider connectors={connectors} libraryName="ethers.js">
      <App />
    </Web3Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
