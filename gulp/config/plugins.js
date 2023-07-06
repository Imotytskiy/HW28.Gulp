import * as browserSync from "browser-sync";
import plumber from "gulp-plumber";
import concat from "gulp-concat";
// import coffee from "gulp-coffee";
// import notify from "gulp-notify";

export const plugins = {
  browserSync: browserSync.create(),
  plumber: plumber,
  concat: concat,
  // coffee: coffee,
  // notify: notify,
};
