import React from 'react';
import {createRoot} from 'react-dom/client';
import element3,{ element1,element2 } from './example3.jsx';

createRoot(document.getElementById("root1")).render(element1);
createRoot(document.getElementById("root2")).render(element2);
createRoot(document.getElementById("root3")).render(element3);