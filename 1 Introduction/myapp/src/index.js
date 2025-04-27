import React from 'react';
import {createRoot} from 'react-dom/client';

/*
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render("This is an example of React Js");
*/

/*
createRoot(document.getElementById('root')).render("This is an example of React Js..!!");
*/

const data = <h1>This is an example of React Js</h1>
createRoot(document.getElementById('root')).render(data);