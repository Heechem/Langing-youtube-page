import { ElementType } from "react";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "./Button";

type LargeSidebarItemProps = {
  IconOrUrl: ElementType | string;
  title: string;
  url: string;
  isActive?: boolean;
};

const LargeSidebarItem = ({
  IconOrUrl,
  title,
  url,
  isActive = false,
}: LargeSidebarItemProps) => {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `flex w-full items-center gap-4 rounded-lg p-3 ${
          isActive ? "bg-neutral-100 font-bold hover:bg-secondary" : undefined
        }`,
      )}
    >
      {typeof IconOrUrl === "string" ? (
        <img src={IconOrUrl} className="h-6 w-6 rounded-full" />
      ) : (
        <IconOrUrl className="h-6 w-6" />
      )}

      <div className=" overflow-hidden text-ellipsis whitespace-nowrap">
        {title}
      </div>
    </a>
  );
};

export default LargeSidebarItem;
