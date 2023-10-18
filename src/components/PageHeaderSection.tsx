import { Menu } from "lucide-react";
import Logo from "../assets/youtube.png";
import { useSidebarContext } from "../context/SidebarContact";
import Button from "./Button";

type PageHeaderSectionProps = {
  hidden?: boolean;
};

const PageHeaderSection = ({ hidden = false }: PageHeaderSectionProps) => {
  const { toggle } = useSidebarContext();
  return (
    <div
      className={` flex-shrink-0 items-center gap-4 ${
        hidden ? "hidden" : "flex"
      }`}
    >
      <Button variant={"ghost"} size={"icon"} onClick={toggle}>
        {" "}
        <Menu />
      </Button>
      <a href="/">
        <img src={Logo} alt="" className="h-10" />
      </a>
    </div>
  );
};

export default PageHeaderSection;
