import * as browserSync from "browser-sync";
import plumber from "gulp-plumber";
// import coffee from "gulp-coffee";
// import notify from "gulp-notify";

export const plugins = {
  browserSync: browserSync.create(),
  plumber: plumber,
  // coffee: coffee,
  // notify: notify,
};
