import React from 'react';
import {createRoot} from 'react-dom/client';
import {element1} from './example2.jsx'; // named import

createRoot(document.getElementById("root")).render(element1);