import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    scss: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    // files: `${buildFolder}/files/`,
  },
  src: {
    js: `${srcFolder}/js/*.js`,
    scss: `${srcFolder}/scss/*.scss`,
    html: `${srcFolder}/*.html`,
    // files: `${srcFolder}/files/**/*.*`,
  },
  watch: {
    js: `${srcFolder}/js/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/*.html`,
    // files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
};
