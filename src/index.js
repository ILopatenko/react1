import React from 'react';
import ReactDom from 'react-dom';
import './index.css'


//Setup an array with all the data for 2 books
const books = [
    {
        id: 1,
        author: 'Irene E. Schoenberg, Jay Maurer',
        title: 'Focus on Grammar, Vol. 1: An Integrated Skills Approach, 2nd Edition',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51OrgRz7MHL._SX381_BO1,204,203,200_.jpg',
    },
    {
        id: 2,
        author: 'Workman Publishing, Michael Geisen, Sharon Madanes',
        title: 'Everything You Need to Ace Science in One Big Fat Notebook: The Complete Middle School Study Guide (Big Fat Notebooks)',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51+Db2crJOL._SX359_BO1,204,203,200_.jpg',
        },
    {
        id: 3,
        author: 'Gary Robert Robert Muschla',
        title: 'McGraw-Hill Education Vocabulary Grades 6-8, Second Edition',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51yMFkQLtBL._SX389_BO1,204,203,200_.jpg',
    }
];

//This is a main component
function BookList() { 
    return (
    <section className="booklist">
        {books.map((book) => {
            return (
                <Book key={book.id} book={book}></Book>
            );
        })} 
    </section>
    );
};

//Setup Component Book - it will return a description for each book
const Book = (props) => {
    console.log(props);
    const {img, title, author} = props.book;
    return (
        <article className="book">
        <img src={img} alt=""/>
        <h2>{author}</h2>
        <h4>{title}</h4>
        </article>
    );
};

//Render our main component BookList to div with id='root' in index.html
ReactDom.render(<BookList />, document.getElementById('root'));


