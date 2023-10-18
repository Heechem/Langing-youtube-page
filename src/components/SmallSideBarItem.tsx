import { twMerge } from "tailwind-merge";
import { buttonStyles } from "./Button";
import { ElementType } from "react";

type SmallSideBarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

export default function SmallSideBarItem({
  Icon,
  title,
  url,
}: SmallSideBarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "flex flex-col items-center gap-1 rounded-lg px-1 py-4",
      )}
    >
      <Icon className=" h-4 w-4" />
      <div className="text-sm">{title}</div>
    </a>
  );
}
