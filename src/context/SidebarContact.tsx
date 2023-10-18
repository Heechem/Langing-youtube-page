import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type SidebarProviderProps = {
  children: ReactNode;
};

type SideBarContextType = {
  isLargeOpen: boolean;
  isSmallOpen: boolean;
  toggle: () => void;
  close: () => void;
};

const SideBarContext = createContext<SideBarContextType | null>(null);

export function useSidebarContext() {
  const value = useContext(SideBarContext);
  if (value == null) throw Error(" Cannot use outside of SideBarProvider");
  return value;
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isLargeOpen, setIsLargeOpen] = useState(true);

  const [isSmallOpen, setIsSmallOpen] = useState(false);

  function isScreenSmall() {
    return window.innerWidth < 1024;
  }

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 1024) setIsSmallOpen(false);
    };
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  function toggle() {
    if (isScreenSmall()) {
      setIsSmallOpen((s) => !s);
    } else {
      setIsLargeOpen((l) => !l);
    }
  }

  function close() {
    if (isScreenSmall()) {
      setIsSmallOpen(false);
    } else {
      setIsLargeOpen(false);
    }
  }

  return (
    <SideBarContext.Provider
      value={{ isLargeOpen, isSmallOpen, toggle, close }}
    >
      {children}
    </SideBarContext.Provider>
  );
}
