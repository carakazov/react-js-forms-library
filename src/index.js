import React, {useRef} from 'react';
import ReactDOM from 'react-dom/client';
import Parent from "./input/test/Parent";
import Child from "./input/test/Child";
import App from "./input/test/App";

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

