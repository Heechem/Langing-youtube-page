import React, { ReactNode, useState } from "react";
import Button from "./Button";
import { ChevronDown, ChevronUp } from "lucide-react";

type LargeSidebarSectionProps = {
  children?: ReactNode;
  title?: string;
  visibleItemCount?: number;
};

const LargeSidebarSection = ({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}: LargeSidebarSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = React.Children.toArray(children).flat();
  const visiblechildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, visibleItemCount);
  const showExpandedButton = childrenArray.length > visibleItemCount;
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;

  return (
    <div>
      {title && <div className="mb-1 ml-4 mt-2 text-lg">{title}</div>}
      {visiblechildren}
      {showExpandedButton && (
        <Button
          variant="ghost"
          className="flex w-full items-center gap-4 rounded-lg p-3"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <ButtonIcon className="h-6 w-6" />
          <div>{isExpanded ? "Show Less" : "Show More"}</div>
        </Button>
      )}
    </div>
  );
};

export default LargeSidebarSection;
