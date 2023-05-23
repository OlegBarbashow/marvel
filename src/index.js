import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './components/app/App';
import MarvelService from "./components/services/MarvelService";
import './style/style.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const marvelService = new MarvelService();

marvelService.getAllCharacters().then(res=>res.data.results.forEach(item => console.log(item.name)));

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
