// vid-25 - Route Parameters

import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams(); // allow us to grab parameters or route parameters

    return ( 
        <div className="blog-details">
            <h2>Blog details - { id }</h2>
        </div>
     );
}
 
export default BlogDetails;

/////////////////////////////////////////////////////////////////////////////////////////////