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

// import { useState } from 'react';

// const Home = () => {
//     // let name = 'mario';
//     const [name, setName] = useState('mario'); //the first value is this initial value , can call what we want, sec value is a function which we can use to change that value
//     const [age, setAge] = useState(25);
//     const handleClick = () => {
//         setName('luigi');
//         setAge(30);
//     }

//     return ( 
//         <div className="home">
//             <h2>Homepage</h2>
//             <p>{ name } is { age } years old</p>
//             <button onClick={handleClick}>Click me</button>
            
//         </div>
//      );
// }
 
// export default Home;

/////////////////////////////////////////////////////////////////////////////////////////////

//vid-10 - Outputting Lists

// import { useState } from 'react';

// const Home = () => {
//     const [blogs, setBlogs] = useState([
//         { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//         { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//         { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//         ]);

//     return ( 
//         <div className="home">
//             {blogs.map((blog) => (
//                 <div className="blog-preview" key={blog.id}>
//                     <h2>{ blog.title }</h2>
//                     <p>Written by { blog.author }</p>
//                 </div>
//             ))}
//         </div>
//      );
// }
 
// export default Home;

/////////////////////////////////////////////////////////////////////////////////////////////

//vid-11 - Props

// import { useState } from 'react';
// import BlogList from './BlogList';

// const Home = () => {
//     const [blogs, setBlogs] = useState([
//         { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//         { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//         { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//         ]);

//     return ( 
//         <div className="home">
//             <BlogList blogs={blogs} title="All Blogs!" /> 
//         </div>
//      );
// }
 
// export default Home;

/////////////////////////////////////////////////////////////////////////////////////////////

//vid-12 - Reusing Components

// import { useState } from 'react';
// import BlogList from './BlogList';

// const Home = () => {
//     const [blogs, setBlogs] = useState([
//         { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//         { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//         { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//         ]);

//     return ( 
//         <div className="home">
//             <BlogList blogs={blogs} title="All Blogs!" /> 
//             <BlogList blogs={blogs.filter((blog) => blog.author === 'mario' )} title="Mario's blogs" /> 
//         </div>
//      );
// }
 
// export default Home;

/////////////////////////////////////////////////////////////////////////////////////////////

//vid-13 - Functions as Props

// import { useState } from 'react';
// import BlogList from './BlogList';

// const Home = () => {
//     const [blogs, setBlogs] = useState([
//         { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//         { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//         { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//         ]);

//     const handleDelete = (id) => {
//         const newBlogs = blogs.filter(blog => blog.id !== id ); // doesnt change origin blogs, true if the id doesnt match this coz we want to keep that in the array, false if the id does match this then we want to remove the blog 
//         setBlogs(newBlogs);
//     }

//     return ( 
//         <div className="home">
//             <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/> 
            
//         </div>
//      );
// }
 
// export default Home;

/////////////////////////////////////////////////////////////////////////////////////////////

//vid-14 - useEffect Hook (the basics)

// import { useState, useEffect } from 'react';
// import BlogList from './BlogList';

// const Home = () => {
//     const [blogs, setBlogs] = useState([
//         { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//         { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//         { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//         ]);

//     const handleDelete = (id) => {
//         const newBlogs = blogs.filter(blog => blog.id !== id ); // doesnt change origin blogs, true if the id doesnt match this coz we want to keep that in the array, false if the id does match this then we want to remove the blog 
//         setBlogs(newBlogs);
//     }

//     useEffect(() => {
//         console.log('use effect ran');
//         console.log(blogs);
//     });

//     return ( 
//         <div className="home">
//             <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/> 
            
//         </div>
//      );
// }
 
// export default Home;

/////////////////////////////////////////////////////////////////////////////////////////////

//vid-15 - useEffect Dependencies

// import { useState, useEffect } from 'react';
// import BlogList from './BlogList';

// const Home = () => {
//     const [blogs, setBlogs] = useState([
//         { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//         { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//         { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
//         ]);

//     const [name, setName] = useState('mario');
        
//     const handleDelete = (id) => {
//         const newBlogs = blogs.filter(blog => blog.id !== id );
//         setBlogs(newBlogs);
//     }

//     useEffect(() => {
//         console.log('use effect ran');
//         console.log(name);
//     }, [name]); 
//     //Note: Empty dependency array is make sure that this hook right here only runs the function after the first initial render, if the state changes it won't run the function again, it only runs it once

//     return ( 
//         <div className="home">
//             <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/> 
//             <button onClick={() => setName('luigi')} >change name</button>
//             <p>{ name }</p>
//         </div>
//      );
// }
 
// export default Home;

/////////////////////////////////////////////////////////////////////////////////////////////

//vid-17 - Fetching data with useEffect

// import { useState, useEffect } from 'react';
// import BlogList from './BlogList';

// const Home = () => {
//     const [blogs, setBlogs] = useState(null);

//     useEffect(() => {
//         fetch('http://localhost:8000/blogs')
//             .then(res => {
//                 return res.json();
//             })
//             .then(data => {
//                 setBlogs(data);
//             })
//     }, []); 

//     return ( 
//         <div className="home">
//             { blogs && <BlogList blogs={blogs} title="All Blogs!"/> }
//         </div>
//      );
// }
 
// export default Home;

// Note: $ npx json-server --watch data/db.json --port 8000

/////////////////////////////////////////////////////////////////////////////////////////////

//vid-18 - Conditional Loading Message

// import { useState, useEffect } from 'react';
// import BlogList from './BlogList';

// const Home = () => {
//     const [blogs, setBlogs] = useState(null);
//     const [isPending, setIsPending] = useState(true);

//     useEffect(() => {
//         setTimeout(() => {
//             fetch('http://localhost:8000/blogs')
//             .then(res => {
//                 return res.json();
//             })
//             .then(data => {
//                 setBlogs(data);
//                 setIsPending(false);
//             });
//         }, 1000);
//     }, []); 

//     return ( 
//         <div className="home">
//             { isPending && <div>Loading....</div> }
//             { blogs && <BlogList blogs={blogs} title="All Blogs!"/> }
//         </div>
//      );
// }
 
// export default Home;

/////////////////////////////////////////////////////////////////////////////////////////////

//vid-19 - Handling Fetch Errors

// import { useState, useEffect } from 'react';
// import BlogList from './BlogList';

// const Home = () => {
//     const [blogs, setBlogs] = useState(null);
//     const [isPending, setIsPending] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         setTimeout(() => {
//             fetch('http://localhost:8000/blogs')
//             .then(res => {
//                 if(!res.ok){
//                     throw Error('Could not fetch the data for that resource');
//                 }
//                 return res.json();
//             })
//             .then(data => {
//                 setBlogs(data);
//                 setIsPending(false);
//                 setError(null);
//             })
//             .catch((err) => {
//                 setIsPending(false);
//                 setError(err.message);
//             })
//         }, 1000);
//     }, []); 

//     return ( 
//         <div className="home">
//             { error && <div> { error } </div> }
//             { isPending && <div>Loading....</div> }
//             { blogs && <BlogList blogs={blogs} title="All Blogs!"/> }
//         </div>
//      );
// }
 
// export default Home;

/////////////////////////////////////////////////////////////////////////////////////////////

//vid-20 - Making a Custom Hook

import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const{ data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            { error && <div> { error } </div> }
            { isPending && <div>Loading....</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs!"/> }
        </div>
     );
}
 
export default Home;