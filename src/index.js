import ReactDOM from "react-dom";

import "./__styles-generated/tailwind-pre-build.css";
import "@frukmruk/html/dist/styles/tailwind.utils.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
