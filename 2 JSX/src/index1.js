import React from 'react';
import {createRoot} from 'react-dom/client';

const block = <div>
    <h1>This is Heading</h1>
    <p>
        This is an example of React Js. 
        This is an example of React Js. 
        This is an example of React Js. 
        This is an example of React Js. 
        This is an example of React Js. 
    </p>
</div>

createRoot(document.getElementById("root")).render(block);