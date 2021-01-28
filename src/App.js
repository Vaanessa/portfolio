import React from 'react';

//den är global, kan alltså användas i hela koden, om jag bara skulle lägga in den i tex function så skulle det vara lokalt

const list = [
  {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },
  {
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
  },
  ];


const welcome = {

  greeting: 'Hey',
  title: 'Fe20',
}; 

const myArray= ["I'm", "an", "array"];
const myNumbers = [1, 4, 8];

function getTitle(title) {
  return 'From Function' + title;
}

// const map1 = array1.map(x => x * 2=;)

function writePTags(arr) {
  return arr.map(function (x, index) {
    return (<p key={index}>{x}</p>);
  })
}

function App() {

  return (
      <div> 
      <h1> My Hacker Stories </h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    <hr />

 {/* den här stiger igenom hela arrayen, spelar ingen roll hur många element man har*/ }

  

{list.map(function(item) {
return (
<div key={item.objectID}>
<span>
<a href={item.url}>{item.title}</a>
</span>
<span>{item.author}</span>
<span>{item.num_comments}</span>
<span>{item.points}</span>
</div>
);
})}

    

      </div>
  );
}






export default App;
