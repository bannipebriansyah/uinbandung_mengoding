import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/custom.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
