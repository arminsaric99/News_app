import Post from "../../../components/Post";

export const postToComponent = (post) => {
  return <Post title={post.title} key={post.id} />;
};
