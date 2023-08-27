import React from 'react'
import ReactDOM from 'react-dom/client'
import { App, Sidebar }  from './Containers/App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Sidebar />

  </React.StrictMode>,
)

postMessage({ payload: 'removeLoading' }, '*')
