import "./ui/support-menu-btn.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

const SupportMenuButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger class="support-menu-trigger">
        <h1>[Support]</h1>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="support-menu-dropdown-content">
        <DropdownMenuItem class="support-menu-dropdown-content-button">
          <span class="support-menu-main-text">[NASM docs]</span>
        </DropdownMenuItem>
        <DropdownMenuItem class="support-menu-dropdown-content-button">
          <span class="support-menu-main-text">[FASM docs]</span>
        </DropdownMenuItem>
        <DropdownMenuItem class="support-menu-dropdown-content-button">
          <span class="support-menu-main-text">[About]</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SupportMenuButton;
