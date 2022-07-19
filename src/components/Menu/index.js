import { register } from "@frukmruk/html";
import { useHistory } from "react-router-dom";

const Menu = (props) => {
  const history = useHistory();

  const handleClick = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <div class="container mx-auto">
      <div class="px-2 rounded-lg flex flex-row justify-between items-end">
        <div>
          <span class="text-3xl md:mx-40 font-bold bg-blue-900 rounded-lg text-white">
            {props.title}
          </span>
        </div>
        <div id="button" class="mx-6 my-2 md:mr-40">
          <button
            onClick={handleClick}
            class="mx-6 rounded px-2 py-1 mb-1 bg-blue-900 text-white text-bold"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

register({ Menu });
export default Menu;
