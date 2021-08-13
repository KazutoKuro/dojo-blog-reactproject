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

const Home = () => {

    const handleClick = (e) => {
        console.log('hello, ninjas', e);
    }

    const handleClickAgain = (name, e) => {
        console.log('hello '+ name, e.target);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('mario',e)}>Click me again</button>
        </div>
     );
}
 
export default Home;