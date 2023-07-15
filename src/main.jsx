
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyContextProvider from './MyContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyContextProvider>
    <App />
  </MyContextProvider>,
)
