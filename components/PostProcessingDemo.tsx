import { FC } from "react";
import HomePageDemo from "./HomePageDemo";
import highlight from "../utils/highlight";

const html = `<div class="lost-utility:clearfix;">${
  Array(3)
    .fill(`\n  <div class="lost-column:1/3; background:$gray40; height:$len64;"></div>`)
    .join("")
}
</div>`;

const PseudoClassesDemo: FC<{ children?: undefined }> = () => (
  <HomePageDemo
    left={{ __html: highlight(html) }}
    right={{ __html: `<div class="padding:$len32; width:100%;">${html}</div>` }} />
);

export default PseudoClassesDemo;
