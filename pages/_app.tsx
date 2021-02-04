require( "@hacss/build");

import { FC, useEffect, useState } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import DocsApp from "./docs/_app";
import { MenuState, useMenuState } from "../state/Menu";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const bg = "background:white;";
    document.body.classList.add(bg);
    return () => document.body.classList.remove(bg);
  }, []);

  const { pathname } = useRouter();
  const [sidebarState, openSidebar, closeSidebar] = useSidebarState();

  return (
    <div className="position:absolute; inset:0;">
      <MenuState>
        {
          pathname.startsWith("/docs")
          ? (
              <DocsApp
                pathname={pathname.substring(5)}
                sidebarState={sidebarState}
                onSidebarOpen={openSidebar}
                onSidebarClose={closeSidebar}>
                <Component {...pageProps} />
              </DocsApp>
            )
          : (<Component {...pageProps} />)
        }
      </MenuState>
    </div>
  );
}

export default App;

const useSidebarState = (): ["open" | "closed", () => void, () => void] => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const collapse = () => {
      const { matches } = matchMedia("(max-width: 37.49999em)");
      if (matches) {
        setOpen(false);
      }
      else {
        setOpen(true);
      }
    };
    collapse();
    window.addEventListener("resize", collapse);
    return () => { window.removeEventListener("resize", collapse); };
  }, [setOpen]);

  return [
    open ? "open" : "closed",
    () => setOpen(true),
    () => setOpen(false)
  ];
};