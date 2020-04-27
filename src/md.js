const fs = require("fs");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const { Renderer, lexer, parser } = require("marked");
const hljs = require("highlight.js");
const { page } = require("./common.js");

const renderer = Object.assign(new Renderer(), {
  code: (code, lang) => `
    <pre class="
      mdblock
      padding:8px;
      background:rgba(255,255,255,0.2);
      border-width:1px;
      border-style:solid;
      border-color:rgba(0,0,0,0.2);
      overflow-x:auto;
    "><code class="font-family:$monospace;">${
        hljs.highlight(lang, code).value
      }</code></pre>
  `,
  codespan: code => `<code class="font-family:$monospace;">${code}</code>`,
  heading(text, level) {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");
    const fontSize = {
      1: "font-size:36px;",
      2: "font-size:24px;",
      3: "font-size:20px;",
      4: "font-size:16px;",
      5: "font-size:14px;",
      6: "font-size:12px;",
    }[level];

    return `
      <h${level} class="
        margin-x:0;
        margin-top:0;
        margin-bottom:0.5em;
        font-family:$sans-serif;
        font-weight:400;
        ${fontSize}
        mdblock
        mdblock+margin-top:0.5em;
      ">
        <a name="${escapedText}" class="anchor" href="#${escapedText}">
          <span class="header-link"></span>
        </a>
        ${text}
      </h${level}>
    `.trim();
  },
  link: (href, title, text) => `
    <a
      href="${href.replace(/^([a-z\-]+)\.md$/, (_, x) => `${x}.html`)}"
      class="
        color:$blue600;
        :hover{color:$blue500;}
        :active{color:$red600;}
        :hover:active{color:$red500;}
        :visited{color:$purple600;}
        :hover:visited{color:$purple500;}
      "
      ${title ? `title="${title}"` : ""}>
      ${text}</a> 
  `.trim(),
});

module.exports = async path => {
  const content = await readFile(path, "utf8");

  const tokens = lexer(content);

  const title = tokens
    .filter(({ type }) => type === "heading")
    .map(({ text }) => text)[0];

  return page({
    source: path,
    title,
    content: `
      <div class="
        min-height:100%;
        box-sizing:border-box;
        background:$blue100;
        color:$blue800;
        padding:16px;
        font-family:$sans-serif;
        font-size:16px;
        font-weight:400;
        line-height:1.4;
      ">
        ${parser(tokens, { renderer })}
      </div>
    `,
  });
};

