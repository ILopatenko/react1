import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

//Setup all the variables
const author = 'Napoleon Hill';
const title = 'Think and Grow Rich: The Landmark Bestseller Now Revised and Updated for the 21st Century (Think and Grow Rich Series)';
const img = 'https://images-na.ssl-images-amazon.com/images/I/61y04z8SKEL._SX349_BO1,204,203,200_.jpg';


//This is a main component
const Booklist = () => { 
    return (
    <section className="booklist">
        <Book job="developer"/>
        <Book name="Ron" title="hello"/>
    </section>
    );
};




const Book = (props) => {
    console.log(props);
    return <article className="book">
       <img src={img} alt=""/>
       <h3>{author.toUpperCase()}</h3>
       <h4>{title}</h4>
       {console.log(props.job)}

       <p>{props.job}</p>
       <p>{props.title}</p>
    </article>;
};


ReactDom.render(<Booklist />, document.getElementById('root'));


