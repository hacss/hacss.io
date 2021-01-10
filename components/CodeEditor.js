import { useEffect, useState } from "react";

const highlight = html => {
  const chev = x => `<span class="color:$blue40;">${x}</span>`;
  const ochev = chev("&lt;");
  const cchev = chev("&gt;");
  const tag = x => `<span class="color:$blue40;">${x}</span>`;
  return html
    .replace(
      /<([a-z][a-z0-9]*)([^>]*)>|<\/([a-z][a-z0-9]+)>/g,
      (_, open, attrs, close) =>
        close
          ? ochev + tag("/" + close) + cchev
          : ochev + tag(open) +
              attrs.replace(
                /([a-z][a-z]*)="([^"]*)"/gm,
                (_, name, value) => `<span class="color:$blue20;">${
                  name
                }=</span><span class="color:$orange10;">"${
                  value
                }"</span>`
              ) +
            cchev 
    )
    .replace("|", `<span class="position:relative;"><span class="position:absolute; inset:0; width:0.125em; height:1em; background:white;"></span></span>`);
};

const play = ({ initial, steps }, x) => {
  let s = { html: initial.replace(/^\s+/m, "").replace(/\s+$/m, "") };
  for (let i = 0; i <= x; i++) {
    const step = steps[i];
    switch (step.type) {
      case "move":
        s.cursor = step.cursor;
        s.html = s
          .html
          .split("\n")
          .map((text, line) => {
            if (line !== s.cursor[0]) {
              return text;
            }
            return text.substring(0, s.cursor[1]) + "|" + text.substring(s.cursor[1]);
          })
          .join("\n");
        break;
      case "insert":
        const pos = s.cursor || [0, 0];
        s.html =
          s
            .html
            .split("\n")
            .map((text, line) => {
              if (line !== pos[0]) {
                return text;
              }
              return text.substring(0, pos[1]) + step.character + text.substring(pos[1]);
            })
            .join("\n");
        s.cursor = [pos[0], pos[1] + 1];
        break;
    }
  }
  return s.html;
};

export default function CodeEditor({ script, onPublish }) {
  const [step, setStep] = useState(-1);

  useEffect(() => {
    setStep(-1);
  }, [script, setStep]);

  useEffect(() => {
    if (step < script.steps.length - 1) {
      const t = setTimeout(() => setStep(step + 1), Math.round(100 + Math.random() * 500));
      return () => clearTimeout(t);
    }
  }, [script, setStep, step]);

  const html = play(script, step);

  useEffect(() => {
    if (step < 0 || script.steps[step]?.publish) {
      onPublish(html.replace("|", ""));
    }
  }, [onPublish, script, step]);

  return (
    <div>
      <div className={`
        background:linear-gradient(#{$gray80},#{$gray95});
        padding-x:$len12;
        padding-y:$len8;
        border-top-radius:$md;
        display:flex;
        justify-content:flex-end;
        border-top-width:$len2;
        border-x-width:0;
        border-bottom-width:0;
        border-style:solid;
        border-color:$gray60;
      `}>
        <button
          className={`
            appearance:none;
            outline:0;
            border:0;
            margin:0;
            padding:0;
            width:$len20;
            height:$len20;
            border-radius:$full;
            background:linear-gradient(#{$gray95},#{$gray30});
            display:inline-flex;
            align-items:center;
            justify-content:center;
            :focus{box-shadow:#{$outline-offset-gray70}}
            :focus{background:linear-gradient(#{$gray80},#{$gray20})}
          `}
          onClick={() => { setStep(-1); }}>
          <div className={`
            border:0;
            font-size:$len16;
            width:1em;
            height:1em;
            box-shadow:inset__0__0.1em__0__0__#{$gray20},inset__0__-0.1em__0__0__#{$gray50};
            background:$gray40;
            color:$gray80;
            :hover>{background:$gray30}
            border-radius:$full;
            display:flex;
            align-items:center;
            justify-content:center;
            position:relative;
            ::after{content:''}
            ::after{position:absolute}
            ::after{inset:0}
            ::after{border-radius:$full}
            :active>{box-shadow:inset__0__-0.1em__0__0__#{$gray20},inset__0__0.1em__0__0__#{$gray50}}
          `}>
            <svg className="width:0.75em; :active_{width:0.625em}" viewBox="0 0 16 16">
              <circle cx="8" cy="9" r="6" fill="transparent" stroke="currentColor" strokeDasharray="20 7.69" />
              <path fill="currentColor" d="M 4 3 l 4 -3 v 6" />
            </svg>
          </div>
        </button>
      </div>
      <div className={`
        background:$gray95;
        border-bottom-radius:$md;
        color:$gray30;
        padding:$len16;
        position:relative;
      `}>
        <div className={`
          font:$code;
          color:$gray60;
          position:absolute;
          top:$len16;
          left:$len16;
          bottom:$len16;
          text-align:right;
          overflow:hidden;
        `}>
          {
            Array
              .from(Array(50).keys())
              .map(x => x + 1)
              .map(x => <div key={x}>{x}</div>)
          }
        </div>
        <pre className="margin-y:0; margin-left:$len32; margin-right:0;">
          <code className="font:$code;" dangerouslySetInnerHTML={{
            __html: highlight(html)
          }} />
        </pre>
      </div>
    </div>
  );
}
