import React from 'react'

const Title = ({title, description, words}) => {
    function wrapWordsInSpans(inputString) {
        // Split the input string by spaces
        const words = inputString.split(' ');
        
        // Map each word to a <span> element and join them back into a string
        const wrappedWords = words.map(word => `<span>${word}</span>`).join(' ');
        
        // Return the resulting string with words wrapped in <span> elements
        return wrappedWords;
    }
  return (
    <div className='heading'>
        <h2 className='sub-title' style={{width: words === 1 ? '100px' : '250px'}}>{title.split(" ").map(word => (
            <span>{word}</span>
        ))}</h2>
        <p>{description}</p>
    </div>
  )
}

export default Title
