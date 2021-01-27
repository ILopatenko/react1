import React from 'react';
import ReactDom from 'react-dom';

//An example of arrow function wich returns a block <h4> with some text inside another block <div> using JSX
const MyModule1 = () => { 
    return <div><h4>MyConponent v.0</h4></div>
};

//An example of regular function wich returns a block <h4> with some text using createElement functoin of React
function MyModule2() {
    return React.createElement('h4', {}, 'Hello from non-arrow function');
};

ReactDom.render(<MyModule1 />, document.getElementById('root'));
ReactDom.render(<MyModule2 />, document.getElementById('root2'));

