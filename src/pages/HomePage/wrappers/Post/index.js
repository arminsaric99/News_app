import { register } from "@frukmruk/html";

const PostWrapper = (props) => {
  return (
    <div id="posts" class="w-full md:w-11/12 lg:w-8/12 px-2 py-4 mx-auto">
      {props.children}
    </div>
  );
};

register({ PostWrapper });
export default PostWrapper;
