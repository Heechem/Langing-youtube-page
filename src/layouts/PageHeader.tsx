import { ArrowLeft, Bell, Mic, Search, Upload, User } from "lucide-react";

import { useState } from "react";
import Button from "../components/Button";
import PageHeaderSection from "../components/PageHeaderSection";

const PageHeader = () => {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  return (
    <div className="mx-4 mb-6 flex justify-between gap-10 pt-2 lg:gap-20">
      <PageHeaderSection hidden={showFullWidthSearch} />
      <form
        className={` flex-grow justify-center gap-4  ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
        {showFullWidthSearch && (
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            type="button"
            size="icon"
            className="flex flex-shrink-0"
            variant="ghost"
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex max-w-[600px] flex-grow">
          <input
            type="search"
            placeholder="Search"
            className="w-full rounded-l-full border border-secondary-border px-4 py-1 text-lg shadow-inner shadow-secondary outline-none focus:border-blue-500"
          />
          <Button className="flex-shrink-0 rounded-r-full border border-l-0 border-secondary-border px-4 py-2">
            <Search />
          </Button>
        </div>
        <Button type="button" size="icon" className="flex flex-shrink-0">
          <Mic />
        </Button>
      </form>
      <div
        className={` flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          size={"icon"}
          variant="ghost"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button size={"icon"} variant="ghost" className="md:hidden">
          <Mic />
        </Button>
        <Button size={"icon"} variant="ghost">
          <Upload />
        </Button>
        <Button size={"icon"} variant="ghost">
          <Bell />
        </Button>
        <Button size={"icon"} variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
