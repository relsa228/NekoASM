import "./ui/term-menu-btn.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

const TermMenuButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger class="term-menu-trigger">
        <h1>[Term]</h1>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="term-menu-dropdown-content">
        <DropdownMenuItem class="term-menu-dropdown-content-button">
          <span class="term-menu-main-text">[Clear term]</span>
          <span class="term-menu-shortcut">Ctrl+E</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TermMenuButton;
