import React from 'react';

//Setup Component Book - it will return a description for each book
export const Book = (props) => {

    const complexExample = () => {
        console.log(author);
    };

    //Create a handler for an event
    const clickHandler = (author) => {
        alert(`you have pushed the button at book: ${author}!`);
    };


    const {img, title, author} = props;
    return (
        <article className="book" onMouseOver={() => {
            console.log(title);
        }}>
        <img src={img} alt=""/>
        <h2 onClick={() => console.log(`You have toched: ${title}`)}>{author}</h2>
        <h4>{title}</h4>
        <button type="button" onClick={clickHandler}> example </button>

        <button type="button" onClick={complexExample(author)}> onClick event with handeler </button>

        <button type="button" onClick={() => {complexExample(author)}}> onClick event with arrow function wich run another function  </button>

        </article>
    );
};


