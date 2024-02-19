 import * as React from "react";
 export default App; 
 /*week1*/
/*function App(){
  const title = "React";
  return(
    <div>
      <h1>Hello World {title}</h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
    </div>
  );
}*/

/* import * as React from "react";
const welcome = {
  greeting:"Hey",
  title:"React",
};
function App(){
  const title = "React";
  return(
    <div>
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
    </div>
  );
}
export default App; */
/* import * as React from "react";
function getTitle(title){
  return title;
}
function App(){
  return(
    <div>
      <h1>Hello {getTitle("React")}</h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
    </div>
  );
}
export default App; */
/*week2*/
const list = [
  {
    title:"React",
    url:"https://reactjs.org/",
    author:"Jordan Walke",
    num_comments: 3 ,
    points : 4,
    objectID : 0,
  },
  {
    title:"Redux",
    url:"https://redux.js.org/",
    author:"Dan Abramov , Andrew Clark",
    num_comments: 2,
    points : 5,
    objectID : 1,
  }
]
function List(){
  return(
    <div>
      <ul>
        {list.map(function(item){
          return(
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title} </a>
              </span>
              <span>{item.author} </span>
              <span> {item.num_comments} , </span>
              <span>{item.points}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
function Search(){
  return(
    <div>
<label htmlFor="search">Search:</label>
      <input id="search" type="text" />
    </div>
  );
}
function App(){
  return(
    <div>
      <h1>My Hacker Stories</h1>
      <Search />
      <hr/>
      <List />
    
    </div>
  );
}