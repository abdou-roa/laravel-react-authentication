import './bootstrap';
import ReactDom from 'react-dom/client';
import Home from './components/Home';

ReactDom.createRoot(document.getElementById('app')).render(
    <Home/>
);