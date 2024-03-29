// Vid-22 - Exact Match Routes

// const Create = () => {
//     return (
//         <div className="create">
//             <h2>Add a New Blog</h2>
//         </div>
//     );
// }
 
// export default Create;

/////////////////////////////////////////////////////////////////////////////////////////////

// Vid-27 - Controlled Inputs(forms)

// import { useState } from "react";

// const Create = () => {
//     const [title, setTitle] = useState('');
//     const [body, setBody] = useState('');
//     const [author, setAuthor] = useState('mario');

//     return (
//         <div className="create">
//             <h2>Add a New Blog</h2>
//             <form>
//                 <label>Blog title: </label>
//                 <input 
//                     type="text"
//                     required
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                 />
//                 <label>Blog body: </label>
//                 <textarea 
//                     required
//                     value={body}
//                     onChange={(e) => setBody(e.target.value)}
//                 />
//                 <label>Blog author:</label>
//                 <select
//                     value={author}
//                     onChange={(e) => setAuthor(e.target.value)}
//                 >
//                     <option value="mario">mario</option>
//                     <option value="yoshi">yoshi</option>
//                 </select>
//                 <button>Add Blog</button>
//                 <p>{ title }</p>
//                 <p>{ body }</p>
//                 <p>{ author }</p> 
//             </form>
//         </div>
//     );
// }
 
// export default Create;

/////////////////////////////////////////////////////////////////////////////////////////////

// Vid-28 - Submit Events

// import { useState } from "react";

// const Create = () => {
//     const [title, setTitle] = useState('');
//     const [body, setBody] = useState('');
//     const [author, setAuthor] = useState('mario');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const blog = { title, body, author };
//         console.log(blog);
//     }

//     return (
//         <div className="create">
//             <h2>Add a New Blog</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>Blog title: </label>
//                 <input 
//                     type="text"
//                     required
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                 />
//                 <label>Blog body: </label>
//                 <textarea 
//                     required
//                     value={body}
//                     onChange={(e) => setBody(e.target.value)}
//                 />
//                 <label>Blog author:</label>
//                 <select
//                     value={author}
//                     onChange={(e) => setAuthor(e.target.value)}
//                 >
//                     <option value="mario">mario</option>
//                     <option value="yoshi">yoshi</option>
//                 </select>
//                 <button>Add Blog</button>
//                 <p>{ title }</p>
//                 <p>{ body }</p>
//                 <p>{ author }</p> 
//             </form>
//         </div>
//     );
// }
 
// export default Create;

/////////////////////////////////////////////////////////////////////////////////////////////

// Vid-29 - Making a POST Request

// import { useState } from "react";

// const Create = () => {
//     const [title, setTitle] = useState('');
//     const [body, setBody] = useState('');
//     const [author, setAuthor] = useState('mario');
//     const [isPending, setIsPending] = useState(false);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const blog = { title, body, author };
        
//         setIsPending(true);

//         fetch('http://localhost:8000/blogs', {
//             method: 'POST',
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(blog)
//         }).then(() => {
//             console.log('new blog added');
//             setIsPending(false);
//         })
//     }

//     return (
//         <div className="create">
//             <h2>Add a New Blog</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>Blog title: </label>
//                 <input 
//                     type="text"
//                     required
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                 />
//                 <label>Blog body: </label>
//                 <textarea 
//                     required
//                     value={body}
//                     onChange={(e) => setBody(e.target.value)}
//                 />
//                 <label>Blog author:</label>
//                 <select
//                     value={author}
//                     onChange={(e) => setAuthor(e.target.value)}
//                 >
//                     <option value="mario">mario</option>
//                     <option value="yoshi">yoshi</option>
//                 </select>
//                 {!isPending && <button>Add Blog</button>}
//                 {isPending && <button disabled>Adding blog... </button>}
//             </form>
//         </div>
//     );
// }
 
// export default Create;

/////////////////////////////////////////////////////////////////////////////////////////////

// Vid-30 - Programmatic Redirects

import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
        })
        // history.go(-1); //go back to previous page if using -1
        history.push('/');
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title: </label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body: </label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog... </button>}
            </form>
        </div>
    );
}
 
export default Create;

/////////////////////////////////////////////////////////////////////////////////////////////
