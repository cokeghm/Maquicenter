import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import axios from 'axios';



axios.defaults.baseURL = 'http://localhost:5001/admin-ae7ca/us-central1';
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



