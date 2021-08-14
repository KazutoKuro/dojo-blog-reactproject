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

//vid-14 - userEffect Hook (the basics)
import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
        ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id ); // doesnt change origin blogs, true if the id doesnt match this coz we want to keep that in the array, false if the id does match this then we want to remove the blog 
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran');
        console.log(blogs);
    });

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/> 
            
        </div>
     );
}
 
export default Home;