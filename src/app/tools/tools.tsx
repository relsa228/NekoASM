import "./ui/tools.css";
import { exit } from "@tauri-apps/api/process";
import FileMenuButton from "~/widgets/file-menu-btn/file-menu-btn";
import FooterBar from "~/widgets/footer-bar/footer-bar";
import ProjectMenuButton from "~/widgets/project-menu-btn/project-menu-btn";
import RunBtn from "~/widgets/run-btn/run-btn";
import RunMenuButton from "~/widgets/run-menu-btn/run-menu-btn";
import StopBtn from "~/widgets/stop-btn/stop-btn";
import SupportMenuButton from "~/widgets/support-menu-btn/support-menu-btn";
import TermMenuButton from "~/widgets/term-menu-btn/term-menu-btn";
import { Separator } from "~/components/ui/separator"

const ToolsLayout = (props: { children: any }) => {
  return (
    <div style="height: 100%;">
      <header>
        <div class="tools-bar">
          <div class="tools-menu">
            <FileMenuButton />
            <ProjectMenuButton />
            <RunMenuButton />
            <TermMenuButton />
            <SupportMenuButton />
          </div>
          <div class="tools-menu">
            <RunBtn />
            <StopBtn />
          </div>
        </div>
        <Separator class="separator"/>
      </header>
      {props.children}
      <footer>
        <Separator class="separator"/>
        <FooterBar />
      </footer>
    </div>
  );
};

export default ToolsLayout;
