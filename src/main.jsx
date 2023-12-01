import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyState from './context/data/myState.jsx'
import { store } from './redux/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyState>
      <provider store={store}>
    <App />
    </provider>
    </MyState>
  </React.StrictMode>,
);
