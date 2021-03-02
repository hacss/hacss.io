import { FC } from "react";
import Link from "next/link";

const pages = [
  ["/fundamentals", "Fundamentals"],
  ["/configuration", "Configuration"],
  ["/cli", "Command-line interface"],
  ["/webpack", "Webpack"],
  ["/api", "API"],
  ["/style-guide", "Style Guide"]
];

const DocsApp
: FC<{
    pathname: string;
    sidebarState: "open" | "closed";
    onSidebarOpen: () => any;
    onSidebarClose: () => any;
  }>
= ({ pathname, sidebarState, onSidebarOpen, onSidebarClose, children }) => {
  return (
    <div className="display:flex; height:100%;">
      <header className={`
        sidebar
        ${sidebarState}
        background:$gray90;
        transition-property:background;
        transition-duration:250ms;
        position:relative;
      `}>
        <div className={`
          display:flex;
          align-items:center;
          padding:$len16;
          .open_{padding-x:$len32}
          transition-property:padding;
          transition-duration:250ms;
        `}>
          <Link href="/">
            <a className={`
              link
              appearance:none;
              outline:none;
              border:none;
              background:transparent;
              margin:0;
              padding:0;
              overflow:hidden;
              max-width:calc(#{$len1}*38);
              .open_{max-width:$len160}
              transition-property:max-width;
              transition-duration:250ms;
            `}>
              <svg viewBox="0 0 1679 512" className={`
                min-width:9.838125rem;
                min-height:3rem;
              `}>
                <defs>
                  <linearGradient id="logoB" x1="0" x2="0" y1="0" y2="100%">
                    <stop offset="62.5%" className="stop-color:$gray10; .link:hover_{stop-color:$blue10} .link:active_{stop-color:$red10} transition-property:stop-color; transition-duration:250ms;"></stop>
                    <stop offset="62.5%" className="stop-color:$gray30; .link:hover_{stop-color:$blue30} .link:active_{stop-color:$red30} transition-property:stop-color; transition-duration:250ms;"></stop>
                  </linearGradient>
                  <linearGradient id="logoA" x1="0" x2="0" y1="0" y2="100%">
                    <stop offset="50%" className="stop-color:$gray10; .link:hover_{stop-color:$blue10} .link:active_{stop-color:$red10} transition-property:stop-color; transition-duration:250ms;"></stop>
                    <stop offset="50%" className="stop-color:$gray30; .link:hover_{stop-color:$blue30} .link:active_{stop-color:$red30} transition-property:stop-color; transition-duration:250ms;"></stop>
                  </linearGradient>
                </defs>
                <path
                  className="transition-property:transform; transition-duration:250ms; .sidebar:not(.open)_{transform:scale(0.75)__translate(3.75%,15%)}"
                  fill="url(#logoB)"
                  d="M16 0v256l16 16-32 32 32 32-32 32 32 32-32 32 32 32-32 32 16 16h96V224h128a64 64 0 0164 64v224h96V288a160 160 1 00-160-160H112V0"
                />
                <path
                  className=".sidebar:not(.open)_{transform:translateX(26rem)__scaleX(0)} transform-origin:left; transition-property:transform; transition-duration:250ms;"
                  fill="url(#logoA)"
                  d="M506.481 249.396h-87.464q2.262-24.128 10.933-45.994t25.259-38.454a116.347 116.347 0 0126.381-19.589 145.607 145.607 0 0115.089-7.178 133.626 133.626 0 0131.29-8.368 179.046 179.046 0 0126.014-1.811h45.24a172.049 172.049 0 0128.969 2.322 125.261 125.261 0 0130.22 8.988 131.788 131.788 0 0126.939 15.956 112.586 112.586 0 0114.908 13.827q16.588 18.473 24.882 42.224 8.294 23.751 8.294 47.879v252.59H519.299a112.572 112.572 0 01-24.947-2.66 91.774 91.774 0 01-19.539-6.765 101.058 101.058 0 01-26.261-17.968 93.698 93.698 0 01-6.538-6.914 98.41 98.41 0 01-17.435-30.11 115.512 115.512 0 01-2.169-6.459 150.676 150.676 0 01-6.144-35.563 175.061 175.061 0 01-.265-9.677 142.569 142.569 0 013.506-32.042 126.874 126.874 0 013.28-11.69 107.018 107.018 0 0111.337-24.024 93.734 93.734 0 018.267-11.037q12.818-14.703 32.045-23.374a97.841 97.841 0 0128.754-7.824 122.592 122.592 0 0114.601-.847h128.934v-7.54a143.476 143.476 0 00-.861-16.035 117.915 117.915 0 00-1.401-9.224 55.685 55.685 0 00-3.335-11.15 44.313 44.313 0 00-4.959-8.831q-5.69-7.824-16.748-12.629a60.908 60.908 0 00-1.348-.566 56.663 56.663 0 00-9.742-2.89q-5.12-1.068-11.201-1.569a140.179 140.179 0 00-11.479-.442h-18.85a167.951 167.951 0 00-13.996.542q-19.368 1.626-28.982 8.129a39.521 39.521 0 00-13.593 16.141 56.563 56.563 0 00-3.749 10.626zm15.834 184.73h124.41v-76.908h-124.41a19.588 19.588 0 00-11.718 3.974q-2.734 1.984-5.278 4.958a40.219 40.219 0 00-.723.87 31.675 31.675 0 00-5.342 10.094q-1.508 4.575-2.133 10.16a75.658 75.658 0 00-.442 8.398 77.746 77.746 0 00.627 10.222q1.6 12.033 7.29 18.807a32.08 32.08 0 005.382 5.158q5.742 4.267 12.337 4.267zm368.439-8.045h30.914a62.975 62.975 0 0015.3-1.777 48.677 48.677 0 0015.614-6.894q12.818-8.671 16.588-23.751h89.726q-6.786 54.288-42.224 86.71a119.827 119.827 0 01-55.109 28.189 177.571 177.571 0 01-39.895 4.233h-30.914a185.413 185.413 0 01-34.113-3.016 149.969 149.969 0 01-24.699-6.786 125.205 125.205 0 01-31.065-16.599 111.894 111.894 0 01-13.421-11.676 128.705 128.705 0 01-25.607-38.101 150.096 150.096 0 01-2.668-6.385q-10.179-26.013-10.179-57.681V269.249a177.049 177.049 0 012.706-31.631 138.377 138.377 0 017.473-26.427q10.179-25.636 28.275-43.732 18.096-18.096 44.486-28.275a151.601 151.601 0 0138.184-9.083 189.099 189.099 0 0120.628-1.096h30.914q52.411 0 85.942 23.876a111.18 111.18 0 0110.57 8.546q35.438 32.422 40.716 88.972h-88.972a52.96 52.96 0 00-5.648-13.485 42.369 42.369 0 00-10.94-12.151 43.016 43.016 0 00-15.387-7.174q-7.36-1.874-16.281-1.874h-30.914a61.505 61.505 0 00-19.134 2.854 50.815 50.815 0 00-20.451 12.603 52.059 52.059 0 00-14.868 30.979 72.024 72.024 0 00-.589 9.36v98.02a65.379 65.379 0 002.7 19.219 52.252 52.252 0 0012.757 21.497 51.908 51.908 0 0034.955 15.683 69.855 69.855 0 004.63.151zM1347.948 128v78.416h-150.046q-7.839 0-13.508 2.171a24.459 24.459 0 00-2.703 1.222q-6.409 3.393-10.933 9.425-4.524 6.032-6.786 13.195a48.759 48.759 0 00-1.994 9.239 42.127 42.127 0 00-.268 4.71q0 14.326 9.425 26.013a34.303 34.303 0 007.652 7.122 27.095 27.095 0 0015.345 4.565h84.448a130.704 130.704 0 0123.333 1.988 98.03 98.03 0 0123.038 7.06 93.504 93.504 0 0127.078 18.279 88.074 88.074 0 016.098 6.603q13.195 15.834 19.604 37.7 6.409 21.866 6.409 46.748v2.262a135.662 135.662 0 01-2.505 26.561 111.666 111.666 0 01-5.412 18.679 102.445 102.445 0 01-14.691 26.149 93.41 93.41 0 01-7.552 8.535q-14.326 14.326-33.93 22.62t-41.47 8.294h-182.468V440.91h156.832q17.342 0 32.045-9.802 14.703-9.802 15.457-29.406v.754a51.272 51.272 0 00-.583-7.952q-.698-4.446-2.234-8.13a28.419 28.419 0 00-1.33-2.768q-4.147-7.54-10.933-12.441-6.786-4.901-15.08-7.163-8.294-2.262-17.342-2.262h-67.86q-25.631 0-44.286-6.3a85.727 85.727 0 01-10.379-4.256q-21.489-10.556-33.93-27.144-12.441-16.588-16.965-37.7-4.524-21.112-4.524-42.978 0-22.62 6.786-43.732a114.653 114.653 0 0116.783-33.193 108.226 108.226 0 013.198-4.13q13.195-16.211 32.799-25.259a97.802 97.802 0 0128.726-8.074 123.855 123.855 0 0115.76-.974h168.896z M1642.948 128v78.416h-150.046q-7.839 0-13.508 2.171a24.459 24.459 0 00-2.703 1.222q-6.409 3.393-10.933 9.425-4.524 6.032-6.786 13.195a48.759 48.759 0 00-1.994 9.239 42.127 42.127 0 00-.268 4.71q0 14.326 9.425 26.013a34.303 34.303 0 007.652 7.122 27.095 27.095 0 0015.345 4.565h84.448a130.704 130.704 0 0123.333 1.988 98.03 98.03 0 0123.038 7.06 93.504 93.504 0 0127.078 18.279 88.074 88.074 0 016.098 6.603q13.195 15.834 19.604 37.7 6.409 21.866 6.409 46.748v2.262a135.662 135.662 0 01-2.505 26.561 111.666 111.666 0 01-5.412 18.679 102.445 102.445 0 01-14.691 26.149 93.41 93.41 0 01-7.552 8.535q-14.326 14.326-33.93 22.62t-41.47 8.294h-182.468V440.91h156.832q17.342 0 32.045-9.802 14.703-9.802 15.457-29.406v.754a51.272 51.272 0 00-.583-7.952q-.698-4.446-2.234-8.13a28.419 28.419 0 00-1.33-2.768q-4.147-7.54-10.933-12.441-6.786-4.901-15.08-7.163-8.294-2.262-17.342-2.262h-67.86q-25.631 0-44.286-6.3a85.727 85.727 0 01-10.379-4.256q-21.489-10.556-33.93-27.144-12.441-16.588-16.965-37.7-4.524-21.112-4.524-42.978 0-22.62 6.786-43.732a114.653 114.653 0 0116.783-33.193 108.226 108.226 0 013.198-4.13q13.195-16.211 32.799-25.259a97.802 97.802 0 0128.726-8.074 123.855 123.855 0 0115.76-.974h168.896z"
                />
              </svg>
            </a>
          </Link>
        </div>
        <nav className={`
          display:flex;
          flex-direction:column;
          font:$body1;
          white-space:nowrap;
          overflow:hidden;
          transition-property:max-width,transform;
          transition-duration:250ms;
          max-width:$len64;
          .open_{max-width:$len256}
          .sidebar:not(.open)_{transform:translateX(-200%)}
          direction:rtl;
          text-align:left;
        `}>
          {
            pages
              .map(([href, label]) => [`/docs${href}`, label])
              .map(([ href, label ]) => {
                if (href === pathname) {
                  return (
                    <div
                      key={href}
                      className={`
                        padding-x:$len16;
                        padding-y:$len4;
                        color:$gray20;
                        background:$gray80;
                      `}>
                      {label}
                    </div>
                  );
                }

                return (
                  <Link key={href} href={href}>
                    <a className={`
                      padding-x:$len16;
                      padding-y:$len4;
                      text-decoration:none;
                      color:$gray20;
                      :hover{color:$blue20}
                      :active{color:$red20}!
                    `}>
                      {label}
                    </a>
                  </Link>
                );
              })
          }
        </nav>
        <button
          onClick={() => { sidebarState === "closed" ? onSidebarOpen() : onSidebarClose(); }}
          className={`
            appearance:none;
            outline:none;
            border:0;
            margin:0;
            padding:0;
            width:$len48;
            height:$len48;
            background:transparent;
            :hover{background:$gray95}
            :focus{background:$gray95}
            color:$gray50;
            :active{color:$gray30}
            transition-property:background;
            transition-duration:250ms;
            border-radius:$full;
            position:absolute;
            bottom:$len8;
            left:calc(50%-#{$len48}/2);
            cursor:pointer;
          `}>
          <svg viewBox="0 0 24 24" className="width:$len24;">
            <path d={
              sidebarState === "open"
              ? "M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z"
              : "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            } className="fill:currentColor;" />
          </svg>
        </button>
      </header>
      <main className={`
        flex:1;
        font:$body1;
        color:$gray95;
        overflow-y:auto;
      `}>
        {children}
      </main>
    </div>
  );
}

export default DocsApp;
