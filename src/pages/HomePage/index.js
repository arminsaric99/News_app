import { useQueryUrl } from "../../lib/data";

//components
import Menu from "../../components/Menu";
import PostLoading from "../../components/PostLoading";
import Toast from "../../components/Toast";

//wrappers
import MainWrapper from "./wrappers/Main";
import PostWrapper from "./wrappers/Post";

//ui
import { postToComponent } from "./ui";

// endpoints URLs
const postsUrl = "https://6295377ba7203b3ed07865ec.mockapi.io/posts";

const HomePage = () => {
  const {
    data: posts,
    isLoading: isPostsLoading,
    isError: isPostsError
  } = useQueryUrl({ url: postsUrl, init: [] });

  const anythingLoading = isPostsLoading;
  const anyError = isPostsError;

  return (
    <>
      {anythingLoading && (
        <Toast error={false} msg={"Data is being loaded"} timeout={3500} />
      )}

      {anyError && (
        <Toast error={true} msg={"An error has occured"} timeout={3500} />
      )}

      <MainWrapper>
        <Menu title="News App" />

        <PostWrapper>
          {isPostsLoading && <PostLoading />}
          {!isPostsLoading && posts.map(postToComponent)}
        </PostWrapper>
      </MainWrapper>
    </>
  );
};

export default HomePage;
