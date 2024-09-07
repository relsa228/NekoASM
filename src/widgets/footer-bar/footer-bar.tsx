import "./ui/footer-bar.css";

const FooterBar = () => {
  const dirPath = "dir/path";
  const codeCoordinates = "228:337";
  return (
    <div class="footer-content">
      <div class="footer-main-text">{dirPath}</div>
      <div class="footer-shortcut">{codeCoordinates}</div>
    </div>
  );
};

export default FooterBar;
