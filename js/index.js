import $ from "jquery";
import { initRender, popStateHandler} from "./render.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";

$(document).ready(function() {
  initRender();
  popStateHandler(window.history);
  window.onpopstate = popStateHandler;
});