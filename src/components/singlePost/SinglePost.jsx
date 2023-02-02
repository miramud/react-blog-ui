import { Link, useParams } from "react-router-dom";
import "./singlePost.css";
import PostData from "../../PostData";

// function PostPage({ match }) {
//   const postId = parseInt(match.params.id, 10);
//   const post = posts.find(post => post.id === postId);

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// }

export default function SinglePost() {

  const postId = useParams().id
  const singlePost = PostData.find(post => post.id === parseInt(postId));

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={singlePost.imageUrl}
          alt="Post Image"
        />
        <h1 className="singlePostTitle">
          <div>{singlePost.title}</div>
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                {singlePost.author}
              </Link>
            </b>
          </span>
          <span>{singlePost.date}</span>
        </div>
        <p className="singlePostDesc">
          {singlePost.post}
        </p>
      </div>
    </div>
  );
}
