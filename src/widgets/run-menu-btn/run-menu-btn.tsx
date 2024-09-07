import "./ui/run-menu-btn.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

const RunMenuButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger class="run-menu-trigger">
        <h1>[Run]</h1>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="run-menu-dropdown-content">
        <DropdownMenuItem class="run-menu-dropdown-content-button">
          <span class="run-menu-main-text">[Run file]</span>
          <span class="run-menu-shortcut">Ctrl+R</span>
        </DropdownMenuItem>
        <DropdownMenuItem class="run-menu-dropdown-content-button">
          <span class="run-menu-main-text">[Terminate]</span>
          <span class="run-menu-shortcut">Ctrl+P</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default RunMenuButton;
