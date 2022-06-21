import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from "./routes/App";

// 👇️ IMPORTANT: use correct ID of your root element
// this is the ID of the div in your index.html file
const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './routes/App';

// ReactDOM.render(<App />, document.getElementById('app'));