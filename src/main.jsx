import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
// https://api.themoviedb.org/3/search/movie?api_key=<<2aa9aa14e59c428bad545ff1e3a5cabb>>&query=a
