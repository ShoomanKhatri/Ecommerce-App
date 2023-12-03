import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import MyState from './context/data/MyState.jsx';
import { Store } from './redux/Store.jsx';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyState>
      <Provider store={Store}>
    <App />
    </Provider>
    </MyState>
  </React.StrictMode>,
);
