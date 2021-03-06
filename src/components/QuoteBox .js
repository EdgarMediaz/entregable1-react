import React, { useState } from 'react';
import quotes from '../quotes.json'

const colors = ['#845EC2', '#D65DB1', '#FF6F91', '#FF9671', '#FFC75F','#F9F871']

const QuoteBox  = () => {

    console.log(quotes);

    const randomIndex = Math.floor(Math.random() * quotes.length)
    const[index, setIndex] = useState(randomIndex)

    const changeQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length)
        setIndex(randomIndex)   
    }

    const randomColor = Math.floor(Math.random() * colors.length)
    document.body.style = `background: ${colors[randomColor]}`

    const styles = {
        color: colors[randomColor],
    }

    return (
        <div className='card' style={styles}>
            <h1><i class="fa-solid fa-quote-left"></i>{quotes[index].quote}</h1>
            <h2>{quotes[index].author}</h2>
            <button onClick={changeQuote}>
                <i className="fa-solid fa-circle-chevron-right fa-2xl" style={styles}></i>
            </button>
        </div>
    );
};

export default QuoteBox ;