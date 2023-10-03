import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function getNewQuote(quotesList) {
  return quotesList[Math.floor(Math.random() * quotesList.length)];
}

function App() {
  const [quotesList, setQuotesList] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then((json) => {
        setQuotesList(json);
        setQuote(json[0]);
      })
    }, []);

    function getQuote() {
      setQuote(getNewQuote(quotesList));
    }

  return (
    <div className="App">
      <h1>Quote Generator</h1>
      <div className='quoteBox'>
        <button onClick={getQuote}>New Quote</button>
        <h3>
          <span>"</span>
          {quote?.text}
          <span>"</span>
        </h3>
        <i>- {quote?.author}</i>
      </div>
    </div>
  );
}

export default App;
