import React, { useState } from 'react';


const Hello = () => {

  const [imie, setImie] = useState('');

  return (
    <div>
      <h2 data-testid="moj-heading">Hello</h2>
      <button onClick={() => console.log('klikniete!')}>Click me!</button>
      <input type="text" value={imie} onChange={(e) => setImie(e.target.value)}></input>
    </div>
  )

};

export default Hello;