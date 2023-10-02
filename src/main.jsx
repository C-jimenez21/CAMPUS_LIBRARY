import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import DynamicTable from './components/BookList.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <DynamicTable></DynamicTable>
  </React.StrictMode>,
)
