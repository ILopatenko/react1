import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

//Setup all the variables for a book as an object
const firstBook = {
    author: 'Irene E. Schoenberg, Jay Maurer',
    title: 'Focus on Grammar, Vol. 1: An Integrated Skills Approach, 2nd Edition',
    img: 'https://images-na.ssl-images-amazon.com/images/I/51OrgRz7MHL._SX381_BO1,204,203,200_.jpg',
};

const secondBook = {
    author: 'Workman Publishing, Michael Geisen, Sharon Madanes',
    title: 'Everything You Need to Ace Science in One Big Fat Notebook: The Complete Middle School Study Guide (Big Fat Notebooks)',
    img: 'https://images-na.ssl-images-amazon.com/images/I/51+Db2crJOL._SX359_BO1,204,203,200_.jpg',
};

//This is a main component
const Booklist = () => { 
    return (
    <section className="booklist">
        <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
        <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
    </section>
    );
};

const Book = ({img, author, title}) => {

    //Destruct object to const variables
    //const {img, title, author} = props;

    return <article className="book">
       <img src={img} alt=""/>
       <h2>{author.toUpperCase()}</h2>
       <h4>{title}</h4>
    </article>;
};

ReactDom.render(<Booklist />, document.getElementById('root'));


