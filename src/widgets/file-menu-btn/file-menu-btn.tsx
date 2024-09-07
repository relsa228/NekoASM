import "./ui/file-menu-btn.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

const FileMenuButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger class="file-menu-trigger">
        <h1>[File]</h1>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="file-menu-dropdown-content">
        <DropdownMenuItem class="file-menu-dropdown-content-button">
          <span class="file-menu-main-text">[Add file]</span>
          <span class="file-menu-shortcut">Ctrl+A</span>
        </DropdownMenuItem>
        <DropdownMenuItem class="file-menu-dropdown-content-button">
          <span class="file-menu-main-text">[Delete file]</span>
          <span class="file-menu-shortcut">Del</span>
        </DropdownMenuItem>
        <DropdownMenuItem class="file-menu-dropdown-content-button">
          <span class="file-menu-main-text">[Save file]</span>
          <span class="file-menu-shortcut">Ctrl+S</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FileMenuButton;
