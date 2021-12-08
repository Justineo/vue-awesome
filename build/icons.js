import fs from "fs";
import path from "path";
import mkdirp from "mkdirp";
import rimraf from "rimraf";
import stringify from "stringify-object";
import icons from "../assets/icons.json";

const MODULE_TPL = fs.readFileSync(
  path.resolve(__dirname, "./icon.tpl"),
  "utf8"
);
const ICON_PATH = path.resolve(__dirname, "../icons");
const ICON_SRC_PATH = path.resolve(__dirname, "../src/icons");
rimraf.sync(ICON_PATH);
rimraf.sync(ICON_SRC_PATH);

let indexModule = "";
let names = Object.keys(icons);
names.forEach(function (name) {
  let icon = {};
  icon[name] = icons[name];
  let filePath = path.join(ICON_PATH, `${name}.js`);
  let srcFilePath = path.join(ICON_SRC_PATH, `${name}.js`);
  let dirname = path.dirname(filePath);
  let srcDirname = path.dirname(srcFilePath);

  if (!fs.existsSync(dirname)) {
    mkdirp.sync(dirname);
  }

  if (!fs.existsSync(srcDirname)) {
    mkdirp.sync(srcDirname);
  }

  let content = MODULE_TPL.replace(
    "${namespace}",
    name.indexOf("/") === -1 ? "" : "../"
  ).replace("${icon}", stringify(icon, { indent: "  " }));
  fs.writeFileSync(filePath, content.replace("${filename}", 'Icon'));
  fs.writeFileSync(srcFilePath, content.replace("${filename}", 'Icon.vue'));
  indexModule += `import './${name}'\n`;
});

fs.writeFileSync(ICON_PATH + "/index.js", indexModule);
fs.writeFileSync(ICON_SRC_PATH + "/index.js", indexModule);
console.log(names.length + " icon modules generated.");
