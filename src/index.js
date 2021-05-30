import { render } from "react-dom";
import App from "./component/app/app";
import "./index.css";

const app = <App />;
const here = document.querySelector("#here");

render(app, here)
