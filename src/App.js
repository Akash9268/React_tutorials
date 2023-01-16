import React from 'react';
import './App.css';

//JSX - syntax javascript with html.
//component - single unit so everythin should be included.
//jsx gets transpiled to javascript with html using babel.
//function returns JSX.
//React creates a object using React.createElement.
//for boolean undefined and null nothing is printed.

//inside jsx {/* if else not supported but ternary operator is there. */}

function App() {
  const pets = [
    {
      name:'Dolly',
      type:'cat',
      skills:['play dead','mewow','purr'],
      image:'https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwY2F0fGVufDB8fDB8fA%3D%3D&w=1000&q=80'
    },
    {
      name:'moly',
      type:'cat',
      skills:['play dead','mewow','purr'],
      image:'https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwY2F0fGVufDB8fDB8fA%3D%3D&w=1000&q=80'
    },
  ];
  return (
    <div className='App'>
      <h1>My Pets</h1>
      <ul className='container'>
         {
          pets.map((pet,index) => (
              <li key = {index}>
              <h1>{pet.name}</h1>
              <img src={pet.image}
                alt={pet.name}
                width="200px"
                height="200px"></img>
              <ul className='skills'>
                {
                  pet.skills.map((skill,index) => (
                    <li key={skill}>{skill}</li>
                  ))
                }
              </ul>
              </li>
          ))
         }
      </ul>
    </div>

  )
}

export default App;

