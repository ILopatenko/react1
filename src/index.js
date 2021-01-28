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
        <Book1 img={firstBook.img} title={firstBook.title} author={firstBook.author}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam beatae excepturi sint inventore praesentium consequuntur! Sed sequi officiis eveniet, excepturi ipsa, ducimus natus ipsam numquam eligendi cum rerum qui cumque?</p>
        </Book1>

        <Book2 img={secondBook.img} title={secondBook.title} author={secondBook.author}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Book2>
    </section>
    );
};

const Book1 = ({img, author, title, children}) => {
    return <article className="book">
       <img src={img} alt=""/>
       <h2>{author.toUpperCase()}</h2>
       <h4>{title}</h4>
       {children}
    </article>;
};


const Book2 = (props) => {

    //Destruct object to const variables
    const {img, title, author} = props;

    return <article className="book">
       <img src={img} alt=""/>
       <h2>{author.toUpperCase()}</h2>
       <h4>{title}</h4>
       {props.children}
    </article>;
};



ReactDom.render(<Booklist />, document.getElementById('root'));


