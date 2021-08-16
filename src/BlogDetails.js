// vid-25 - Route Parameters

// import { useParams } from "react-router-dom";

// const BlogDetails = () => {
//     const { id } = useParams(); // allow us to grab parameters or route parameters

//     return ( 
//         <div className="blog-details">
//             <h2>Blog details - { id }</h2>
//         </div>
//      );
// }
 
// export default BlogDetails;

/////////////////////////////////////////////////////////////////////////////////////////////

// vid-26 - Reusing Custom Hooks

// import { useParams } from "react-router-dom";
// import useFetch from "./useFetch";

// const BlogDetails = () => {
//     const { id } = useParams(); // allow us to grab parameters or route parameters
//     const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

//     return ( 
//         <div className="blog-details">
//             { isPending && <div> Loading... </div>}
//             { error && <div>{ error }</div>}
//             { blog && (
//                 <article>
//                     <h2>{ blog.title} </h2>
//                     <p>Written by { blog.author }</p>
//                     <div>{ blog.body}</div>
//                 </article>
//             )}
//         </div>
//      );
// }
 
// export default BlogDetails;

/////////////////////////////////////////////////////////////////////////////////////////////

// vid-31 - Deleting Blogs

import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams(); // allow us to grab parameters or route parameters
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history =useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' +blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            { isPending && <div> Loading... </div>}
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2>{ blog.title} </h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;

/////////////////////////////////////////////////////////////////////////////////////////////