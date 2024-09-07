/* @refresh reload */
import { render } from "solid-js/web";
import Workspace from "./pages/workspase/workspace";

import { Router, Route } from "@solidjs/router";
import ToolsLayout from "./app/tools/tools";
import "./app.css";
import Settings from "./pages/settings/settings";

render(
  () => (
    <Router root={ToolsLayout}>
      <Route path="/" component={<Workspace />} />
      <Route path="/nin" component={<Settings />} />
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
