import "./ui/project-menu-btn.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

const ProjectMenuButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger class="project-menu-trigger">
        <h1>[Project]</h1>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="project-menu-dropdown-content">
        <DropdownMenuItem class="project-menu-dropdown-content-button">
          <span class="project-menu-main-text">[Open project]</span>
          <span class="project-menu-shortcut">Ctrl+O</span>
        </DropdownMenuItem>
        <DropdownMenuItem class="project-menu-dropdown-content-button">
          <span class="project-menu-main-text">[Create project]</span>
          <span class="project-menu-shortcut">Ctrl+N</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProjectMenuButton;
