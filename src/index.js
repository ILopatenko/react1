import React from 'react';
import ReactDom from 'react-dom';
import './index.css';


//Import data from other places/files
import {books} from "./books";
import { Book } from "./Book";
import { greeting } from "../src/testing/testing";

//This is a main component
function BookList() { 
    console.log(greeting);
    return (
    <section className="booklist">
        {books.map((book) => {
            return (
                <Book key={book.id} {...book}></Book>
            );
        })} 
    </section>
    );
};

//Render our main component BookList to div with id='root' in index.html
ReactDom.render(<BookList />, document.getElementById('root'));


