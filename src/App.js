// Vid-4: Dynamic Values in Templates

// // import logo from './logo.svg';
// import './App.css';

// function App() {
//   const title = 'Welcome to the new blog';
//   const likes = 50;
//   // const person = {name: 'yoshi', age: 30};
//   const link = "http://www.google.com";

//   return (
//     <div className="App">
//       <div className="content">
//         <h1>App Component</h1>
//         <h1>{title}</h1>
//         <p>Liked { likes } times</p>

//         {/* <p>{ person }</p> */}
//         <p>{ 10 }</p>
//         <p>{ "hello, ninja" }</p>
//         <p>{ [1,2,3,4,5] }</p>
//         <p>{ Math.random() * 10 }</p>

//         <a href={link}>Google Site</a>
//       </div>
//     </div>
//   );
// }

// export default App;

// // Note: numbers and string are fine to output, but booleans and objects cant

/////////////////////////////////////////////////////////////////////////////////////////////

// Vid-5: Multiple Components

import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        
      </div>
    </div>
  );
}

export default App;