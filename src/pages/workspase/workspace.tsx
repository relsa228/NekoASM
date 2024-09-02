import { createSignal } from "solid-js";
import logo from "./ui/logo.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./ui/workspace.css";
import { Router, Route } from "@solidjs/router";
import ToolsLayout from "../../app/tools/tools"

const Element = () => {
  return (
      <>
          <h1>Welcome to Tauri!</h1>
          <a href="/nin">hehe</a>
      </>
  );
}

const ElementPop = () => {
  return (
      <>
          <h1>UwU</h1>
          <a href="/">haha</a>
      </>
  );
}


function Workspace() {
  const [greetMsg, setGreetMsg] = createSignal("");
  const [name, setName] = createSignal("");

  async function greet() {
    setGreetMsg(await invoke("greet", { name: name() }));
  }

  return (
    <Router root={ToolsLayout}>
      <Route path="/" component={Element} />
      <Route path="/nin" component={ElementPop} />
    </Router>
  );
}

export default Workspace;
