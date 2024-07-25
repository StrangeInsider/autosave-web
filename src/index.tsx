import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/index.css"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReduxStore from './Redux-store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={ReduxStore}>
        <BrowserRouter>
                <App />
        </BrowserRouter>
    </Provider>
);

