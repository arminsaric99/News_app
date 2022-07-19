import { register } from "@frukmruk/html";

const MainWrapper = (props) => {
  return (
    <div id="main" class="w-full p-4 bg-blue-200">
      {props.children}
    </div>
  );
};

register({ MainWrapper });
export default MainWrapper;
