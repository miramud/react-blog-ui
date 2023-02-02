// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function ReducePostText(text) {
//   const [expanded, setExpanded] = useState(false);

//   const shortenedText = expanded
//     ? text
//     : text.length > 50
//     ? text.substring(0, 50) + "..."
//     : text;

//   return (
//     <>
//       {shortenedText}
//       {text.length > 50 && (
//         <Link to={`/post/${id}`}>
//           {expanded ? "Read less" : "Read more"}
//         </Link>
//       )}
//     </>
//   );
// }

// export default ReducePostText;
