import { Link } from "react-router-dom";
import "./post.css";

import ReducePostText from "../../utils/ReducePostText";

export default function Post({img, postCat, title, post, date, author, id}) {



  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="headInfo">
          <div className="postCats">
            {
              postCat.map((category)=>(
                <span className="postCat">
                  <Link className="link" to={`/posts?cat=${category}`}>
                    {category}
                  </Link>
                </span>
              ))
            }
          </div>
          <span className="postDate">{date}</span>
        </div>
        
        <span className="postTitle">
          <Link to={`/post/${id}`} className="link">
            {
              title.length > 29 ? title.substring(0, 29) + "..." : title
            }
          </Link>
        </span>
        <hr />
        <p className="postDesc">
          {
            post.length > 200 ? post.substring(0, 200) + "..." : post
          }
        </p>
      </div>
      
    </div>
  );
}
