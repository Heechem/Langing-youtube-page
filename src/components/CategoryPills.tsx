import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";

type CategoryPillProps = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

const TRANSLATE_AMOUNT = 200;

const CategoryPills = ({
  categories,
  selectedCategory,
  onSelect,
}: CategoryPillProps) => {
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const [translate, setTranslate] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current == null) return;
    const observer = new ResizeObserver((entries) => {
      const container = entries[0]?.target;
      if (container == null) return;
      setIsLeftVisible(translate > 0);
      setIsRightVisible(
        translate + container.clientWidth <= container.scrollWidth,
      );
    });
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [categories, translate]);

  return (
    <div className="relative  overflow-x-hidden" ref={containerRef}>
      <div
        className="flex w-[max-content]  gap-3 whitespace-nowrap transition-transform"
        style={{ transform: ` translateX(-${translate}px)` }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "dark" : "default"}
            className="whitespace-nowrap rounded-lg px-3 py-1"
            onClick={() => onSelect(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      {isLeftVisible && (
        <div className="absolute left-0 top-1/2   h-full w-24 -translate-y-1/2  bg-gradient-to-r from-white from-50% to-transparent">
          <Button
            variant={"ghost"}
            size="icon"
            className="
           aspect-square h-full w-auto p-1.5"
            onClick={() => {
              setTranslate((translate) => {
                const newTranslate = translate - TRANSLATE_AMOUNT;
                if (newTranslate <= 0) return 0;
                return newTranslate;
              });
            }}
          >
            <ChevronLeft />
          </Button>
        </div>
      )}
      {isRightVisible && (
        <div className="absolute right-0 top-1/2 flex  h-full w-24 -translate-y-1/2 justify-end bg-gradient-to-l from-white from-50% to-transparent">
          <Button
            variant={"ghost"}
            size="icon"
            className="
           aspect-square h-full w-auto p-1.5"
            onClick={() =>
              setTranslate((translate) => {
                if (containerRef.current == null) {
                  return translate;
                }
                const newTransalte = translate + TRANSLATE_AMOUNT;
                const edge = containerRef.current.scrollWidth;
                const width = containerRef.current.clientWidth;
                if (newTransalte + width >= edge) {
                  return edge - width;
                }
                return newTransalte;
              })
            }
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
};

export default CategoryPills;
