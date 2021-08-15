//Vid-11 - Props

// const BlogList = ({blogs, title}) => {
//   // const blogs = props.blogs;
//  // const title = props.title;
    
//     return ( 
//         <div className="blog-list">
//             <h2> { title } </h2>
//             {blogs.map((blog) => (
//                 <div className="blog-preview" key={blog.id}>
//                     <h2>{ blog.title }</h2>
//                     <p>Written by { blog.author }</p>
//                 </div>
//             ))}
//         </div>
//      );
// }
 
// export default BlogList;

/////////////////////////////////////////////////////////////////////////////////////////////

//Vid-13 - Function as Props

// const BlogList = ({blogs, title, handleDelete}) => {

    
//     return ( 
//         <div className="blog-list">
//             <h2> { title } </h2>
//             {blogs.map((blog) => (
//                 <div className="blog-preview" key={blog.id}>
//                     <h2>{ blog.title }</h2>
//                     <p>Written by { blog.author }</p>
//                     <button onClick={() => handleDelete(blog.id)}>delete blog</button>
//                 </div>
//             ))}
//         </div>
//      );
// }
 
// export default BlogList;

/////////////////////////////////////////////////////////////////////////////////////////////

//Vid-17 - Fetching data with useEffect

const BlogList = ({blogs, title }) => {

    
    return ( 
        <div className="blog-list">
            <h2> { title } </h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;

/////////////////////////////////////////////////////////////////////////////////////////////