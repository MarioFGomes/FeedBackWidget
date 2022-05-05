import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import{WidgetForm} from './Components/WidgetForm/WidgetForm';

import './global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
