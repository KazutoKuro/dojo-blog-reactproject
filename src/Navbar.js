// Vid-5 : Multiple Components

//Note: sfc (tab)

// const Navbar = () => {
//     return ( 
//         <nav className="navbar">
//             <h1>The Dojo Blog</h1>
//             <div className="links">
//                 <a href="/">Home</a>
//                 <a href="/create">New Blog</a>     
//             </div>
//         </nav>
//      );
// }
 
// export default Navbar ;

/////////////////////////////////////////////////////////////////////////////////////////////

// Vid-6 : Adding Styles

// const Navbar = () => {
//     return ( 
//         <nav className="navbar">
//             <h1>The Dojo Blog</h1>
//             <div className="links">
//                 <a href="/">Home</a>
//                 <a href="/create" style={{
//                     color: "white", 
//                     backgroundColor: '#f1356d',
//                     borderRadius: '8px'
//                 }}>New Blog</a>     
//             </div>
//         </nav>
//      );
// }
 
// export default Navbar ;

//Note: when we want to add dynamic value, we need to use curly brackets {}, the first curly brackets is dynamic n sec one is javascript objects

/////////////////////////////////////////////////////////////////////////////////////////////

//vid-7 - click Events

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>     
            </div>
        </nav>
     );
}
 
export default Navbar ;

/////////////////////////////////////////////////////////////////////////////////////////////