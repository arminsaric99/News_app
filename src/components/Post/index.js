import { register } from "@frukmruk/html";
import { useState } from "react";

const Post = (props) => {
  const [count, setCount] = useState(0);
  const [likeButton, setlikeButton] = useState(false);
  var button;

  if (likeButton === true) {
    button = (
      <button
        className="text-center w-20 bg-red-800 rounded px-4 py-1 text-white mt-4 mb-2"
        onClick={() => {
          setCount(count - 1);
          setlikeButton(false);
        }}
      >
        Unlike
      </button>
    );
  } else {
    button = (
      <button
        className="text-center w-20 bg-green-800 rounded px-4 py-1 text-white mt-4 mb-2"
        onClick={() => {
          setCount(count + 1);
          setlikeButton(true);
        }}
      >
        Like
      </button>
    );
  }
  return (
    <div id="post" class="w-full rounded-lg px-4 mb-4 py-1 bg-blue-400">
      <h3
        id="title"
        class="px-3 pt-2 pb-2 text-lg font-bold bg-blue-900 rounded-lg text-white"
      >
        {props.title}
      </h3>

      <hr class="border border-solid border-white mt-2 mx-2 mb-3" />
      <p class="text-white">
        Manchester United is the best football club in the world. It is founded
        in 1922. They are the most trophied club in England of all time.
      </p>
      <p class="text-blue-900">Number of likes: {count}</p>
      {button}
    </div>
  );
};

register({ Post });
export default Post;
