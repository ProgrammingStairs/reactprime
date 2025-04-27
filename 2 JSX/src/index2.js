import React from 'react';
import {createRoot} from 'react-dom/client';

const content = "This is an example of React Js.This is an example of React Js. This is an example of React Js.This is an example of React Js.";
const element = <mark>{content}</mark>

createRoot(document.getElementById("root")).render(element);