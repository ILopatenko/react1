import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

//This is a main component
const Booklist = () => { 
    return (
    <section className="booklist">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
    </section>
    );
};

const Book = () => {
    return <article className="book">
        <Image />
        <Title />
        <Author />
    </article>;
};

const Image = () => {
    return <img src="https://images-na.ssl-images-amazon.com/images/I/61y04z8SKEL._SX349_BO1,204,203,200_.jpg" alt=""/>
};

const Author = () => <h3>Napoleon Hill</h3>

const Title = () => <h4>Think and Grow Rich: The Landmark Bestseller Now Revised and Updated for the 21st Century (Think and Grow Rich Series)</h4>








ReactDom.render(<Booklist />, document.getElementById('root'));


