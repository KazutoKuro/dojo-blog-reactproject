// Vid-5 : Multiple Components

// const Home = () => {
//     return ( 
//         <div className="home">
//             <h2>Homepage</h2>
//         </div>
//      );
// }
 
// export default Home;

/////////////////////////////////////////////////////////////////////////////////////////////

//vid-7 - click events

// const Home = () => {

//     const handleClick = (e) => {
//         console.log('hello, ninjas', e);
//     }

//     const handleClickAgain = (name, e) => {
//         console.log('hello '+ name, e.target);
//     }

//     return ( 
//         <div className="home">
//             <h2>Homepage</h2>
//             <button onClick={handleClick}>Click me</button>
//             <button onClick={(e) => handleClickAgain('mario',e)}>Click me again</button>
//         </div>
//      );
// }
 
// export default Home;

/////////////////////////////////////////////////////////////////////////////////////////////

//vid-8 - Using state(useState hook)

import { useState } from 'react';

const Home = () => {
    // let name = 'mario';
    const [name, setName] = useState('mario'); //the first value is this initial value , can call what we want, sec value is a function which we can use to change that value
    const [age, setAge] = useState(25);
    const handleClick = () => {
        setName('luigi');
        setAge(30);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
            
        </div>
     );
}
 
export default Home;