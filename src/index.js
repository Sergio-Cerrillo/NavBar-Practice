import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />)


