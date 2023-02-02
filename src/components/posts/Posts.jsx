import Post from "../post/Post";
import "./posts.css";
import PostData from "../../PostData";

export default function Posts() {
// console.log(PostData)
  return (
    <div className="posts">
        {
            PostData.map((post)=>(
                <Post id={post.id} img={post.imageUrl} postCat={post.cat} title={post.title} post={post.post} date={post.date} author={post.author} />
            ))
        }
    </div>
  );
}
