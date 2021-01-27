import React from 'react';
import ReactDom from 'react-dom';

//This is a main component
const MyAppGeneralModule = () => { 
    return (
    <div>
        <MyModule1 />
        <MyModule2 />

    </div>
    );
};

//An example of regular function wich returns a block <h4> with some text using createElement functoin of React
function MyModule1() {
    return React.createElement('h4', {}, 'Hello from non-arrow function');
};

const MyModule2 = () => { 
    return (
    <div>
        <h4>MyConponent v.0</h4>
    </div>
    );
};

ReactDom.render(<MyAppGeneralModule />, document.getElementById('root'));


