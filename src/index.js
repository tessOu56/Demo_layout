import React , { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from "react-router-dom";
import './index.css';
import App from './App';
import AllProviders from './context';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Suspense>
    <Router>
      <AllProviders>
        <App />
      </AllProviders>
    </Router>
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
