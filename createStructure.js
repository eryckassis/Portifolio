const fs = require("fs-extra");
const path = require("path");

const structure = {
  public: {
    fonts: {},
    images: {},
    videos: {},
  },
  src: {
    app: {
      "[...]": {},
      "not-found.tsx": "",
      "layout.tsx": "",
      "page.tsx": "",
    },
    components: {
      ui: {},
      layout: {},
      sections: {},
      animations: {},
    },
    hooks: {},
    styles: {
      "globals.css": "",
      "variables.css": "",
      "animations.css": "",
    },
    utils: {},
    lib: {},
    types: {},
    constants: {},
  },
  tests: {},
  ".env.local": "",
  "next.config.js": "",
  "tsconfig.json": "",
  "package.json": "",
  "README.md": "",
};

function createFilesAndFolders(basePath, structure) {
  Object.entries(structure).forEach(([name, content]) => {
    const fullPath = path.join(basePath, name);
    if (typeof content === "object") {
      fs.ensureDirSync(fullPath);
      createFilesAndFolders(fullPath, content);
    } else {
      fs.ensureFileSync(fullPath);
      if (content !== undefined && content !== "") {
        fs.writeFileSync(fullPath, content);
      }
    }
  });
}

createFilesAndFolders(".", structure);
console.log("Estrutura do projeto criado com sucesso!.");
