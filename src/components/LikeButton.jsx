import { useState } from "react";

function LikeButton() {
  const [like, setlike] = useState(0);
  return (
    <>
      <button onClick={() => setlike(like + 1)}>{like} Likes</button>
      <button onClick={() => setlike(like + -1)}>{like} Likes</button>
    </>
  );
}
export default LikeButton;
