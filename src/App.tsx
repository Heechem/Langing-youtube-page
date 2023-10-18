import { useState } from "react";
import CategoryPills from "./components/CategoryPills";
import { categories, videos } from "./data/home";
import PageHeader from "./layouts/PageHeader";
import VideoItems from "./components/VideoItems";
import SideBarComp from "./layouts/SideBarComp";
import { SidebarProvider } from "./context/SidebarContact";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <SidebarProvider>
      <div className="flex max-h-screen flex-col">
        <PageHeader />
        <div className="flex-grow-1  grid grid-cols-[auto,1fr] overflow-auto">
          <SideBarComp />
          <div className=" overflow-x-hidden px-8 pb-4">
            <div className="sticky top-0 z-10 bg-white pb-4">
              <CategoryPills
                categories={categories}
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
              />
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
              {videos.map((video) => (
                <VideoItems key={video.id} {...video} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default App;
