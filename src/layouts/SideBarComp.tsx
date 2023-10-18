import {
  Clapperboard,
  Clock,
  Film,
  Flame,
  Gamepad2,
  History,
  Home,
  Library,
  Lightbulb,
  ListVideo,
  Music2,
  Newspaper,
  PlaySquare,
  Podcast,
  Radio,
  Repeat,
  Shirt,
  ShoppingBag,
  Trophy,
} from "lucide-react";
import LargeSidebarItem from "../components/LargeSidebarItem";
import LargeSidebarSection from "../components/LargeSidebarSection";
import SmallSideBarItem from "../components/SmallSideBarItem";
import { playlists, subscriptions } from "../data/sidebarData";
import { useSidebarContext } from "../context/SidebarContact";
import PageHeaderSection from "../components/PageHeaderSection";

const SideBarComp = () => {
  const { isLargeOpen, isSmallOpen, close } = useSidebarContext();
  return (
    <>
      <aside
        className={`scrollbar-hidden sticky top-0 ml-1 flex flex-col overflow-y-auto p-4  ${
          isLargeOpen ? "lg:hidden" : "lg:flex"
        }`}
      >
        <SmallSideBarItem Icon={Home} title="Home" url="/" />
        <SmallSideBarItem Icon={Repeat} title="Shorts" url="/" />
        <SmallSideBarItem Icon={Clapperboard} title="Subscription" url="/" />
        <SmallSideBarItem Icon={Library} title="Library" url="/" />
      </aside>
      {isSmallOpen && (
        <div
          onClick={close}
          className="fixed inset-0 z-[99] bg-secondary-dark opacity-40 lg:hidden "
        />
      )}
      <aside
        className={`scrollbar-hidden absolute top-0  w-56 flex-col gap-2 overflow-y-auto px-2 pb-4 lg:sticky lg:flex ${
          isLargeOpen ? "lg:flex" : "lg:hidden"
        } ${isSmallOpen ? "z-[999] flex max-h-screen bg-white" : "hidden"}`}
      >
        <div className="sticky top-0 bg-white px-2 pb-4 pt-2 lg:hidden">
          <PageHeaderSection />
        </div>
        <LargeSidebarSection>
          <LargeSidebarItem isActive IconOrUrl={Home} title="Home" url="/" />
          <LargeSidebarItem
            IconOrUrl={Clapperboard}
            title="Subscription"
            url="/"
          />
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection visibleItemCount={5}>
          <LargeSidebarItem
            isActive
            IconOrUrl={Library}
            title="Library"
            url="/Library"
          />
          <LargeSidebarItem
            IconOrUrl={History}
            title="History"
            url="/history"
          />
          <LargeSidebarItem
            IconOrUrl={PlaySquare}
            title="Your videos"
            url="/your-videos"
          />
          <LargeSidebarItem
            IconOrUrl={Clock}
            title="Watch Later"
            url="/playlist?list=WL"
          />
          {playlists.map((playItem) => (
            <LargeSidebarItem
              key={playItem.id}
              IconOrUrl={ListVideo}
              title={playItem.name}
              url={`/playlist?list=${playItem.id}`}
            />
          ))}
        </LargeSidebarSection>
        <hr />

        <LargeSidebarSection title="Subscriptions">
          {subscriptions.map((sub) => (
            <LargeSidebarItem
              key={sub.id}
              IconOrUrl={sub.imgUrl}
              title={sub.channelName}
              url={`/@${sub.id}`}
            />
          ))}
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title="Explore">
          <LargeSidebarItem
            IconOrUrl={Flame}
            title="trending"
            url={"trending"}
          />
          <LargeSidebarItem
            IconOrUrl={ShoppingBag}
            title="Shopping"
            url="/shopping"
          />
          <LargeSidebarItem IconOrUrl={Music2} title="Music" url="/music" />
          <LargeSidebarItem
            IconOrUrl={Film}
            title="Movies & TV"
            url="/movies-tv"
          />
          <LargeSidebarItem IconOrUrl={Radio} title="Live" url="/live" />
          <LargeSidebarItem IconOrUrl={Gamepad2} title="Gaming" url="/gaming" />
          <LargeSidebarItem IconOrUrl={Newspaper} title="News" url="/news" />
          <LargeSidebarItem IconOrUrl={Trophy} title="Sports" url="/sports" />
          <LargeSidebarItem
            IconOrUrl={Lightbulb}
            title="Learning"
            url="/learning"
          />
          <LargeSidebarItem
            IconOrUrl={Shirt}
            title="Fashion & Beauty"
            url="/fashion-beauty"
          />
          <LargeSidebarItem
            IconOrUrl={Podcast}
            title="Podcasts"
            url="/podcasts"
          />
        </LargeSidebarSection>
      </aside>
    </>
  );
};

export default SideBarComp;
